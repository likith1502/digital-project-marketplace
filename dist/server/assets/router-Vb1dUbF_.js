import { n as ThemeProvider } from "./ThemeToggle-oSV43H9_.js";
import { o as fetchDomains } from "./data-DheW3zCV.js";
import { t as Route$14 } from "./payment-success-CQ9OEjab.js";
import { t as Route$15 } from "./payment-failed-BLB8D7ND.js";
import { t as Route$16 } from "./payment-cancelled-COuQQbkW.js";
import { t as Route$17 } from "./projects._id-Y7JYZuMA.js";
import { t as Route$18 } from "./domains._slug-CHLnMC9m.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "lucide-react";
import "sonner";
//#region src/styles.css?url
var styles_default = "/assets/styles-Do7KehAb.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-8xl text-primary italic",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "This archive entry doesn't exist — or it has been moved to another shelf."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Return Home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. Try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	loader: async () => {
		await fetchDomains();
	},
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ProjectHub — Premium Academic Resources, Instantly" },
			{
				name: "description",
				content: "Download premium academic resources instantly. Projects, notes, PPTs and study materials organized by domain."
			},
			{
				property: "og:title",
				content: "ProjectHub"
			},
			{
				property: "og:description",
				content: "Premium domain-wise academic resource bundles, delivered instantly."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
			}
		],
		scripts: [{ children: `(function(){try{var t=localStorage.getItem('ph-theme')||'system';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();` }]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(Outlet, {}) })
	});
}
//#endregion
//#region src/routes/unauthorized.tsx
var $$splitComponentImporter$12 = () => import("./unauthorized-nQ_u1BFF.js");
var Route$12 = createFileRoute("/unauthorized")({
	head: () => ({ meta: [{ title: "403 Unauthorized Access — ProjectHub" }, {
		name: "description",
		content: "You do not have permission to access this resource."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$11 = () => import("./contact-DuCJKptQ.js");
var Route$11 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Us — ProjectHub" }, {
		name: "description",
		content: "Get in touch with Mr. Raghuraj at ProjectHub for any support queries."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$10 = () => import("./about-BHG3fVgo.js");
var Route$10 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Us — ProjectHub" }, {
		name: "description",
		content: "Learn more about Your Complete Academic Resource Marketplace."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$9 = () => import("./routes-BqSgmGXH.js");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "ProjectHub — Download Premium Academic Resources Instantly" }, {
		name: "description",
		content: "Curated, domain-specific academic bundles — projects, notes, PPTs, viva questions and documentation. Instant download."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/domains.index.tsx
var $$splitComponentImporter$8 = () => import("./domains.index-BgesY4Wu.js");
var Route$8 = createFileRoute("/domains/")({
	head: () => ({ meta: [{ title: "All Domains — ProjectHub" }, {
		name: "description",
		content: "Browse all academic resource bundles by domain on ProjectHub."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
//#endregion
//#region src/routes/admin.index.tsx
var $$splitComponentImporter$7 = () => import("./admin.index-DtsL02ZG.js");
var Route$7 = createFileRoute("/admin/")({
	beforeLoad: () => {
		if (!(typeof window !== "undefined" && localStorage.getItem("ph-admin-token"))) throw redirect({ to: "/unauthorized" });
	},
	head: () => ({ meta: [{ title: "Admin Dashboard — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/admin.transactions.tsx
var $$splitComponentImporter$6 = () => import("./admin.transactions-B_IfHkS3.js");
var Route$6 = createFileRoute("/admin/transactions")({
	beforeLoad: () => {
		if (!(typeof window !== "undefined" && localStorage.getItem("ph-admin-token"))) throw redirect({ to: "/unauthorized" });
	},
	head: () => ({ meta: [{ title: "Transactions — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/admin.settings.tsx
var $$splitComponentImporter$5 = () => import("./admin.settings-DN6NWQB2.js");
var Route$5 = createFileRoute("/admin/settings")({
	beforeLoad: () => {
		if (!(typeof window !== "undefined" && localStorage.getItem("ph-admin-token"))) throw redirect({ to: "/unauthorized" });
	},
	head: () => ({ meta: [{ title: "Settings — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/admin.register.tsx
var $$splitComponentImporter$4 = () => import("./admin.register-k5fbBqiX.js");
var Route$4 = createFileRoute("/admin/register")({
	head: () => ({ meta: [{ title: "Admin Register — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/admin.login.tsx
var $$splitComponentImporter$3 = () => import("./admin.login-BbkIXBl3.js");
var Route$3 = createFileRoute("/admin/login")({
	head: () => ({ meta: [{ title: "Admin Login — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/admin.domains.tsx
var $$splitComponentImporter$2 = () => import("./admin.domains-akaWQuKL.js");
var Route$2 = createFileRoute("/admin/domains")({
	beforeLoad: () => {
		if (!(typeof window !== "undefined" && localStorage.getItem("ph-admin-token"))) throw redirect({ to: "/unauthorized" });
	},
	head: () => ({ meta: [{ title: "Domains & Projects — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/admin.dashboard.tsx
var $$splitComponentImporter$1 = () => import("./admin.dashboard-BkGwWQWF.js");
var Route$1 = createFileRoute("/admin/dashboard")({
	beforeLoad: () => {
		if (!(typeof window !== "undefined" && localStorage.getItem("ph-admin-token"))) throw redirect({ to: "/unauthorized" });
		throw redirect({ to: "/admin" });
	},
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/admin.contacts.tsx
var $$splitComponentImporter = () => import("./admin.contacts-An7g_GEj.js");
var Route = createFileRoute("/admin/contacts")({
	beforeLoad: () => {
		throw redirect({ to: "/admin" });
	},
	head: () => ({ meta: [{ title: "Contact Requests — Admin" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var UnauthorizedRoute = Route$12.update({
	id: "/unauthorized",
	path: "/unauthorized",
	getParentRoute: () => Route$13
});
var PaymentSuccessRoute = Route$14.update({
	id: "/payment-success",
	path: "/payment-success",
	getParentRoute: () => Route$13
});
var PaymentFailedRoute = Route$15.update({
	id: "/payment-failed",
	path: "/payment-failed",
	getParentRoute: () => Route$13
});
var PaymentCancelledRoute = Route$16.update({
	id: "/payment-cancelled",
	path: "/payment-cancelled",
	getParentRoute: () => Route$13
});
var ContactRoute = Route$11.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$10.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var DomainsIndexRoute = Route$8.update({
	id: "/domains/",
	path: "/domains/",
	getParentRoute: () => Route$13
});
var AdminIndexRoute = Route$7.update({
	id: "/admin/",
	path: "/admin/",
	getParentRoute: () => Route$13
});
var ProjectsIdRoute = Route$17.update({
	id: "/projects/$id",
	path: "/projects/$id",
	getParentRoute: () => Route$13
});
var DomainsSlugRoute = Route$18.update({
	id: "/domains/$slug",
	path: "/domains/$slug",
	getParentRoute: () => Route$13
});
var AdminTransactionsRoute = Route$6.update({
	id: "/admin/transactions",
	path: "/admin/transactions",
	getParentRoute: () => Route$13
});
var AdminSettingsRoute = Route$5.update({
	id: "/admin/settings",
	path: "/admin/settings",
	getParentRoute: () => Route$13
});
var AdminRegisterRoute = Route$4.update({
	id: "/admin/register",
	path: "/admin/register",
	getParentRoute: () => Route$13
});
var AdminLoginRoute = Route$3.update({
	id: "/admin/login",
	path: "/admin/login",
	getParentRoute: () => Route$13
});
var AdminDomainsRoute = Route$2.update({
	id: "/admin/domains",
	path: "/admin/domains",
	getParentRoute: () => Route$13
});
var AdminDashboardRoute = Route$1.update({
	id: "/admin/dashboard",
	path: "/admin/dashboard",
	getParentRoute: () => Route$13
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PaymentCancelledRoute,
	PaymentFailedRoute,
	PaymentSuccessRoute,
	UnauthorizedRoute,
	AdminContactsRoute: Route.update({
		id: "/admin/contacts",
		path: "/admin/contacts",
		getParentRoute: () => Route$13
	}),
	AdminDashboardRoute,
	AdminDomainsRoute,
	AdminLoginRoute,
	AdminRegisterRoute,
	AdminSettingsRoute,
	AdminTransactionsRoute,
	DomainsSlugRoute,
	ProjectsIdRoute,
	AdminIndexRoute,
	DomainsIndexRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
