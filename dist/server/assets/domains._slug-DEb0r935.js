import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/domains.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsx("div", {
	className: "min-h-screen grid place-items-center",
	children: /* @__PURE__ */ jsxs("div", {
		className: "text-center",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "font-serif text-4xl",
			children: "Domain category not found"
		}), /* @__PURE__ */ jsx(Link, {
			to: "/domains",
			className: "text-primary underline mt-4 inline-block",
			children: "Back to all domains"
		})]
	})
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
