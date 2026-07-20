import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { H as ArrowLeft, M as Download, O as FileText, R as Check } from "../_libs/lucide-react.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.mjs";
import { t as API } from "./data-DheW3zCV.mjs";
import { t as PurchaseModal } from "./PurchaseModal-BLgyHY7-.mjs";
import { t as Route } from "./projects._id-Y7JYZuMA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._id-CfDIInCI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetail() {
	const p = Route.useLoaderData();
	const [purchaseOpen, setPurchaseOpen] = (0, import_react.useState)(false);
	const [promo, setPromo] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		API.get("/api/book-promotion").then((res) => {
			if (res.data && res.data.isEnabled) setPromo(res.data);
		}).catch((err) => console.error("Error fetching book promotion:", err));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border px-6 py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/domains/$slug",
						params: { slug: p.domainId },
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }),
							" Back to ",
							p.domainName || "Domain Category"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
								children: "Project Resource Bundle"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-4xl font-medium tracking-tight mb-4",
								children: p.projectName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-1.5 mb-6",
								children: p.technologies.map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[10px] uppercase tracking-wider bg-secondary text-muted-foreground px-2.5 py-1 rounded-sm border border-border",
									children: tech
								}, tech))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground leading-relaxed text-sm sm:text-base mb-8",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-8 border-t border-border pt-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3.5",
									children: "Resources Included"
								}), !p.resourcesIncluded || p.resourcesIncluded.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-mono text-muted-foreground italic",
									children: "No resource checklist provided."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: p.resourcesIncluded.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "size-5 rounded-full bg-primary/15 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm",
											children: r
										})]
									}, r))
								})]
							}),
							promo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 relative overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-indigo-500/5 blur-xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎁" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Bonus Unlocked" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1.5 text-xs text-foreground/95",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary font-bold",
												children: "✓"
											}), " Purchase this Project"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-primary font-bold",
												children: "✓"
											}), " Unlock FREE Book Coupon"]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-t border-border pt-6 flex flex-wrap items-center gap-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Price"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-3xl font-medium font-serif",
										children: ["₹", p.price.toLocaleString("en-IN")]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-l border-border pl-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
											children: "Total Files Size"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xl font-medium",
											children: p.totalSize
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => setPurchaseOpen(true),
										className: "ml-auto inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 shadow-lg shadow-primary/20",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), " Buy Now"]
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-secondary/20 border-b border-border px-6 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
								children: "Inside the package"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-serif text-3xl mb-6",
								children: [
									"Files Included (",
									p.filesList.length,
									")"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-background border border-border rounded-md divide-y divide-border shadow-sm",
								children: p.filesList.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-6 text-center text-muted-foreground font-mono text-sm",
									children: "No resource files uploaded for this project yet."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: p.filesList.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center justify-between p-4 hover:bg-secondary/10 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "size-9 rounded bg-primary/10 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "size-4" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 text-left",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono text-sm truncate font-medium",
												children: f.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
												children: [
													f.type,
													" · ",
													f.size
												]
											})]
										})]
									})
								}, f.name)) })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "border border-border bg-background rounded-md p-6 h-fit sticky top-24 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-serif text-xl mb-4 text-left",
								children: "Quick facts"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Total Files",
								value: String(p.filesList.length)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Total Size",
								value: p.totalSize
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Difficulty",
								value: p.difficulty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Downloads",
								value: String(p.downloads)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Access",
								value: "Lifetime",
								last: true
							}),
							promo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 p-4 border border-primary/20 bg-primary/5 rounded-md text-left space-y-1.5 relative overflow-hidden",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-indigo-500/5 blur-xl pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative space-y-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-mono",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🎁" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BONUS REWARD" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1 text-xs text-foreground/90 font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "✓ Unlock FREE Physical Book" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "✓ Free Home Delivery" })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setPurchaseOpen(true),
								className: "mt-6 w-full px-4 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90",
								children: ["Buy for ₹", p.price.toLocaleString("en-IN")]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			purchaseOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurchaseModal, {
				domain: p,
				open: purchaseOpen,
				onClose: () => setPurchaseOpen(false)
			})
		]
	});
}
function Stat({ label, value, last }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex justify-between items-center py-3 ${last ? "" : "border-b border-border"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-medium",
			children: value
		})]
	});
}
//#endregion
export { ProjectDetail as component };
