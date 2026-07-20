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
      const urlStr = config.url || "";
      let pathname = urlStr;
      if (urlStr.startsWith("http://") || urlStr.startsWith("https://")) {
        try {
          pathname = new URL(urlStr).pathname;
        } catch (e) {
          pathname = urlStr;
        }
      }

      // Check if this is a public GET request
      const isGet = config.method && config.method.toLowerCase() === "get";
      const isPublicGet = isGet && (
        pathname === "/api/domains" ||
        pathname.startsWith("/api/domains/") ||
        pathname === "/api/categories" ||
        pathname === "/api/projects" ||
        pathname.startsWith("/api/projects/") ||
        pathname === "/api/search" ||
        pathname.includes("/book-promotion") ||
        pathname.includes("/contact-info")
      ) && !pathname.includes("/purchases") && !pathname.includes("/downloads");

      if (!isPublicGet) {
        let token = null;
        const isApiAdmin = pathname.startsWith("/api/admin") || pathname.includes("/admin/");
        if (isApiAdmin) {
          token = localStorage.getItem("ph-admin-token") || localStorage.getItem("ph-user-token");
        } else {
          token = localStorage.getItem("ph-user-token") || localStorage.getItem("ph-admin-token");
        }
        
        if (token && token !== "undefined" && token !== "null" && token.trim() !== "") {
          config.headers.Authorization = `Bearer ${token}`;
        }
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
