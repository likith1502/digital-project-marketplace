import { createContext, useContext, useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Monitor, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/lib/theme.tsx
var ThemeContext = createContext({
	theme: "system",
	resolved: "light",
	setTheme: () => {}
});
function getSystem() {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = useState("system");
	const [resolved, setResolved] = useState("light");
	useEffect(() => {
		setThemeState(localStorage.getItem("ph-theme") ?? "system");
	}, []);
	useEffect(() => {
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
	return /* @__PURE__ */ jsx(ThemeContext.Provider, {
		value: {
			theme,
			resolved,
			setTheme
		},
		children
	});
}
var useTheme = () => useContext(ThemeContext);
//#endregion
//#region src/components/site/ThemeToggle.tsx
function ThemeToggle() {
	const { theme, resolved, setTheme } = useTheme();
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		const onClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", onClick);
		return () => document.removeEventListener("mousedown", onClick);
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative",
		ref,
		children: [/* @__PURE__ */ jsx("button", {
			onClick: () => setOpen((o) => !o),
			className: "grid size-9 place-items-center rounded-full ring-1 ring-border bg-card hover:bg-accent transition-colors",
			"aria-label": "Toggle theme",
			children: /* @__PURE__ */ jsx(resolved === "dark" ? Moon : Sun, { className: "size-4" })
		}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(motion.div, {
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
			].map(({ v, label, icon: I }) => /* @__PURE__ */ jsxs("button", {
				onClick: () => {
					setTheme(v);
					setOpen(false);
				},
				className: `flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent ${theme === v ? "text-primary font-medium" : "text-foreground"}`,
				children: [/* @__PURE__ */ jsx(I, { className: "size-4" }), label]
			}, v))
		}) })]
	});
}
//#endregion
export { ThemeProvider as n, useTheme as r, ThemeToggle as t };
