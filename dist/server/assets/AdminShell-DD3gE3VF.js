import { t as ThemeToggle } from "./ThemeToggle-oSV43H9_.js";
import { c as getAdminSession, i as adminLogout } from "./data-DheW3zCV.js";
import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { FolderKanban, LayoutDashboard, LogOut, Menu, Receipt, Settings } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/components/admin/AdminShell.tsx
var NAV = [
	{
		to: "/admin",
		label: "Dashboard",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/admin/domains",
		label: "Domains",
		icon: FolderKanban
	},
	{
		to: "/admin/transactions",
		label: "Transactions",
		icon: Receipt
	},
	{
		to: "/admin/settings",
		label: "Settings",
		icon: Settings
	}
];
function AdminShell({ children, title }) {
	const navigate = useNavigate();
	const [session, setSession] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	useEffect(() => {
		const s = getAdminSession();
		if (!s) {
			navigate({ to: "/unauthorized" });
			return;
		}
		setSession(s);
	}, [navigate]);
	if (!session) return null;
	const SidebarContent = /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "px-6 py-6 border-b border-sidebar-border",
			children: [/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "font-serif text-xl italic text-primary",
				children: "ProjectHub"
			}), /* @__PURE__ */ jsx("div", {
				className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1",
				children: "Admin Console"
			})]
		}),
		/* @__PURE__ */ jsx("nav", {
			className: "px-3 py-4 flex-1 space-y-1",
			children: NAV.map((n) => {
				const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
				return /* @__PURE__ */ jsxs(Link, {
					to: n.to,
					onClick: () => setMobileOpen(false),
					className: `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-colors ${active ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium" : "text-sidebar-foreground hover:bg-sidebar-accent"}`,
					children: [/* @__PURE__ */ jsx(n.icon, { className: "size-4" }), n.label]
				}, n.to);
			})
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "p-3 border-t border-sidebar-border",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "px-3 py-2 mb-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "text-sm font-medium truncate",
					children: session.name
				}), /* @__PURE__ */ jsx("div", {
					className: "text-xs text-muted-foreground truncate",
					children: session.email
				})]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: () => {
					adminLogout();
					navigate({ to: "/admin/login" });
				},
				className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm text-sidebar-foreground hover:bg-sidebar-accent",
				children: [/* @__PURE__ */ jsx(LogOut, { className: "size-4" }), " Sign out"]
			})]
		})
	] });
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background flex",
		children: [
			/* @__PURE__ */ jsx("aside", {
				className: "hidden lg:flex w-64 flex-col bg-sidebar border-r border-sidebar-border",
				children: SidebarContent
			}),
			/* @__PURE__ */ jsx(AnimatePresence, { children: mobileOpen && /* @__PURE__ */ jsx(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "fixed inset-0 z-50 bg-foreground/40 lg:hidden",
				onClick: () => setMobileOpen(false),
				children: /* @__PURE__ */ jsx(motion.aside, {
					initial: { x: "-100%" },
					animate: { x: 0 },
					exit: { x: "-100%" },
					transition: { type: "tween" },
					className: "w-64 h-full flex flex-col bg-sidebar border-r border-sidebar-border",
					onClick: (e) => e.stopPropagation(),
					children: SidebarContent
				})
			}) }),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ jsxs("header", {
					className: "sticky top-0 z-30 h-16 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("button", {
							onClick: () => setMobileOpen(true),
							className: "lg:hidden grid size-9 place-items-center rounded-md ring-1 ring-border",
							children: /* @__PURE__ */ jsx(Menu, { className: "size-4" })
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
							children: "Admin"
						}), /* @__PURE__ */ jsx("div", {
							className: "font-serif text-lg leading-none",
							children: title
						})] })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx(ThemeToggle, {}), /* @__PURE__ */ jsx("div", {
							className: "size-9 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-semibold",
							children: session.name.slice(0, 1).toUpperCase()
						})]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "p-6 md:p-8",
					children
				})]
			})
		]
	});
}
//#endregion
export { AdminShell as t };
