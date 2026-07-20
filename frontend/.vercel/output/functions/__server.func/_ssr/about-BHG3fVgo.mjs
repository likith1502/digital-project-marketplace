import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { B as Award, s as ShieldCheck, t as Zap, z as BookOpen } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BHG3fVgo.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 max-w-5xl w-full mx-auto px-6 py-16 z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto mb-16",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-4xl md:text-6xl tracking-tight mb-4",
							children: [
								"Your Complete ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-primary",
									children: "Academic Resource Marketplace"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-6 leading-relaxed",
							children: "ProjectHub was founded to solve a simple problem: students spend weeks hunting for high-quality project code, reports, presentation slides, and preparation questions. We consolidate these into curated, domain-specific academic bundles to value your time and grade success."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
						].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-12 rounded bg-primary/10 grid place-items-center text-primary shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif text-xl mb-2",
								children: c.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: c.d
							})] })]
						}, c.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg bg-foreground text-background p-12 relative overflow-hidden text-center max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-24 -right-24 size-64 bg-primary/30 blur-[100px] pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-serif text-3xl mb-4",
								children: "Focus on what matters."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "opacity-70 mb-8 max-w-lg mx-auto text-sm leading-relaxed",
								children: "Stop scavenging search engines and building formats from scratch. Get fully-documented reference resources instantly."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { AboutPage as component };
