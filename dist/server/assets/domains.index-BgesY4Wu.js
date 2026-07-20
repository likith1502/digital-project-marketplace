import { o as fetchDomains, t as DOMAINS } from "./data-DheW3zCV.js";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.js";
import { t as DomainCard } from "./DomainCard-CJ05oDiO.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
//#region src/routes/domains.index.tsx?tsr-split=component
function DomainsPage() {
	const [q, setQ] = useState("");
	const [domains, setDomains] = useState(DOMAINS);
	const [loading, setLoading] = useState(DOMAINS.length === 0);
	useEffect(() => {
		fetchDomains().then((res) => {
			setDomains([...res]);
			setLoading(false);
		});
	}, []);
	const filtered = domains.filter((d) => {
		return !q || d.name.toLowerCase().includes(q.toLowerCase()) || d.description && d.description.toLowerCase().includes(q.toLowerCase());
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("section", {
				className: "border-b border-border px-6 py-16",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-3",
							children: [
								"The Archive · ",
								domains.length,
								" Domains"
							]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "font-serif text-5xl md:text-6xl tracking-tight mb-4",
							children: ["Explore ", /* @__PURE__ */ jsx("span", {
								className: "italic text-primary",
								children: "all domains"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground max-w-2xl text-lg",
							children: "Every bundle includes projects, notes, PPTs, viva prep and documentation. Search by keyword."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex items-center h-12 bg-card ring-1 ring-border rounded-md px-4 max-w-md focus-within:ring-primary transition-all",
							children: [/* @__PURE__ */ jsx(Search, { className: "size-4 text-muted-foreground mr-3" }), /* @__PURE__ */ jsx("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search domains...",
								className: "flex-1 bg-transparent outline-none text-sm"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mx-auto max-w-7xl px-6 py-12",
				children: loading ? /* @__PURE__ */ jsx("div", {
					className: "text-center py-24 text-muted-foreground border border-dashed border-border rounded-md bg-card animate-pulse",
					children: /* @__PURE__ */ jsx("div", {
						className: "font-serif text-2xl mb-2 text-foreground",
						children: "Loading domains..."
					})
				}) : domains.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "text-center py-24 text-muted-foreground border border-dashed border-border rounded-md bg-card",
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-serif text-2xl mb-2 text-foreground",
						children: "No Domains Available Yet"
					}), /* @__PURE__ */ jsx("p", { children: "Admin will upload domain resource bundles soon." })]
				}) : filtered.length === 0 ? /* @__PURE__ */ jsxs("div", {
					className: "text-center py-24 text-muted-foreground border border-dashed border-border rounded-md bg-card",
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-serif text-2xl mb-2 text-foreground",
						children: "Nothing found"
					}), /* @__PURE__ */ jsx("p", { children: "Try a different keyword or category." })]
				}) : /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: filtered.map((d, i) => /* @__PURE__ */ jsx(DomainCard, {
						d,
						index: i
					}, d.id))
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { DomainsPage as component };
