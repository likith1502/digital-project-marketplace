import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
//#region src/components/site/DomainCard.tsx
var DEFAULT_PLACEHOLDER = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop";
function normalizeImgSrc(src) {
	if (!src) return DEFAULT_PLACEHOLDER;
	src = src.replace("http://127.0.0.1:5000", "http://localhost:5000");
	if (src.startsWith("http")) return src;
	return `http://localhost:5000${src.startsWith("/") ? "" : "/"}${src}`;
}
function DomainCard({ d, index = 0 }) {
	const imgSrc = normalizeImgSrc(d.thumbnailUrl || d.thumbnail || "");
	return /* @__PURE__ */ jsxs(motion.div, {
		initial: {
			opacity: 0,
			y: 16
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-50px"
		},
		transition: {
			duration: .5,
			delay: index * .05,
			ease: [
				.19,
				1,
				.22,
				1
			]
		},
		className: "group relative border border-border bg-card p-4 rounded-md hover:border-primary/40 transition-colors",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "w-full aspect-[16/10] rounded-sm mb-5 grid place-items-center overflow-hidden relative bg-black",
			children: [/* @__PURE__ */ jsx("div", { className: "grain-bg absolute inset-0 opacity-30" }), /* @__PURE__ */ jsx("img", {
				src: imgSrc,
				alt: d.name,
				className: "w-full h-full object-cover relative z-10",
				onError: (e) => {
					e.currentTarget.src = DEFAULT_PLACEHOLDER;
				}
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "px-1 pb-1",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex justify-between items-start mb-2",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "text-lg font-semibold",
						children: d.name
					}), /* @__PURE__ */ jsx("span", {
						className: "font-mono text-xs text-muted-foreground mt-1",
						children: String(index + 1).padStart(2, "0")
					})]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2",
					children: d.description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between pt-5 border-t border-border",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
						className: "text-xs font-mono uppercase tracking-widest text-muted-foreground",
						children: "Project Count"
					}), /* @__PURE__ */ jsxs("div", {
						className: "text-lg font-medium font-serif",
						children: [
							d.count,
							" ",
							d.count === 1 ? "Project" : "Projects"
						]
					})] }), /* @__PURE__ */ jsxs(Link, {
						to: "/domains/$slug",
						params: { slug: d.id },
						className: "inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity",
						children: ["Explore", /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-3.5" })]
					})]
				})
			]
		})]
	});
}
//#endregion
export { DomainCard as t };
