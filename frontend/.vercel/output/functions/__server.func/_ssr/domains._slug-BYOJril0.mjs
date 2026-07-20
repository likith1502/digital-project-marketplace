import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { H as ArrowLeft, I as ChevronRight, L as ChevronLeft, R as Check, V as ArrowUpRight, u as Search } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.mjs";
import { c as fetchProjectsForDomain } from "./data-DheW3zCV.mjs";
import { t as Route } from "./domains._slug-CHLnMC9m.mjs";
import { t as PurchaseModal } from "./PurchaseModal-BLgyHY7-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/domains._slug-BYOJril0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";
function normalizeImgSrc(src) {
	if (!src) return DEFAULT_PLACEHOLDER;
	src = src.replace("http://127.0.0.1:5000", "http://localhost:5000");
	if (src.startsWith("http")) return src;
	return `http://localhost:5000${src.startsWith("/") ? "" : "/"}${src}`;
}
function DomainDetail() {
	const d = Route.useLoaderData();
	const [projects, setProjects] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [selectedProject, setSelectedProject] = (0, import_react.useState)(null);
	const [purchaseOpen, setPurchaseOpen] = (0, import_react.useState)(false);
	const [page, setPage] = (0, import_react.useState)(1);
	const [q, setQ] = (0, import_react.useState)("");
	const PAGE_SIZE = 10;
	(0, import_react.useEffect)(() => {
		setLoading(true);
		fetchProjectsForDomain(d.id).then((res) => {
			setProjects(res);
			setLoading(false);
		});
	}, [d.id]);
	const filteredProjects = projects.filter((p) => {
		const query = q.toLowerCase().trim();
		if (!query) return true;
		return (p.projectName || p.title || "").toLowerCase().includes(query) || (p.description || "").toLowerCase().includes(query) || (p.technologies || []).some((t) => t.toLowerCase().includes(query));
	});
	const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PAGE_SIZE));
	const safePage = Math.min(page, totalPages);
	const paginated = filteredProjects.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
	const handleSearch = (val) => {
		setQ(val);
		setPage(1);
	};
	const handleBuyNow = (p) => {
		setSelectedProject(p);
		setPurchaseOpen(true);
	};
	const domainThumbnail = normalizeImgSrc(d.thumbnailUrl || d.thumbnail || "");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border px-6 py-12 bg-secondary/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/domains",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All Domains"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row gap-8 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-24 h-24 rounded-full overflow-hidden border border-border bg-card shrink-0 shadow-inner grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: domainThumbnail,
								alt: d.name,
								className: "w-full h-full object-cover",
								onError: (e) => {
									e.currentTarget.src = DEFAULT_PLACEHOLDER;
								}
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center md:text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-serif text-4xl font-medium tracking-tight mb-3",
								children: d.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground max-w-3xl leading-relaxed text-sm sm:text-base",
								children: d.description || "Browse academic project bundles and files in this domain."
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-6 py-16",
				children: [
					projects.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-6 border-b border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-medium tracking-tight mb-2",
							children: "Available Projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: "Select a project bundle below to view files, technologies, difficulty, and checkout."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center h-11 bg-card ring-1 ring-border rounded-md px-4 w-full sm:max-w-[280px] focus-within:ring-primary transition-all self-end shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted-foreground mr-3 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => handleSearch(e.target.value),
								placeholder: "Search projects in this domain...",
								className: "flex-1 bg-transparent outline-none text-sm w-full"
							})]
						})]
					}),
					projects.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-3xl font-medium tracking-tight mb-2",
							children: "Available Projects"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: "Select a project bundle below to view files, technologies, difficulty, and checkout."
						})]
					}),
					loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center py-20 text-muted-foreground font-mono",
						children: "Loading domain projects..."
					}) : projects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-dashed border-border rounded-lg p-12 text-center text-muted-foreground bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-medium text-foreground",
							children: "No projects under this domain category yet"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm mt-1",
							children: "Admin will upload projects here soon."
						})]
					}) : filteredProjects.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-dashed border-border rounded-lg p-12 text-center text-muted-foreground bg-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-medium text-foreground",
							children: "No projects match your search query"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm mt-1",
							children: "Try using different keywords or tech stack terms."
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: paginated.map((p, index) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: {
									opacity: 0,
									y: 12
								},
								animate: {
									opacity: 1,
									y: 0
								},
								transition: { delay: index * .05 },
								className: "border border-border bg-card rounded-md overflow-hidden hover:border-primary/30 transition-all flex flex-col h-full group",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "p-5 flex-1 flex flex-col justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-2 mb-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-serif text-xl font-semibold group-hover:text-primary transition-colors",
												children: p.projectName
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-foreground font-bold shrink-0 mt-1",
												children: p.difficulty
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed",
											children: p.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex flex-wrap gap-1.5 mb-4",
											children: p.technologies.slice(0, 4).map((tech) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[9px] uppercase tracking-wider bg-secondary/80 text-muted-foreground px-2 py-0.5 rounded-sm",
												children: tech
											}, tech))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-1.5 mb-6 pt-3 border-t border-border",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[9px] font-mono uppercase tracking-widest text-muted-foreground mb-1",
													children: "Included Resources"
												}),
												p.resourcesIncluded.slice(0, 4).map((res) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-xs text-foreground/90",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "truncate",
														children: res
													})]
												}, res)),
												p.resourcesIncluded.length > 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-[10px] font-mono text-muted-foreground italic pl-5",
													children: [
														"+ ",
														p.resourcesIncluded.length - 4,
														" more resources"
													]
												})
											]
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pt-4 border-t border-border flex items-center justify-between mt-auto",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[9px] font-mono uppercase tracking-widest text-muted-foreground",
											children: "Price"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xl font-bold font-serif text-foreground",
											children: ["₹", p.price.toLocaleString("en-IN")]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/projects/$id",
												params: { id: p.id },
												className: "px-3 py-2 border border-border text-foreground hover:bg-secondary text-xs uppercase tracking-wider font-mono rounded-sm transition-all inline-flex items-center gap-1 shrink-0",
												children: ["Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => handleBuyNow(p),
												className: "px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 text-xs font-bold uppercase tracking-wider rounded-sm transition-all",
												children: "Buy Now"
											})]
										})]
									})]
								})
							}, p.id);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mt-8 flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground font-mono",
							children: [
								"Showing",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: filteredProjects.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1
								}),
								"–",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: Math.min(safePage * PAGE_SIZE, filteredProjects.length)
								}),
								" ",
								"of",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: filteredProjects.length
								}),
								" projects"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPage((p) => Math.max(1, p - 1)),
									disabled: safePage === 1,
									className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-xs font-mono font-semibold uppercase tracking-wider hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" }), " Previous"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs px-3 py-2 rounded-md bg-card border border-border text-foreground",
									children: [
										"Page ",
										safePage,
										" / ",
										totalPages
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
									disabled: safePage === totalPages,
									className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-md border border-border text-xs font-mono font-semibold uppercase tracking-wider hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
									children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
								})
							]
						})]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			selectedProject && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurchaseModal, {
				domain: selectedProject,
				open: purchaseOpen,
				onClose: () => setPurchaseOpen(false)
			})
		]
	});
}
//#endregion
export { DomainDetail as component };
