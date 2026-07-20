import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { H as ArrowLeft, c as ShieldAlert } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as ThemeToggle } from "./ThemeToggle-oSV43H9_.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/unauthorized-nQ_u1BFF.js
var import_jsx_runtime = require_jsx_runtime();
function UnauthorizedPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -left-40 size-96 bg-destructive/10 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 -right-40 size-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "flex justify-end p-6 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 flex items-center justify-center px-6 py-12 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30,
						scale: .98
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					transition: {
						duration: .6,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "w-full max-w-md p-8 md:p-10 rounded-lg bg-card/60 backdrop-blur-lg border border-border shadow-2xl text-center relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mx-auto mb-8 size-20 rounded-full bg-destructive/10 grid place-items-center text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								className: "absolute inset-0 rounded-full bg-destructive/5",
								animate: { scale: [
									1,
									1.4,
									1
								] },
								transition: {
									repeat: Infinity,
									duration: 2,
									ease: "easeInOut"
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-10 relative z-10" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] font-bold text-destructive tracking-widest uppercase block mb-3",
							children: "Error Code 403"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-3xl md:text-4xl tracking-tight mb-4",
							children: "Unauthorized Access"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm leading-relaxed mb-10",
							children: "This section of the archive is locked. If you're an administrator, please sign in with your admin credentials to open this shelf."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/login",
								className: "w-full h-12 inline-flex items-center justify-center px-6 bg-foreground text-background text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity",
								children: "Sign in as Admin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 border border-border bg-background hover:bg-accent text-xs font-bold uppercase tracking-widest rounded-sm transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Return Home"]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "py-6 text-center font-mono text-[10px] text-muted-foreground/60 uppercase tracking-widest",
				children: "ProjectHub Security Protocol"
			})
		]
	});
}
//#endregion
export { UnauthorizedPage as component };
