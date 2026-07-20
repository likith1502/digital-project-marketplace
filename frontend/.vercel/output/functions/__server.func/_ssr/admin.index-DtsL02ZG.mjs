import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as LoaderCircle, E as Folder, M as Download, O as FileText, V as ArrowUpRight, p as Receipt } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as getAdminSession, t as API } from "./data-DheW3zCV.mjs";
import { t as AdminShell } from "./AdminShell-DD3gE3VF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.index-DtsL02ZG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DashboardPage() {
	const [data, setData] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		API.get("/api/admin/analytics").then((res) => {
			setData(res.data);
			setLoading(false);
		}).catch((err) => {
			console.error(err);
			setLoading(false);
		});
	}, []);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminShell, {
		title: "Dashboard",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-[50vh] items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-8 animate-spin text-primary" })
		})
	});
	const totalDomains = data?.totalDomains || 0;
	const totalProjects = data?.totalProjects || 0;
	data?.totalFiles;
	const totalOrders = data?.totalOrders || 0;
	const totalDownloads = data?.totalDownloads || 0;
	const adminName = getAdminSession()?.name || "Admin";
	const stats = [
		{
			label: "Total Domains",
			value: totalDomains,
			icon: Folder
		},
		{
			label: "Total Projects",
			value: totalProjects,
			icon: FileText
		},
		{
			label: "Total Sales",
			value: totalOrders,
			icon: Receipt
		},
		{
			label: "Total Downloads",
			value: totalDownloads,
			icon: Download
		}
	];
	const purchases = data?.recentOrders || [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Dashboard",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "font-serif text-3xl mb-1",
					children: [
						"Hi, ",
						adminName,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "👋"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Here's what's happening with your archive today."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { delay: i * .05 },
					className: "border border-border bg-card rounded-md p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-between mb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-9 rounded-md bg-primary/10 grid place-items-center text-primary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4" })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-2xl font-medium font-serif",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1",
							children: s.label
						})
					]
				}, s.label))
			}),
			totalProjects === 0 && totalOrders === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-dashed border-border rounded-md p-12 text-center text-muted-foreground bg-card mb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-medium text-foreground",
					children: "No Analytics Available Yet"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm mt-1",
					children: "Create domains and complete checkouts to see dashboard activity."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-border bg-card rounded-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between p-6 border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: "Activity"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-xl",
						children: "Recent transactions"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/transactions",
						className: "text-xs font-mono uppercase tracking-widest text-primary hover:underline inline-flex items-center gap-1",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "divide-y divide-border",
					children: [purchases.slice(0, 5).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-6 py-4 flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 mr-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium truncate",
								children: p.user
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground truncate",
								children: p.projectTitle
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-medium",
								children: ["₹", p.amount.toLocaleString("en-IN")]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
								children: p.date ? p.date.slice(0, 10) : ""
							})]
						})]
					}, p.id)), purchases.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-6 text-center text-muted-foreground text-sm",
						children: "No recent transactions."
					})]
				})]
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
