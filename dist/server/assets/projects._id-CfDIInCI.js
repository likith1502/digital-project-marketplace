import { f as API } from "./data-DheW3zCV.js";
import { t as Route } from "./projects._id-Y7JYZuMA.js";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.js";
import { t as PurchaseModal } from "./PurchaseModal-BLgyHY7-.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, Check, Download, FileText } from "lucide-react";
//#region src/routes/projects.$id.tsx?tsr-split=component
function ProjectDetail() {
	const p = Route.useLoaderData();
	const [purchaseOpen, setPurchaseOpen] = useState(false);
	const [promo, setPromo] = useState(null);
	useEffect(() => {
		API.get("/api/book-promotion").then((res) => {
			if (res.data && res.data.isEnabled) setPromo(res.data);
		}).catch((err) => console.error("Error fetching book promotion:", err));
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border px-6 py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/domains/$slug",
						params: { slug: p.domainId },
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors",
						children: [
							/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }),
							" Back to ",
							p.domainName || "Domain Category"
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "max-w-3xl",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
								children: "Project Resource Bundle"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "font-serif text-4xl font-medium tracking-tight mb-4",
								children: p.projectName
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-1.5 mb-6",
								children: p.technologies.map((tech) => /* @__PURE__ */ jsx("span", {
									className: "font-mono text-[10px] uppercase tracking-wider bg-secondary text-muted-foreground px-2.5 py-1 rounded-sm border border-border",
									children: tech
								}, tech))
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground leading-relaxed text-sm sm:text-base mb-8",
								children: p.description
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mb-8 border-t border-border pt-6",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3.5",
									children: "Resources Included"
								}), !p.resourcesIncluded || p.resourcesIncluded.length === 0 ? /* @__PURE__ */ jsx("p", {
									className: "text-sm font-mono text-muted-foreground italic",
									children: "No resource checklist provided."
								}) : /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
									children: p.resourcesIncluded.map((r) => /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("div", {
											className: "size-5 rounded-full bg-primary/15 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ jsx(Check, { className: "size-3" })
										}), /* @__PURE__ */ jsx("span", {
											className: "text-sm",
											children: r
										})]
									}, r))
								})]
							}),
							promo && /* @__PURE__ */ jsxs("div", {
								className: "bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6 relative overflow-hidden",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-indigo-500/5 blur-xl pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
									className: "relative space-y-2",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-mono",
										children: [/* @__PURE__ */ jsx("span", { children: "🎁" }), /* @__PURE__ */ jsx("span", { children: "Bonus Unlocked" })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-1.5 text-xs text-foreground/95",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 font-semibold",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-primary font-bold",
												children: "✓"
											}), " Purchase this Project"]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2 font-semibold",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-primary font-bold",
												children: "✓"
											}), " Unlock FREE Book Coupon"]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "border-t border-border pt-6 flex flex-wrap items-center gap-6",
								children: [
									/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Price"
									}), /* @__PURE__ */ jsxs("div", {
										className: "text-3xl font-medium font-serif",
										children: ["₹", p.price.toLocaleString("en-IN")]
									})] }),
									/* @__PURE__ */ jsxs("div", {
										className: "border-l border-border pl-6",
										children: [/* @__PURE__ */ jsx("div", {
											className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
											children: "Total Files Size"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-xl font-medium",
											children: p.totalSize
										})]
									}),
									/* @__PURE__ */ jsxs("button", {
										onClick: () => setPurchaseOpen(true),
										className: "ml-auto inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 shadow-lg shadow-primary/20",
										children: [/* @__PURE__ */ jsx(Download, { className: "size-4" }), " Buy Now"]
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-secondary/20 border-b border-border px-6 py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
								children: "Inside the package"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "font-serif text-3xl mb-6",
								children: [
									"Files Included (",
									p.filesList.length,
									")"
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "bg-background border border-border rounded-md divide-y divide-border shadow-sm",
								children: p.filesList.length === 0 ? /* @__PURE__ */ jsx("div", {
									className: "p-6 text-center text-muted-foreground font-mono text-sm",
									children: "No resource files uploaded for this project yet."
								}) : /* @__PURE__ */ jsx(Fragment, { children: p.filesList.map((f) => /* @__PURE__ */ jsx("div", {
									className: "flex items-center justify-between p-4 hover:bg-secondary/10 transition-colors",
									children: /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ jsx("div", {
											className: "size-9 rounded bg-primary/10 grid place-items-center text-primary shrink-0",
											children: /* @__PURE__ */ jsx(FileText, { className: "size-4" })
										}), /* @__PURE__ */ jsxs("div", {
											className: "min-w-0 text-left",
											children: [/* @__PURE__ */ jsx("div", {
												className: "font-mono text-sm truncate font-medium",
												children: f.name
											}), /* @__PURE__ */ jsxs("div", {
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
					}), /* @__PURE__ */ jsxs("aside", {
						className: "border border-border bg-background rounded-md p-6 h-fit sticky top-24 shadow-sm",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "font-serif text-xl mb-4 text-left",
								children: "Quick facts"
							}),
							/* @__PURE__ */ jsx(Stat, {
								label: "Total Files",
								value: String(p.filesList.length)
							}),
							/* @__PURE__ */ jsx(Stat, {
								label: "Total Size",
								value: p.totalSize
							}),
							/* @__PURE__ */ jsx(Stat, {
								label: "Difficulty",
								value: p.difficulty
							}),
							/* @__PURE__ */ jsx(Stat, {
								label: "Downloads",
								value: String(p.downloads)
							}),
							/* @__PURE__ */ jsx(Stat, {
								label: "Access",
								value: "Lifetime",
								last: true
							}),
							promo && /* @__PURE__ */ jsxs("div", {
								className: "mt-4 p-4 border border-primary/20 bg-primary/5 rounded-md text-left space-y-1.5 relative overflow-hidden",
								children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-indigo-500/5 blur-xl pointer-events-none" }), /* @__PURE__ */ jsxs("div", {
									className: "relative space-y-1.5",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-mono",
										children: [/* @__PURE__ */ jsx("span", { children: "🎁" }), /* @__PURE__ */ jsx("span", { children: "BONUS REWARD" })]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-1 text-xs text-foreground/90 font-medium",
										children: [/* @__PURE__ */ jsx("div", { children: "✓ Unlock FREE Physical Book" }), /* @__PURE__ */ jsx("div", { children: "✓ Free Home Delivery" })]
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("button", {
								onClick: () => setPurchaseOpen(true),
								className: "mt-6 w-full px-4 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90",
								children: ["Buy for ₹", p.price.toLocaleString("en-IN")]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			purchaseOpen && /* @__PURE__ */ jsx(PurchaseModal, {
				domain: p,
				open: purchaseOpen,
				onClose: () => setPurchaseOpen(false)
			})
		]
	});
}
function Stat({ label, value, last }) {
	return /* @__PURE__ */ jsxs("div", {
		className: `flex justify-between items-center py-3 ${last ? "" : "border-b border-border"}`,
		children: [/* @__PURE__ */ jsx("span", {
			className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: "text-sm font-medium",
			children: value
		})]
	});
}
//#endregion
export { ProjectDetail as component };
