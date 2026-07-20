import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { n as ThemeToggle } from "./ThemeToggle-oSV43H9_.mjs";
import { g as Link, v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as adminRegister } from "./data-DheW3zCV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.register-k5fbBqiX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function RegisterPage() {
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		password: "",
		confirm: ""
	});
	const [err, setErr] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const submit = async (e) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.password) return setErr("All fields required");
		if (form.password !== form.confirm) return setErr("Passwords do not match");
		if (form.password.length < 6) return setErr("Password must be 6+ characters");
		setLoading(true);
		setErr("");
		const success = await adminRegister(form.name, form.email, form.password);
		setLoading(false);
		if (!success) return setErr("Email already registered or registration failed");
		navigate({ to: "/admin" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background grid lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden lg:flex flex-col justify-between bg-foreground text-background p-12 relative overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-40 -left-40 size-96 bg-primary/30 blur-[120px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-serif text-2xl italic",
						children: "ProjectHub"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-5xl leading-tight mb-4",
						children: ["Start curating the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic opacity-70",
							children: "archive."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "opacity-70 max-w-md",
						children: "Create an admin account in seconds. No setup. No friction."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative font-mono text-[10px] uppercase tracking-widest opacity-50",
					children: "© 2026 ProjectHub"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex justify-end p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 grid place-items-center px-6 pb-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					className: "w-full max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
							children: "Create Account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-serif text-4xl mb-2",
							children: "New admin"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-8 text-sm",
							children: "Spin up an admin account for ProjectHub."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: submit,
							className: "space-y-4",
							children: [
								[
									[
										"name",
										"Full Name",
										"text"
									],
									[
										"email",
										"Email",
										"email"
									],
									[
										"password",
										"Password",
										"password"
									],
									[
										"confirm",
										"Confirm Password",
										"password"
									]
								].map(([k, label, type]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type,
										value: form[k],
										onChange: (e) => setForm({
											...form,
											[k]: e.target.value
										}),
										className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
									})]
								}, k)),
								err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-destructive",
									children: err
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "w-full h-11 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md hover:opacity-90",
									children: "Create Account"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 text-sm text-muted-foreground",
							children: [
								"Have an account?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/admin/login",
									className: "text-primary hover:underline",
									children: "Sign in"
								})
							]
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { RegisterPage as component };
