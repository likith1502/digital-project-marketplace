import { l as getDomainBySlug } from "./data-DheW3zCV.js";
import { t as Route } from "./payment-cancelled-COuQQbkW.js";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertCircle, ArrowLeft, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/payment-cancelled.tsx?tsr-split=component
function CancelledPage() {
	const { domain } = Route.useSearch();
	const [d, setD] = useState(null);
	useEffect(() => {
		if (domain) getDomainBySlug(domain).then(setD);
	}, [domain]);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background flex flex-col relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute -top-40 -left-40 size-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -right-40 size-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" }),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1 flex items-center justify-center px-6 py-20 relative z-10",
				children: /* @__PURE__ */ jsxs(motion.div, {
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
						/* @__PURE__ */ jsx(motion.div, {
							initial: { scale: 0 },
							animate: { scale: 1 },
							transition: {
								delay: .1,
								type: "spring",
								stiffness: 200
							},
							className: "mx-auto mb-6 size-20 rounded-full bg-amber-500/15 border border-amber-500/20 grid place-items-center text-amber-500 shadow-lg shadow-amber-500/10",
							children: /* @__PURE__ */ jsx(AlertCircle, { className: "size-10" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-amber-500 font-bold mb-2",
							children: "Session Cancelled"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-serif text-3xl tracking-tight mb-4",
							children: "Payment Cancelled"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground text-sm leading-relaxed mb-8",
							children: "Your payment was not completed. You closed the checkout widget before the transaction could finish. If you experienced issues, feel free to try again."
						}),
						d && /* @__PURE__ */ jsxs("div", {
							className: "border border-border bg-background/50 rounded-md p-4 text-left space-y-2 mb-8",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between items-center text-xs",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono uppercase tracking-wider text-muted-foreground",
									children: "Item"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium text-foreground",
									children: d.name
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between items-center text-xs",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-mono uppercase tracking-wider text-muted-foreground",
									children: "Price"
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-semibold text-foreground",
									children: ["₹", d.price.toLocaleString("en-IN")]
								})]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-col gap-3",
							children: d ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Link, {
								to: "/domains/$slug",
								params: { slug: d.id },
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity shadow-md shadow-amber-500/10",
								children: [/* @__PURE__ */ jsx(RotateCcw, { className: "size-4" }), " Try Again"]
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/domains/$slug",
								params: { slug: d.id },
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 border border-border bg-background hover:bg-accent text-xs font-bold uppercase tracking-widest rounded-sm transition-colors text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " Go Back"]
							})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(Link, {
								to: "/domains",
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity shadow-md shadow-amber-500/10",
								children: [/* @__PURE__ */ jsx(RotateCcw, { className: "size-4" }), " Try Again"]
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/domains",
								className: "w-full h-12 inline-flex items-center justify-center gap-2 px-6 border border-border bg-background hover:bg-accent text-xs font-bold uppercase tracking-widest rounded-sm transition-colors text-muted-foreground hover:text-foreground",
								children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " Go Back"]
							})] })
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { CancelledPage as component };
