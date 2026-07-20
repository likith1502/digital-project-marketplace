import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { I as ChevronRight, L as ChevronLeft, u as Search } from "../_libs/lucide-react.mjs";
import { f as getPurchases } from "./data-DheW3zCV.mjs";
import { t as AdminShell } from "./AdminShell-DD3gE3VF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.transactions-B_IfHkS3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TxnPage() {
	const [all, setAll] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [q, setQ] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const PAGE_SIZE = 10;
	(0, import_react.useEffect)(() => {
		getPurchases().then((data) => {
			setAll(data);
			setLoading(false);
		});
	}, []);
	const list = (0, import_react.useMemo)(() => {
		return [...all].sort((a, b) => {
			const dateA = (/* @__PURE__ */ new Date(a.date + (a.time ? "T" + a.time : ""))).getTime();
			return (/* @__PURE__ */ new Date(b.date + (b.time ? "T" + b.time : ""))).getTime() - dateA;
		});
	}, [all]).filter((p) => {
		if (!(p.status === "paid" || p.status === "completed")) return false;
		return !q || (p.buyer || "").toLowerCase().includes(q.toLowerCase()) || (p.college || "").toLowerCase().includes(q.toLowerCase()) || (p.transactionId || "").toLowerCase().includes(q.toLowerCase()) || (p.razorpayPaymentId || "").toLowerCase().includes(q.toLowerCase()) || (p.razorpayOrderId || "").toLowerCase().includes(q.toLowerCase()) || (p.email || "").toLowerCase().includes(q.toLowerCase()) || (p.mobile || "").toLowerCase().includes(q.toLowerCase()) || (p.domainName || "").toLowerCase().includes(q.toLowerCase()) || (p.projectTitle || "").toLowerCase().includes(q.toLowerCase());
	});
	const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
	const safePage = Math.min(page, totalPages);
	const paginated = list.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
	const handleSearch = (val) => {
		setQ(val);
		setPage(1);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AdminShell, {
		title: "Transactions",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl mb-1",
					children: "Transactions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "All PAID purchases across your domain bundles."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3 mb-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center h-11 bg-card ring-1 ring-border rounded-md px-4 flex-1 max-w-md focus-within:ring-primary",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted-foreground mr-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => handleSearch(e.target.value),
						placeholder: "Search buyer, mobile, college, domain, project, payment ID...",
						className: "flex-1 bg-transparent outline-none text-sm"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border border-border bg-card rounded-md overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border font-mono text-[10px] uppercase tracking-widest text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Buyer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "College"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Domain"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Project"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Amount"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Date"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Coupon Issued"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Coupon Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Book Offer Status"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Order ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "text-left px-6 py-3 font-medium",
								children: "Payment ID"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [paginated.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border last:border-0 hover:bg-accent/30",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-6 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-medium",
										children: p.buyer
									}),
									p.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: p.email
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground",
										children: p.mobile
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: p.college
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: p.domainName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: p.projectTitle || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-6 py-4 font-medium",
								children: ["₹", p.amount.toLocaleString("en-IN")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `px-2 py-1 rounded-sm font-mono text-[10px] uppercase tracking-widest ${p.status === "paid" ? "bg-primary/15 text-primary" : p.status === "pending" ? "bg-accent text-accent-foreground" : "bg-destructive/15 text-destructive"}`,
									children: p.status
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-6 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-xs",
									children: p.date
								}), p.time && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[10px] text-muted-foreground mt-0.5",
									children: p.time
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 font-mono text-xs",
								children: p.couponCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-secondary px-2 py-1 rounded text-foreground font-bold",
									children: p.couponCode
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "—"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: p.couponCode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 py-0.5 rounded-sm font-mono text-[9px] uppercase tracking-wider bg-green-500/10 text-green-600 dark:text-green-400 font-semibold",
									children: "Active"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "—"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4",
								children: p.bookUnlocked || p.bookOfferUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 py-0.5 rounded-sm font-mono text-[9px] uppercase tracking-wider bg-green-500/10 text-green-600 dark:text-green-400 font-semibold",
									children: "Unlocked"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 py-0.5 rounded-sm font-mono text-[9px] uppercase tracking-wider bg-muted text-muted-foreground",
									children: "—"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 font-mono text-xs select-all",
								children: p.razorpayOrderId || "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-6 py-4 font-mono text-xs select-all",
								children: p.razorpayPaymentId || "—"
							})
						]
					}, p.id)), all.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 12,
						className: "text-center py-12 text-muted-foreground font-mono",
						children: "No Transactions Yet"
					}) }) : list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 12,
						className: "text-center py-12 text-muted-foreground",
						children: "No transactions match your filters."
					}) }) : null] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between mt-4 px-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground font-mono",
					children: [
						"Showing ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-semibold",
							children: list.length === 0 ? 0 : (safePage - 1) * PAGE_SIZE + 1
						}),
						"–",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-semibold",
							children: Math.min(safePage * PAGE_SIZE, list.length)
						}),
						" of ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-semibold",
							children: list.length
						}),
						" transactions"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPage((p) => Math.max(1, p - 1)),
							disabled: safePage === 1,
							className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-border text-xs font-mono font-semibold uppercase tracking-wider hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-3.5" }), " Previous"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs px-3 py-2 rounded-md bg-card border border-border text-foreground",
							children: [
								"Page ",
								safePage,
								" / ",
								totalPages
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
							disabled: safePage === totalPages,
							className: "inline-flex items-center gap-1.5 px-3 py-2 rounded-md border border-border text-xs font-mono font-semibold uppercase tracking-wider hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
							children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5" })]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { TxnPage as component };
