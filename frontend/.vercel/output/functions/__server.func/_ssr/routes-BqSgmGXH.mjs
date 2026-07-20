import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as X, u as Search } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.mjs";
import { n as DOMAINS, s as fetchDomains, t as API } from "./data-DheW3zCV.mjs";
import { t as DomainCard } from "./DomainCard-CJ05oDiO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BqSgmGXH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const [domains, setDomains] = (0, import_react.useState)(DOMAINS);
	const [loading, setLoading] = (0, import_react.useState)(DOMAINS.length === 0);
	const [promo, setPromo] = (0, import_react.useState)(null);
	const [showPopup, setShowPopup] = (0, import_react.useState)(false);
	const [dontShowAgain, setDontShowAgain] = (0, import_react.useState)(false);
	const [bannerDismissed, setBannerDismissed] = (0, import_react.useState)(false);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [matchingDomainIds, setMatchingDomainIds] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		fetchDomains().then((res) => {
			setDomains([...res]);
			setLoading(false);
		});
		API.get("/api/book-promotion").then((res) => {
			if (res.data && res.data.isEnabled) {
				setPromo(res.data);
				const dontShow = localStorage.getItem("ph-popup-dont-show") === "true";
				const sessionShown = sessionStorage.getItem("ph-popup-shown") === "true";
				if (!dontShow && !sessionShown) {
					const timer = setTimeout(() => {
						setShowPopup(true);
					}, 2e3);
					return () => clearTimeout(timer);
				}
			}
		}).catch((err) => console.error("Error fetching book promotion:", err));
	}, []);
	(0, import_react.useEffect)(() => {
		if (!searchQuery.trim()) {
			setMatchingDomainIds([]);
			return;
		}
		const delayDebounceFn = setTimeout(() => {
			API.get("/api/projects", { params: { q: searchQuery } }).then((res) => {
				if (res.data && Array.isArray(res.data)) setMatchingDomainIds(res.data.map((p) => p.domainId).filter(Boolean));
			}).catch((err) => console.error("Error searching projects:", err));
		}, 300);
		return () => clearTimeout(delayDebounceFn);
	}, [searchQuery]);
	const filteredDomains = domains.filter((d) => {
		if (!searchQuery.trim()) return true;
		const matchesDomain = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.description.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesProject = matchingDomainIds.includes(d.id);
		return matchesDomain || matchesProject;
	});
	const closePopup = () => {
		setShowPopup(false);
		sessionStorage.setItem("ph-popup-shown", "true");
		if (dontShowAgain) localStorage.setItem("ph-popup-dont-show", "true");
	};
	const handleUnlockOffer = () => {
		closePopup();
		const el = document.getElementById("featured-domains");
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
				searchQuery,
				setSearchQuery
			}),
			promo && !bannerDismissed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-7xl px-6 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 15
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "relative bg-gradient-to-r from-primary/15 via-indigo-500/10 to-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg overflow-hidden",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-32 -bottom-32 size-64 bg-primary/20 blur-3xl pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "size-14 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-3xl animate-bounce shrink-0 shadow-inner",
								children: "🎁"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-primary font-bold",
										children: "Special Promotion"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground uppercase",
										children: "🎁 BUY ANY PROJECT · GET A FREE PHYSICAL BOOK"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs sm:text-sm text-muted-foreground",
										children: "Delivered to Your Home · No Extra Cost"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => {
									const el = document.getElementById("featured-domains");
									if (el) el.scrollIntoView({ behavior: "smooth" });
								},
								className: "px-6 py-3 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest rounded-md hover:opacity-90 transition-all shadow-md shadow-primary/10 flex items-center gap-2 whitespace-nowrap",
								children: "Learn More →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setBannerDismissed(true),
								className: "p-2 rounded-full hover:bg-foreground/5 text-muted-foreground transition-colors",
								title: "Dismiss Banner",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedDomains, {
				domains: filteredDomains,
				loading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactInfo, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			showPopup && promo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-[150] flex items-center justify-center p-4 bg-background/40 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none overflow-hidden z-[160]",
					children: Array.from({ length: 15 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							y: -20,
							x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 800),
							rotate: Math.random() * 360,
							opacity: .8
						},
						animate: {
							y: (typeof window !== "undefined" ? window.innerHeight : 800) + 20,
							rotate: Math.random() * 720,
							opacity: 0
						},
						transition: {
							duration: Math.random() * 4 + 3,
							ease: "linear",
							repeat: Infinity,
							delay: Math.random() * 2
						},
						className: "absolute size-2 rounded-sm",
						style: { backgroundColor: [
							"#6366f1",
							"#10b981",
							"#f59e0b",
							"#ec4899",
							"#3b82f6"
						][i % 5] }
					}, i))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .4,
						ease: [
							.16,
							1,
							.3,
							1
						]
					},
					className: "relative w-full max-w-[850px] overflow-hidden rounded-2xl border border-border/80 bg-card/90 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 text-left z-[170]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -top-20 size-60 rounded-full bg-primary/25 blur-3xl pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 -bottom-20 size-60 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: closePopup,
							className: "absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/5 text-muted-foreground transition-colors z-20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-4 flex flex-col justify-center items-center shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									animate: { y: [
										0,
										-12,
										0
									] },
									transition: {
										duration: 4,
										repeat: Infinity,
										ease: "easeInOut"
									},
									className: "relative w-36 h-48 select-none",
									style: {
										perspective: "1200px",
										transformStyle: "preserve-3d"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 bg-gradient-to-tr from-indigo-700 to-purple-600 rounded-r-md border border-white/10 flex flex-col justify-between p-3 text-white overflow-hidden shadow-2xl",
											style: { transform: "rotateY(-15deg) rotateX(10deg) translateZ(0px) translateY(8px) rotate(4deg)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[7px] font-mono opacity-50",
													children: "PARTNER EDITION"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "my-auto font-serif text-sm font-bold leading-tight",
													children: "Mastering Code"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[6px] font-mono opacity-50",
													children: "PUBLISHING CO."
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 bg-gradient-to-tr from-emerald-700 to-teal-500 rounded-r-md border border-white/10 flex flex-col justify-between p-3 text-white overflow-hidden shadow-2xl",
											style: { transform: "rotateY(-15deg) rotateX(10deg) translateZ(15px) translateY(-2px) rotate(-2deg)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[7px] font-mono opacity-50",
													children: "STUDENT BLUEPRINT"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "my-auto font-serif text-sm font-bold leading-tight",
													children: "Project Handbook"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[6px] font-mono opacity-50",
													children: "PARTNER PRESS"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute inset-0 bg-gradient-to-tr from-primary to-indigo-500 rounded-r-md border border-white/15 flex flex-col justify-between p-3 text-white overflow-hidden shadow-2xl",
											style: { transform: "rotateY(-15deg) rotateX(10deg) translateZ(30px) translateY(-12px) rotate(1deg)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[7px] font-mono uppercase tracking-widest opacity-80",
													children: "ProjectHub"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "my-auto space-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-base font-serif font-bold italic leading-tight",
														children: "Academic"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-[10px] font-sans font-semibold tracking-wider uppercase opacity-85",
														children: "Success Book"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[6px] font-mono opacity-60",
													children: "EXCLUSIVE BONUS"
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-widest rounded-full",
										children: "Official Publishing Partner"
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-8 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-center md:text-left",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-center md:justify-start gap-2.5 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
													animate: { scale: [
														1,
														1.2,
														1
													] },
													transition: {
														duration: 1.5,
														repeat: Infinity
													},
													className: "text-3xl",
													children: "🎁"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-mono text-[10px] tracking-widest uppercase font-bold text-primary",
													children: "Free Physical Book"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "font-serif text-3xl sm:text-4xl tracking-tight text-foreground leading-none",
												children: "FREE PHYSICAL BOOK"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground mt-2 font-medium",
												children: "Purchase Any Project Bundle and Get a FREE Book Delivered to Your Home."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-muted/30 border border-border/80 rounded-xl p-4",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-col sm:flex-row items-center justify-between gap-y-3 gap-x-2 text-center text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-base",
														children: "🎓"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold mt-1",
														children: "Project Purchase"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline text-muted-foreground font-bold",
													children: "↓"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-base",
														children: "📥"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold mt-1",
														children: "Instant Download"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline text-muted-foreground font-bold",
													children: "↓"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-base",
														children: "🎁"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold mt-1",
														children: "Free Book Coupon"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline text-muted-foreground font-bold",
													children: "↓"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-base",
														children: "📚"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold mt-1",
														children: "Choose Any Book"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "hidden sm:inline text-muted-foreground font-bold",
													children: "↓"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col items-center",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-base",
														children: "🏠"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold mt-1 text-primary font-bold",
														children: "Delivered to Home"
													})]
												})
											]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",
										children: [
											"Instant Project Download",
											"FREE Physical Book",
											"Home Delivery",
											"Trusted Publishing Partner",
											"Limited Time Offer"
										].map((benefit) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-2 border border-border/60 bg-background/50 rounded-lg p-2.5 text-xs text-foreground/90 font-medium",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-emerald-500 font-bold shrink-0",
												children: "✓"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: benefit })]
										}, benefit))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[10px] text-muted-foreground bg-primary/5 border border-primary/10 rounded-md p-3 text-center sm:text-left leading-relaxed",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold text-primary uppercase font-mono tracking-wide",
											children: "Important Notice:"
										}), " ProjectHub does not deliver books. Books are delivered directly by our Official Publishing Partner."]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 pt-5 border-t border-border flex flex-col items-center space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "w-full flex flex-col sm:flex-row gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: handleUnlockOffer,
									className: "flex-1 py-3.5 bg-primary hover:opacity-95 text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md transition-all shadow-lg shadow-primary/25 text-center flex items-center justify-center gap-2",
									children: "🎁 Unlock Free Book Offer"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: closePopup,
									className: "flex-1 py-3.5 border border-border hover:bg-foreground/5 text-foreground text-xs font-bold uppercase tracking-widest rounded-md transition-colors text-center",
									children: "Continue Browsing"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-muted-foreground select-none cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: dontShowAgain,
									onChange: (e) => setDontShowAgain(e.target.checked),
									className: "size-3.5 rounded border-input text-primary focus:ring-ring"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Don't show again" })]
							})]
						})
					]
				})]
			})
		]
	});
}
function ContactInfo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-4xl px-6 py-16 text-center border-t border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-3",
				children: "Support"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl md:text-4xl mb-6",
				children: "Contact Us"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-lg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "📞"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-muted-foreground",
						children: "+91 9849258028"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xl",
						children: "✉"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:raghuraj@hotmail.com",
						className: "font-mono text-primary hover:underline",
						children: "raghuraj@hotmail.com"
					})]
				})]
			})
		]
	});
}
function Hero({ searchQuery, setSearchQuery }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative px-6 pt-20 pb-24 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain-bg absolute inset-0 opacity-40 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						ease: [
							.19,
							1,
							.22,
							1
						]
					},
					className: "font-serif text-5xl md:text-7xl font-medium tracking-tight text-balance leading-[1.05]",
					children: [
						"Your Complete Academic ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic text-primary",
							children: "Resource Marketplace"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .05
					},
					className: "mt-6 text-xs sm:text-sm font-mono tracking-[0.25em] uppercase font-bold text-center select-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-shining",
						children: "Projects • Notes • Research • Documentation"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .1
					},
					className: "mx-auto mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed",
					children: "Explore domain-wise academic projects with complete documentation, source code, PPTs, reports, and study resources—all available through a simple and secure platform."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						duration: .7,
						delay: .2
					},
					className: "mx-auto mt-10 max-w-2xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center h-14 bg-card ring-1 ring-border rounded-lg shadow-sm px-4 focus-within:ring-primary transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted-foreground mr-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: searchQuery,
							onChange: (e) => setSearchQuery(e.target.value),
							placeholder: "Search by domain, project or technology...",
							className: "flex-1 bg-transparent outline-none text-sm"
						})]
					})
				})
			]
		})]
	});
}
function FeaturedDomains({ domains, loading }) {
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-6 py-24 border-t border-border text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
				children: "Curated Collections"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl md:text-4xl font-medium tracking-tight mb-6",
				children: "Domains"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-16 border border-dashed border-border rounded-md text-muted-foreground bg-card animate-pulse",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg font-medium",
					children: "Loading Domains..."
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "featured-domains",
		className: "mx-auto max-w-7xl px-6 py-16 border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Curated Collections",
			title: "Browse Domains",
			subtitle: "Explore academic resource bundles by department.",
			link: {
				to: "/domains",
				label: `View all domains`
			}
		}), domains.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "py-16 text-center text-muted-foreground border border-dashed border-border rounded-md bg-card",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-medium",
				children: "No Domains Available Yet"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm mt-1",
				children: "Admin will upload domain resource bundles for this category soon."
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: domains.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainCard, {
				d,
				index: i
			}, d.id))
		})]
	}) });
}
function SectionHeader({ eyebrow, title, subtitle, link }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-end justify-between mb-10 flex-wrap gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl md:text-4xl font-medium tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: subtitle
			})
		] }), link && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: link.to,
			className: "text-sm font-medium text-primary hover:underline underline-offset-4",
			children: [link.label, " →"]
		})]
	});
}
//#endregion
export { HomePage as component };
