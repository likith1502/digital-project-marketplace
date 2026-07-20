import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as CircleAlert, H as ArrowLeft, d as RotateCcw } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.mjs";
import { u as getDomainBySlug } from "./data-DheW3zCV.mjs";
import { t as Route } from "./payment-cancelled-COuQQbkW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-cancelled-BYZUO5BU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CancelledPage() {
	const { domain } = Route.useSearch();
	const [d, setD] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (domain) getDomainBySlug(domain).then(setD);
	}, [domain]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-40 -left-40 size-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 -right-40 size-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 flex items-center justify-center px-6 py-20 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "w-full max-w-md text-center bg-card/65 backdrop-blur-lg border border-border rounded-lg p-8 md:p-10 shadow-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { scale: 0 },
							animate: { scale: 1 },
							transition: {
								delay: .1,
								type: "spring",
								stiffness: 200
							},
							className: "mx-auto mb-6 size-20 rounded-full bg-amber-500/15 border border-amber-500/20 grid place-items-center text-amber-500 shadow-lg shadow-amber-500/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-10" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-2",
							children: "Session Cancelled"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif text-3xl tracking-tight mb-4",
							children: "Payment Cancelled"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm leading-relaxed mb-8",
							children: "Your payment was not completed. You closed the checkout widget before the transaction could finish. If you experienced issues, feel free to try again."
						}),
						d && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border bg-background/50 rounded-md p-4 text-left space-y-2 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono uppercase tracking-wider text-muted-foreground",
									children: "Item"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium text-foreground",
									children: d.name
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between items-center text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono uppercase tracking-wider text-muted-foreground",
									children: "Price"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-semibold text-foreground",
									children: ["₹", d.price.toLocaleString("en-IN")]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3",
							children: d ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/domains/$slug",
								params: { slug: d.id },
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity shadow-md shadow-amber-500/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Try Again"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/domains/$slug",
								params: { slug: d.id },
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 border border-border bg-background hover:bg-accent text-xs font-bold uppercase tracking-widest rounded-sm transition-colors text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Go Back"]
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/domains",
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity shadow-md shadow-amber-500/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " Try Again"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/domains",
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 border border-border bg-background hover:bg-accent text-xs font-bold uppercase tracking-widest rounded-sm transition-colors text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " Go Back"]
							})] })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { CancelledPage as component };
