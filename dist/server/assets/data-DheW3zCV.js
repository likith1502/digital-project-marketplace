import axios from "axios";
//#region src/services/api.js
var API = axios.create({
	baseURL: "http://localhost:5000",
	headers: { "Content-Type": "application/json" }
});
API.interceptors.request.use((config) => {
	if (typeof window !== "undefined") {
		let token = null;
		if (config.url && (config.url.startsWith("/api/admin") || config.url.includes("/admin/"))) token = localStorage.getItem("ph-admin-token") || localStorage.getItem("ph-user-token");
		else token = localStorage.getItem("ph-user-token") || localStorage.getItem("ph-admin-token");
		if (token) config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
}, (error) => {
	return Promise.reject(error);
});
API.interceptors.response.use((response) => response, (error) => {
	if (error.response && error.response.status === 401) {
		if (typeof window !== "undefined") {
			localStorage.removeItem("ph-admin-token");
			localStorage.removeItem("ph-admin-session");
			localStorage.removeItem("ph-user-token");
		}
	}
	return Promise.reject(error);
});
//#endregion
//#region src/lib/data.ts
var DOMAINS = [];
function mapBackendDomainToDomain(d) {
	return {
		id: d.id,
		name: d.name || "Unnamed Domain",
		description: d.description || "",
		thumbnailUrl: d.thumbnailUrl || d.thumbnail || "",
		thumbnail: d.thumbnailUrl || d.thumbnail || "",
		count: d.count || 0,
		slug: d.id
	};
}
function mapBackendProjectToProject(p) {
	return {
		id: p.id,
		domainId: p.domainId || "",
		domainName: p.domainName || "",
		projectName: p.projectName || p.title || "Untitled Project",
		title: p.projectName || p.title || "Untitled Project",
		description: p.description || "",
		longDescription: p.longDescription || p.description || "",
		technologies: p.technologies || [],
		difficulty: p.difficulty || p.difficultyLevel || "Medium",
		difficultyLevel: p.difficulty || p.difficultyLevel || "Medium",
		price: p.price || 0,
		thumbnailUrl: p.thumbnailUrl || p.thumbnail || "",
		thumbnail: p.thumbnailUrl || p.thumbnail || "",
		resourcesIncluded: p.resourcesIncluded || [],
		files: p.files || [],
		filesList: p.filesList || [],
		totalSize: p.totalSize || "0 MB",
		downloads: p.downloads || 0,
		rating: p.rating || 5,
		createdAt: p.createdAt || "",
		updatedAt: p.updatedAt || ""
	};
}
async function fetchDomains() {
	try {
		const res = await API.get("/api/domains");
		if (res.data && Array.isArray(res.data)) {
			const mapped = res.data.map(mapBackendDomainToDomain);
			DOMAINS.length = 0;
			DOMAINS.push(...mapped);
		}
	} catch (err) {
		console.error("Failed to fetch domains from backend:", err);
	}
	return DOMAINS;
}
async function getDomainBySlug(slug) {
	try {
		const res = await API.get(`/api/domains/${slug}`);
		if (res.data) return mapBackendDomainToDomain(res.data);
	} catch (err) {
		console.error(`Failed to fetch domain by slug (${slug}):`, err);
	}
	return DOMAINS.find((d) => d.slug === slug || d.id === slug);
}
async function fetchProjectsForDomain(domainId) {
	try {
		const res = await API.get(`/api/domains/${domainId}/projects`);
		if (res.data && Array.isArray(res.data)) return res.data.map(mapBackendProjectToProject);
	} catch (err) {
		console.error(`Failed to fetch projects for domain (${domainId}):`, err);
	}
	return [];
}
async function getProjectById(projectId) {
	try {
		const res = await API.get(`/api/projects/${projectId}`);
		if (res.data) return mapBackendProjectToProject(res.data);
	} catch (err) {
		console.error(`Failed to fetch project details (${projectId}):`, err);
	}
	return null;
}
async function getPurchases() {
	try {
		const isAdmin = typeof window !== "undefined" && !!localStorage.getItem("ph-admin-token");
		const endpoint = isAdmin ? "/api/admin/transactions" : "/api/purchases";
		const res = await API.get(endpoint);
		if (res.data && Array.isArray(res.data)) return res.data.map((item) => {
			if (isAdmin) return {
				id: item.orderId || item.id,
				domainId: item.projectId || "",
				domainName: item.domainName || "—",
				projectId: item.projectId,
				projectTitle: item.projectTitle || "—",
				buyer: item.user,
				mobile: item.mobile || "—",
				college: item.college || "—",
				email: item.email || void 0,
				amount: item.amount,
				status: item.status === "completed" ? "paid" : item.status,
				date: item.date ? item.date.slice(0, 10) : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				transactionId: item.transactionId || item.id,
				couponCode: item.couponCode || "",
				bookUnlocked: item.bookUnlocked !== void 0 ? item.bookUnlocked : item.bookOfferUnlocked || false,
				bookOfferUnlocked: item.bookOfferUnlocked || false,
				publisherName: item.publisherName || "",
				publisherWebsite: item.publisherWebsite || item.publisherLink || "",
				publisherLink: item.publisherLink || "",
				publisherLogo: item.publisherLogo || "",
				purchaseDate: item.purchaseDate || "",
				time: item.time || "",
				razorpayOrderId: item.razorpayOrderId || "",
				razorpayPaymentId: item.razorpayPaymentId || ""
			};
			else {
				const projectMapped = item.project ? mapBackendProjectToProject(item.project) : null;
				return {
					id: item.id,
					domainId: projectMapped?.domainId || "",
					domainName: projectMapped?.domainName || "—",
					projectId: item.project?.id || "",
					projectTitle: projectMapped?.projectName || "—",
					buyer: "Me",
					mobile: "—",
					college: "—",
					email: void 0,
					amount: item.amount,
					status: item.status === "completed" ? "paid" : item.status,
					date: item.date ? item.date.slice(0, 10) : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
					transactionId: item.razorpay_payment_id || item.id,
					couponCode: item.couponCode || "",
					bookUnlocked: item.bookUnlocked !== void 0 ? item.bookUnlocked : item.bookOfferUnlocked || false,
					bookOfferUnlocked: item.bookOfferUnlocked || false,
					publisherName: item.publisherName || "",
					publisherWebsite: item.publisherWebsite || item.publisherLink || "",
					publisherLink: item.publisherLink || "",
					publisherLogo: item.publisherLogo || "",
					purchaseDate: item.purchaseDate || "",
					razorpayOrderId: item.razorpayOrderId || item.razorpay_order_id || "",
					razorpayPaymentId: item.razorpayPaymentId || item.razorpay_payment_id || ""
				};
			}
		});
		return [];
	} catch (err) {
		console.error("Failed to fetch purchases:", err);
		return [];
	}
}
function addPurchase(p) {
	if (typeof window === "undefined") return;
	const stored = localStorage.getItem("ph-purchases");
	const extra = stored ? JSON.parse(stored) : [];
	localStorage.setItem("ph-purchases", JSON.stringify([p, ...extra]));
}
async function adminLogin(email, password) {
	try {
		const res = await API.post("/api/admin/login", {
			email,
			password
		});
		if (res.data && res.data.access_token) {
			localStorage.setItem("ph-admin-token", res.data.access_token);
			localStorage.setItem("ph-admin-session", JSON.stringify({
				email: res.data.user.email,
				name: res.data.user.name
			}));
			return true;
		}
		return false;
	} catch (err) {
		console.error("Admin login API error:", err);
		return false;
	}
}
async function adminRegister(name, email, password) {
	try {
		const res = await API.post("/api/admin/register", {
			name,
			email,
			password
		});
		if (res.data && res.data.access_token) {
			localStorage.setItem("ph-admin-token", res.data.access_token);
			localStorage.setItem("ph-admin-session", JSON.stringify({
				email: res.data.user.email,
				name: res.data.user.name
			}));
			return true;
		}
		return false;
	} catch (err) {
		console.error("Admin register API error:", err);
		return false;
	}
}
function adminLogout() {
	localStorage.removeItem("ph-admin-token");
	localStorage.removeItem("ph-admin-session");
}
function getAdminSession() {
	if (typeof window === "undefined") return null;
	const s = localStorage.getItem("ph-admin-session");
	return s ? JSON.parse(s) : null;
}
//#endregion
export { adminRegister as a, getAdminSession as c, getPurchases as d, API as f, adminLogout as i, getDomainBySlug as l, addPurchase as n, fetchDomains as o, adminLogin as r, fetchProjectsForDomain as s, DOMAINS as t, getProjectById as u };
