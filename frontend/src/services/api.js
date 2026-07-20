import axios from "axios";

const getBaseURL = () => {
  let url = "";
  // 1. Explicitly configured API URL
  if (import.meta.env.VITE_API_URL) {
    url = import.meta.env.VITE_API_URL;
  }
  // 2. Vercel System Environment Variable during SSR
  else if (typeof process !== "undefined" && process.env && process.env.VERCEL_URL) {
    url = `https://${process.env.VERCEL_URL}`;
  }
  // 3. Fallback for client-side
  else if (typeof window !== "undefined") {
    const hn = window.location.hostname;
    if (hn === "localhost" || hn === "127.0.0.1" || hn === "[::1]" || hn === "::1") {
      url = "http://localhost:5000";
    } else {
      url = window.location.origin;
    }
  }
  // 4. Fallback for local development
  else {
    url = "http://localhost:5000";
  }

  // Strip trailing '/api' or '/api/' to avoid duplicate /api/api/ during SSR
  if (url) {
    url = url.replace(/\/api\/?$/, "");
  }
  return url;
};

const API = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      let token = null;
      const isApiAdmin = config.url && (config.url.startsWith("/api/admin") || config.url.includes("/admin/"));
      if (isApiAdmin) {
        token = localStorage.getItem("ph-admin-token") || localStorage.getItem("ph-user-token");
      } else {
        token = localStorage.getItem("ph-user-token") || localStorage.getItem("ph-admin-token");
      }
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle 401s (token expired/invalid)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Clear sessions if unauthorized
      if (typeof window !== "undefined") {
        localStorage.removeItem("ph-admin-token");
        localStorage.removeItem("ph-admin-session");
        localStorage.removeItem("ph-user-token");
      }
    }
    return Promise.reject(error);
  }
);

export default API;
