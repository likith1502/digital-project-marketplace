import { f as API, l as getDomainBySlug, u as getProjectById } from "./data-DheW3zCV.js";
import { t as Route } from "./payment-success-CQ9OEjab.js";
import { n as Navbar, t as Footer } from "./Footer-CeePt57L.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, CheckCircle2, Download, FileArchive } from "lucide-react";
import { motion } from "framer-motion";
//#region src/routes/payment-success.tsx?tsr-split=component
function SuccessPage() {
	const { txn, domain } = Route.useSearch();
	const [d, setD] = useState(null);
	const [downloading, setDownloading] = useState("idle");
	const [progress, setProgress] = useState(0);
	const [order, setOrder] = useState(null);
	const [particles, setParticles] = useState([]);
	useEffect(() => {
		const colors = [
			"#6366f1",
			"#10b981",
			"#f59e0b",
			"#ec4899",
			"#3b82f6"
		];
		setParticles(Array.from({ length: 60 }).map((_, i) => ({
			id: i,
			x: Math.random() * 100,
			size: Math.random() * 8 + 4,
			color: colors[Math.floor(Math.random() * colors.length)],
			delay: Math.random() * 2,
			duration: Math.random() * 3 + 2,
			rotate: Math.random() * 360
		})));
	}, []);
	useEffect(() => {
		if (domain) getProjectById(domain).then((proj) => {
			if (proj) setD(proj);
			else getDomainBySlug(domain).then(setD);
		});
	}, [domain]);
	useEffect(() => {
		if (txn) API.get(`/api/orders/${txn}`).then((res) => {
			setOrder(res.data);
		}).catch((err) => {
			console.error("Error fetching order details:", err);
		});
	}, [txn]);
	const handleDownload = async (targetD) => {
		const currentD = targetD || d;
		if (!currentD) return;
		setDownloading("starting");
		setProgress(10);
		try {
			const res = await API.get(`/api/download/${currentD.id}`, {
				responseType: "blob",
				onDownloadProgress: (progressEvent) => {
					if (progressEvent.total) setProgress(Math.round(progressEvent.loaded * 100 / progressEvent.total));
					else setProgress((p) => Math.min(p + 15, 95));
				}
			});
			setProgress(100);
			setDownloading("done");
			const blob = new Blob([res.data], { type: "application/zip" });
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			const downloadName = currentD.projectName ? `${currentD.projectName.toLowerCase().replace(/\s+/g, "-")}-bundle.zip` : `${currentD.slug}-bundle.zip`;
			link.setAttribute("download", downloadName);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (err) {
			console.error(err);
			alert("Download failed: " + (err.response?.data?.error || "Server error"));
			setDownloading("idle");
		}
	};
	const hasFiles = d ? d.filesList ? d.filesList.length > 0 : d.resourceCount > 0 : false;
	useEffect(() => {
		if (d && downloading === "idle") handleDownload(d);
	}, [d]);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background flex flex-col relative overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("style", { children: `
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
        }
      ` }),
			/* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 pointer-events-none overflow-hidden z-[200]",
				children: particles.map((p) => /* @__PURE__ */ jsx("div", {
					className: "absolute rounded-sm animate-fall",
					style: {
						left: `${p.x}%`,
						top: `-10px`,
						width: `${p.size}px`,
						height: `${p.size}px`,
						backgroundColor: p.color,
						animationDelay: `${p.delay}s`,
						animationDuration: `${p.duration}s`,
						animationTimingFunction: "linear",
						animationIterationCount: "infinite",
						transform: `rotate(${p.rotate}deg)`
					}
				}, p.id))
			}),
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1 flex items-center justify-center px-6 py-20 relative z-10",
				children: /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .6 },
					className: "w-full max-w-xl text-center",
					children: [
						/* @__PURE__ */ jsx(motion.div, {
							initial: { scale: 0 },
							animate: { scale: 1 },
							transition: {
								delay: .1,
								type: "spring",
								stiffness: 200
							},
							className: "mx-auto mb-6 size-20 rounded-full bg-emerald-500/15 border border-emerald-500/20 grid place-items-center text-emerald-500 shadow-lg shadow-emerald-500/10",
							children: /* @__PURE__ */ jsx(CheckCircle2, { className: "size-10 animate-pulse" })
						}),
						/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-2",
							children: "Payment Confirmed"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-serif text-4xl tracking-tight mb-3",
							children: "🎉 Payment Successful"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground mb-10",
							children: "Your Project Purchase has been completed successfully."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "border border-border bg-card rounded-md p-6 text-left space-y-4 mb-8",
							children: [
								/* @__PURE__ */ jsx(Row, {
									label: "Domain",
									value: d?.domainName || d?.name || "—"
								}),
								d?.projectName && /* @__PURE__ */ jsx(Row, {
									label: "Project",
									value: d.projectName
								}),
								/* @__PURE__ */ jsx(Row, {
									label: "Transaction ID",
									value: txn ?? "—",
									mono: true
								}),
								/* @__PURE__ */ jsx(Row, {
									label: "Amount",
									value: d?.price !== void 0 ? `₹${d.price.toLocaleString("en-IN")}` : "—"
								}),
								/* @__PURE__ */ jsx(Row, {
									label: "Date",
									value: (/* @__PURE__ */ new Date()).toLocaleDateString()
								})
							]
						}),
						d && /* @__PURE__ */ jsxs("div", {
							className: "border border-border bg-card rounded-md p-6",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3 mb-4",
								children: [/* @__PURE__ */ jsx("div", {
									className: "size-10 rounded bg-primary/10 grid place-items-center text-primary",
									children: /* @__PURE__ */ jsx(FileArchive, { className: "size-5" })
								}), /* @__PURE__ */ jsxs("div", {
									className: "text-left min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-mono text-sm truncate",
										children: d.projectName ? `${d.projectName.toLowerCase().replace(/\s+/g, "-")}-bundle.zip` : `${d.slug}-bundle.zip`
									}), /* @__PURE__ */ jsxs("div", {
										className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
										children: ["ZIP · ", d.totalSize]
									})]
								})]
							}), !hasFiles ? /* @__PURE__ */ jsx("div", {
								className: "p-4 border border-dashed border-border rounded text-center text-sm font-mono text-muted-foreground",
								children: "No downloadable resources are available for this project yet."
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [
								downloading === "idle" && /* @__PURE__ */ jsxs("button", {
									onClick: handleDownload,
									className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90",
									children: [/* @__PURE__ */ jsx(Download, { className: "size-4" }), " Download Project ZIP"]
								}),
								downloading === "starting" && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "h-2 rounded-full bg-secondary overflow-hidden",
									children: /* @__PURE__ */ jsx(motion.div, {
										className: "h-full bg-primary",
										animate: { width: `${progress}%` },
										transition: { ease: "linear" }
									})
								}), /* @__PURE__ */ jsxs("div", {
									className: "mt-2 text-xs font-mono text-muted-foreground",
									children: [
										"Downloading... ",
										progress,
										"%"
									]
								})] }),
								downloading === "done" && /* @__PURE__ */ jsx("div", {
									className: "text-sm text-primary font-medium",
									children: "✓ Downloaded successfully"
								})
							] })]
						}),
						order && (order.bookUnlocked || order.bookOfferUnlocked) && /* @__PURE__ */ jsxs("div", {
							className: "mt-8 border border-primary/20 bg-primary/5 rounded-lg p-6 text-left space-y-6 relative overflow-hidden transition-all duration-300 hover:scale-[1.01]",
							style: { boxShadow: "0 0 20px rgba(99, 102, 241, 0.08)" },
							children: [
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-indigo-500/5 blur-xl pointer-events-none" }),
								/* @__PURE__ */ jsxs("div", {
									className: "relative space-y-1",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest font-mono",
										children: [/* @__PURE__ */ jsx("span", { children: "🎉" }), /* @__PURE__ */ jsx("span", { children: "CONGRATULATIONS!" })]
									}), /* @__PURE__ */ jsx("h3", {
										className: "font-serif text-2xl tracking-tight text-foreground font-bold",
										children: "Your FREE Physical Book has been unlocked."
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative border border-border bg-background/60 rounded-xl p-5 space-y-4 shadow-sm",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between py-2 border-b border-border/40 gap-4",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
													children: "Publisher"
												}), /* @__PURE__ */ jsx("span", {
													className: "font-semibold text-foreground text-sm",
													children: order.publisherName || "Official Publishing Partner"
												})]
											}), order.publisherLogo ? /* @__PURE__ */ jsx("img", {
												src: order.publisherLogo.startsWith("http") ? order.publisherLogo : `${API.defaults.baseURL || "http://localhost:5000"}${order.publisherLogo}`,
												alt: "Publisher Logo",
												className: "h-10 max-w-[120px] object-contain rounded",
												onError: (e) => {
													e.currentTarget.style.display = "none";
												}
											}) : /* @__PURE__ */ jsx("div", {
												className: "text-xl",
												children: "📚"
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "relative border border-dashed border-primary/40 bg-primary/5 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-hidden",
											children: [
												/* @__PURE__ */ jsx("div", { className: "absolute -left-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-card border-r border-primary/30" }),
												/* @__PURE__ */ jsx("div", { className: "absolute -right-3 top-1/2 -translate-y-1/2 size-6 rounded-full bg-card border-l border-primary/30" }),
												/* @__PURE__ */ jsxs("div", {
													className: "space-y-1 z-10 text-center sm:text-left",
													children: [/* @__PURE__ */ jsx("div", {
														className: "text-[9px] font-mono uppercase tracking-widest text-muted-foreground",
														children: "Coupon Code"
													}), /* @__PURE__ */ jsx("div", {
														className: "font-mono text-xl sm:text-2xl font-bold bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded select-all tracking-wider",
														children: order.couponCode
													})]
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "flex gap-2.5 z-10 w-full sm:w-auto",
													children: [/* @__PURE__ */ jsxs("button", {
														onClick: () => {
															navigator.clipboard.writeText(order.couponCode);
															alert("Coupon code copied to clipboard!");
														},
														className: "flex-1 sm:flex-initial px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground text-xs font-mono uppercase tracking-widest rounded-sm text-center flex items-center justify-center gap-1.5 border border-border transition-colors cursor-pointer",
														children: [/* @__PURE__ */ jsx("span", { children: "📋" }), " Copy Coupon"]
													}), /* @__PURE__ */ jsxs("a", {
														href: order.publisherWebsite || order.publisherLink,
														target: "_blank",
														rel: "noopener noreferrer",
														className: "flex-1 sm:flex-initial px-4 py-2.5 bg-primary text-primary-foreground hover:opacity-90 text-xs font-mono uppercase tracking-widest rounded-sm text-center flex items-center justify-center gap-1.5 shadow-md shadow-primary/10",
														children: [/* @__PURE__ */ jsx("span", { children: "📚" }), " Claim Free Book"]
													})]
												})
											]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between items-center py-2 border-b border-border/40 text-xs",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
												children: "Book Value"
											}), /* @__PURE__ */ jsx("span", {
												className: "font-mono text-xs font-bold text-foreground",
												children: "₹499 - ₹999"
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between items-center py-2 text-xs",
											children: [/* @__PURE__ */ jsx("span", {
												className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground",
												children: "Offer Status"
											}), /* @__PURE__ */ jsx("span", {
												className: "px-2 py-0.5 rounded-sm font-mono text-[9px] uppercase tracking-wider bg-green-500/10 text-green-600 dark:text-green-400 font-semibold",
												children: "Active / Unlocked"
											})]
										})
									]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative pt-4 border-t border-border space-y-3",
									children: [
										/* @__PURE__ */ jsx("h4", {
											className: "text-xs font-mono uppercase tracking-widest font-semibold text-foreground",
											children: "How to Claim Your FREE Book"
										}),
										/* @__PURE__ */ jsxs("ol", {
											className: "list-decimal list-inside text-xs text-muted-foreground space-y-2 leading-relaxed",
											children: [
												/* @__PURE__ */ jsx("li", { children: "Download your Project." }),
												/* @__PURE__ */ jsx("li", { children: "Click Claim Free Book." }),
												/* @__PURE__ */ jsx("li", { children: "Choose your preferred book." }),
												/* @__PURE__ */ jsx("li", { children: "Apply your Coupon Code." }),
												/* @__PURE__ */ jsx("li", { children: "Enter Shipping Address." }),
												/* @__PURE__ */ jsx("li", { children: "Publisher delivers the book." })
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-[10px] text-muted-foreground/75 leading-relaxed pt-2 border-t border-border/50",
											children: "Disclaimer: ProjectHub only provides the coupon code and publisher website. Book selection, shipping, delivery and customer support are handled entirely by the publishing partner."
										})
									]
								})
							]
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/domains",
							className: "mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
							children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " Browse more domains"]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Row({ label, value, mono }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex justify-between items-center",
		children: [/* @__PURE__ */ jsx("span", {
			className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ jsx("span", {
			className: `text-sm ${mono ? "font-mono" : ""}`,
			children: value
		})]
	});
}
//#endregion
export { SuccessPage as component };
