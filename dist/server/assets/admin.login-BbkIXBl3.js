import { t as ThemeToggle } from "./ThemeToggle-oSV43H9_.js";
import { r as adminLogin } from "./data-DheW3zCV.js";
import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/admin.login.tsx?tsr-split=component
function LoginPage() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const submit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setErr("");
		if (await adminLogin(email, password)) navigate({ to: "/admin" });
		else setErr("Invalid email or password");
		setLoading(false);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background grid lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "hidden lg:flex flex-col justify-between bg-foreground text-background p-12 relative overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 size-96 bg-primary/30 blur-[120px]" }),
				/* @__PURE__ */ jsx("div", {
					className: "relative",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "font-serif text-2xl italic",
						children: "ProjectHub"
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [/* @__PURE__ */ jsxs("h1", {
						className: "font-serif text-5xl leading-tight mb-4",
						children: ["Operate the ", /* @__PURE__ */ jsx("span", {
							className: "italic opacity-70",
							children: "archive."
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "opacity-70 max-w-md",
						children: "Manage domains, upload bundles, track transactions and study revenue patterns — from a single calm console."
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "relative font-mono text-[10px] uppercase tracking-widest opacity-50",
					children: "© 2026 ProjectHub · Admin Console"
				})
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex justify-end p-6",
				children: /* @__PURE__ */ jsx(ThemeToggle, {})
			}), /* @__PURE__ */ jsx("div", {
				className: "flex-1 grid place-items-center px-6 pb-12",
				children: /* @__PURE__ */ jsxs(motion.div, {
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
						/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
							children: "Admin Sign In"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-4xl mb-2",
							children: "Welcome back"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground mb-8 text-sm",
							children: "Sign in to manage your archive."
						}),
						/* @__PURE__ */ jsxs("form", {
							onSubmit: submit,
							className: "space-y-4",
							children: [
								/* @__PURE__ */ jsx(Field, {
									icon: Mail,
									label: "Email",
									children: /* @__PURE__ */ jsx("input", {
										type: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										className: "w-full h-11 pl-10 pr-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
									})
								}),
								/* @__PURE__ */ jsxs(Field, {
									icon: Lock,
									label: "Password",
									children: [/* @__PURE__ */ jsx("input", {
										type: showPassword ? "text" : "password",
										value: password,
										onChange: (e) => setPassword(e.target.value),
										className: "w-full h-11 pl-10 pr-10 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
									}), /* @__PURE__ */ jsx("button", {
										type: "button",
										onClick: () => setShowPassword((v) => !v),
										className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors",
										tabIndex: -1,
										children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsx(Eye, { className: "size-4" })
									})]
								}),
								err && /* @__PURE__ */ jsx("div", {
									className: "text-xs text-destructive",
									children: err
								}),
								/* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "w-full h-11 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md hover:opacity-90",
									children: "Sign In"
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 text-sm text-muted-foreground",
							children: [
								"No account?",
								" ",
								/* @__PURE__ */ jsx(Link, {
									to: "/admin/register",
									className: "text-primary hover:underline",
									children: "Create one"
								})
							]
						})
					]
				})
			})]
		})]
	});
}
function Field({ icon: I, label, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
			children: label
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative",
			children: [/* @__PURE__ */ jsx(I, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), children]
		})]
	});
}
//#endregion
export { LoginPage as component };
