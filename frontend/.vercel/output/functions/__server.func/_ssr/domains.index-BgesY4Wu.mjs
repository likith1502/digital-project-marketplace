import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { u as Search } from "../_libs/lucide-react.mjs";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.mjs";
import { n as DOMAINS, s as fetchDomains } from "./data-DheW3zCV.mjs";
import { t as DomainCard } from "./DomainCard-CJ05oDiO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/domains.index-BgesY4Wu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DomainsPage() {
	const [q, setQ] = (0, import_react.useState)("");
	const [domains, setDomains] = (0, import_react.useState)(DOMAINS);
	const [loading, setLoading] = (0, import_react.useState)(DOMAINS.length === 0);
	(0, import_react.useEffect)(() => {
		fetchDomains().then((res) => {
			setDomains([...res]);
			setLoading(false);
		});
	}, []);
	const filtered = domains.filter((d) => {
		return !q || d.name.toLowerCase().includes(q.toLowerCase()) || d.description && d.description.toLowerCase().includes(q.toLowerCase());
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border px-6 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-3",
							children: [
								"The Archive · ",
								domains.length,
								" Domains"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-5xl md:text-6xl tracking-tight mb-4",
							children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "all domains"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground max-w-2xl text-lg",
							children: "Every bundle includes projects, notes, PPTs, viva prep and documentation. Search by keyword."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex items-center h-12 bg-card ring-1 ring-border rounded-md px-4 max-w-md focus-within:ring-primary transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted-foreground mr-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search domains...",
								className: "flex-1 bg-transparent outline-none text-sm"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-6 py-12",
				children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center py-24 text-muted-foreground border border-dashed border-border rounded-md bg-card animate-pulse",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-2xl mb-2 text-foreground",
						children: "Loading domains..."
					})
				}) : domains.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-24 text-muted-foreground border border-dashed border-border rounded-md bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-2xl mb-2 text-foreground",
						children: "No Domains Available Yet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Admin will upload domain resource bundles soon." })]
				}) : filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-24 text-muted-foreground border border-dashed border-border rounded-md bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-2xl mb-2 text-foreground",
						children: "Nothing found"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Try a different keyword or category." })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: filtered.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainCard, {
						d,
						index: i
					}, d.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { DomainsPage as component };
