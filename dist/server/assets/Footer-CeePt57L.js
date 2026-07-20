import { t as ThemeToggle } from "./ThemeToggle-oSV43H9_.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/Navbar.tsx
function Navbar() {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-8",
				children: [/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "font-serif text-2xl font-semibold italic tracking-tight text-primary",
					children: "ProjectHub"
				}), /* @__PURE__ */ jsxs("div", {
					className: "hidden md:flex gap-6 text-sm font-medium text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							activeOptions: { exact: true },
							className: "hover:text-foreground transition-colors",
							activeProps: { className: "text-foreground font-semibold" },
							children: "Home"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/domains",
							className: "hover:text-foreground transition-colors",
							activeProps: { className: "text-foreground font-semibold" },
							children: "Categories"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-foreground transition-colors",
							activeProps: { className: "text-foreground font-semibold" },
							children: "About"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:text-foreground transition-colors",
							activeProps: { className: "text-foreground font-semibold" },
							children: "Contact Us"
						})
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ jsx("div", {
					className: "md:hidden flex gap-4 text-xs font-medium text-muted-foreground mr-2",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/domains",
						className: "hover:text-foreground transition-colors",
						activeProps: { className: "text-foreground" },
						children: "Explore"
					})
				}), /* @__PURE__ */ jsx(ThemeToggle, {})]
			})]
		})
	});
}
//#endregion
//#region src/components/site/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border bg-background px-6 py-12 mt-20",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "font-serif text-2xl italic text-primary",
					children: "ProjectHub"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm text-muted-foreground max-w-sm",
					children: "Premium academic resources for students."
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3",
					children: "Contact"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ jsx("li", { children: "Mr. Raghuraj" }),
						/* @__PURE__ */ jsx("li", { children: "📞 +91 9849258028" }),
						/* @__PURE__ */ jsxs("li", { children: ["✉ ", /* @__PURE__ */ jsx("a", {
							href: "mailto:raghuraj@hotmail.com",
							className: "hover:text-primary",
							children: "raghuraj@hotmail.com"
						})] })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3",
					children: "Quick Links"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-primary",
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/domains",
							className: "hover:text-primary",
							children: "Categories"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-primary",
							children: "About"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "hover:text-primary",
							children: "Contact"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto mt-10 max-w-7xl pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center",
			children: /* @__PURE__ */ jsx("div", {
				className: "text-xs font-mono text-muted-foreground",
				children: "© 2026 ProjectHub. All Rights Reserved."
			})
		})]
	});
}
//#endregion
export { Navbar as n, Footer as t };
