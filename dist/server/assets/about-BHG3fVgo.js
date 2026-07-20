import { n as Navbar, t as Footer } from "./Footer-CeePt57L.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, BookOpen, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-1 max-w-5xl w-full mx-auto px-6 py-16 z-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [/* @__PURE__ */ jsxs("h1", {
							className: "font-serif text-4xl md:text-6xl tracking-tight mb-4",
							children: [
								"Your Complete ",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "italic text-primary",
									children: "Academic Resource Marketplace"
								})
							]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground mt-6 leading-relaxed",
							children: "ProjectHub was founded to solve a simple problem: students spend weeks hunting for high-quality project code, reports, presentation slides, and preparation questions. We consolidate these into curated, domain-specific academic bundles to value your time and grade success."
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-20",
						children: [
							{
								icon: BookOpen,
								t: "Domain-Wise Project Library",
								d: "Find projects categorized by subject and specialization, making it easier to explore the right academic resources."
							},
							{
								icon: Zap,
								t: "Instant Delivery",
								d: "Zero wait times. Your download link is generated the second payment succeeds."
							},
							{
								icon: ShieldCheck,
								t: "Verified Archives",
								d: "Every project report, code package, and PPT is pre-screened for quality."
							},
							{
								icon: Award,
								t: "Student Preferred",
								d: "Over 50,000 students nationwide trust ProjectHub for their academic preps."
							}
						].map((c, i) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 15
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: {
								delay: i * .1,
								duration: .5
							},
							className: "border border-border bg-card rounded-md p-8 flex gap-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "size-12 rounded bg-primary/10 grid place-items-center text-primary shrink-0",
								children: /* @__PURE__ */ jsx(c.icon, { className: "size-5" })
							}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
								className: "font-serif text-xl mb-2",
								children: c.t
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: c.d
							})] })]
						}, c.t))
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-lg bg-foreground text-background p-12 relative overflow-hidden text-center max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ jsx("div", { className: "absolute -top-24 -right-24 size-64 bg-primary/30 blur-[100px] pointer-events-none" }),
							/* @__PURE__ */ jsx("h2", {
								className: "font-serif text-3xl mb-4",
								children: "Focus on what matters."
							}),
							/* @__PURE__ */ jsx("p", {
								className: "opacity-70 mb-8 max-w-lg mx-auto text-sm leading-relaxed",
								children: "Stop scavenging search engines and building formats from scratch. Get fully-documented reference resources instantly."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { AboutPage as component };
