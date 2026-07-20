import { n as Navbar, t as Footer } from "./Footer-CeePt57L.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, Phone, User } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "flex-1 max-w-7xl w-full mx-auto px-6 py-20 flex flex-col justify-center items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center max-w-2xl mx-auto mb-12",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
							children: "Support Center"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-serif text-4xl md:text-5xl tracking-tight mb-4",
							children: "Contact Information"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground",
							children: "Have a question about a domain bundle or need help with a payment? Please get in touch with our support."
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "max-w-md w-full mx-auto space-y-6",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "border border-border bg-card rounded-md p-8 shadow-sm",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-serif text-2xl mb-8 text-center",
							children: "ProjectHub Support"
						}), /* @__PURE__ */ jsxs("div", {
							className: "space-y-6",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-4",
									children: [/* @__PURE__ */ jsx("div", {
										className: "size-12 rounded bg-primary/10 grid place-items-center text-primary shrink-0",
										children: /* @__PURE__ */ jsx(User, { className: "size-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Contact Person"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-base font-sans font-semibold mt-0.5 text-foreground",
										children: "Mr. Raghuraj"
									})] })]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "tel:+919849258028",
									className: "flex items-center gap-4 group",
									children: [/* @__PURE__ */ jsx("div", {
										className: "size-12 rounded bg-primary/10 grid place-items-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all",
										children: /* @__PURE__ */ jsx(Phone, { className: "size-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Phone Support"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-base font-mono font-medium mt-0.5 group-hover:text-primary transition-colors",
										children: "+91 9849258028"
									})] })]
								}),
								/* @__PURE__ */ jsxs("a", {
									href: "mailto:raghuraj@hotmail.com",
									className: "flex items-center gap-4 group",
									children: [/* @__PURE__ */ jsx("div", {
										className: "size-12 rounded bg-primary/10 grid place-items-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all",
										children: /* @__PURE__ */ jsx(Mail, { className: "size-5" })
									}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: "Email Address"
									}), /* @__PURE__ */ jsx("div", {
										className: "text-base font-mono font-medium mt-0.5 text-primary hover:underline",
										children: "raghuraj@hotmail.com"
									})] })]
								})
							]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "border border-border bg-primary/5 rounded-md p-6 text-center",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-serif text-base mb-2 text-primary",
							children: "Instant ZIP Access"
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground leading-relaxed max-w-sm mx-auto",
							children: "Downloads start instantly after verification. If you face any connection drop, check your purchases list to retrieve your files."
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { ContactPage as component };
