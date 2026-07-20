import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Moon, o as Sun, v as Monitor } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ThemeToggle-oSV43H9_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeContext = (0, import_react.createContext)({
	theme: "system",
	resolved: "light",
	setTheme: () => {}
});
function getSystem() {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("system");
	const [resolved, setResolved] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		setThemeState(localStorage.getItem("ph-theme") ?? "system");
	}, []);
	(0, import_react.useEffect)(() => {
		const apply = () => {
			const r = theme === "system" ? getSystem() : theme;
			setResolved(r);
			const root = document.documentElement;
			root.classList.toggle("dark", r === "dark");
			root.style.colorScheme = r;
		};
		apply();
		if (theme === "system") {
			const mq = window.matchMedia("(prefers-color-scheme: dark)");
			mq.addEventListener("change", apply);
			return () => mq.removeEventListener("change", apply);
		}
	}, [theme]);
	const setTheme = (t) => {
		localStorage.setItem("ph-theme", t);
		setThemeState(t);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value: {
			theme,
			resolved,
			setTheme
		},
		children
	});
}
var useTheme = () => (0, import_react.useContext)(ThemeContext);
function ThemeToggle() {
	const { theme, resolved, setTheme } = useTheme();
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen((o) => !o),
			className: "grid size-9 place-items-center rounded-full ring-1 ring-border bg-card hover:bg-accent transition-colors",
			"aria-label": "Toggle theme",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(resolved === "dark" ? Moon : Sun, { className: "size-4" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -4,
				scale: .97
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -4,
				scale: .97
			},
			transition: { duration: .15 },
			className: "absolute right-0 mt-2 w-40 rounded-lg border border-border bg-popover p-1 shadow-xl z-50",
			children: [
				{
					v: "light",
					label: "Light",
					icon: Sun
				},
				{
					v: "dark",
					label: "Dark",
					icon: Moon
				},
				{
					v: "system",
					label: "System",
					icon: Monitor
				}
			].map(({ v, label, icon: I }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => {
					setTheme(v);
					setOpen(false);
				},
				className: `flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent ${theme === v ? "text-primary font-medium" : "text-foreground"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "size-4" }), label]
			}, v))
		}) })]
	});
}
//#endregion
export { ThemeToggle as n, useTheme as r, ThemeProvider as t };
