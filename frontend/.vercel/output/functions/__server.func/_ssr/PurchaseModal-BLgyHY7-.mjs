import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as LoaderCircle, F as CircleAlert, n as X } from "../_libs/lucide-react.mjs";
import { n as AnimatePresence, t as motion } from "../_libs/framer-motion.mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as addPurchase, t as API } from "./data-DheW3zCV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PurchaseModal-BLgyHY7-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var log = (step, data) => {
	const ts = (/* @__PURE__ */ new Date()).toISOString();
	if (data !== void 0) console.log(`[PaymentPipeline][${ts}] ${step}`, data);
	else console.log(`[PaymentPipeline][${ts}] ${step}`);
};
var logError = (step, err) => {
	const ts = (/* @__PURE__ */ new Date()).toISOString();
	console.error(`[PaymentPipeline][${ts}] ❌ ${step}`, err);
};
function loadRazorpaySDK() {
	return new Promise((resolve) => {
		if (window.Razorpay) {
			log("Step 5: Razorpay SDK already loaded — window.Razorpay exists");
			resolve(true);
			return;
		}
		log("Step 5: Loading Razorpay SDK dynamically from checkout.razorpay.com");
		const script = document.createElement("script");
		script.src = "https://checkout.razorpay.com/v1/checkout.js";
		script.async = true;
		script.onload = () => {
			log("Step 5: ✅ Razorpay SDK loaded successfully — window.Razorpay:", typeof window.Razorpay);
			resolve(true);
		};
		script.onerror = (e) => {
			logError("Step 5: Razorpay SDK failed to load (network/CDN issue)", e);
			resolve(false);
		};
		document.body.appendChild(script);
	});
}
function PurchaseModal({ domain, open, onClose }) {
	const navigate = useNavigate();
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		mobile: "",
		college: "",
		email: ""
	});
	const [err, setErr] = (0, import_react.useState)({});
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [statusMsg, setStatusMsg] = (0, import_react.useState)("");
	const [promoActive, setPromoActive] = (0, import_react.useState)(false);
	const rzpOpenRef = (0, import_react.useRef)(false);
	const resolvedName = domain.projectName || domain.title || domain.name || "Resource Package";
	const resolvedPrice = domain.price;
	const resolvedSlug = domain.slug || domain.id;
	(0, import_react.useEffect)(() => {
		if (open) {
			log("Modal opened — checking book promotion status");
			API.get("/api/book-promotion").then((res) => {
				if (res.data && res.data.isEnabled) {
					setPromoActive(true);
					log("Book promotion: ACTIVE");
				} else {
					setPromoActive(false);
					log("Book promotion: inactive");
				}
			}).catch((e) => {
				logError("Book promotion check failed (non-critical)", e);
				setPromoActive(false);
			});
		}
	}, [open]);
	const setError = (msg) => {
		setErr({ submit: msg });
		setLoading(false);
		setStatusMsg("");
		rzpOpenRef.current = false;
	};
	const submit = async (e) => {
		e.preventDefault();
		log("Step 1: PAY & DOWNLOAD button clicked");
		const errors = {};
		if (!form.name.trim()) errors.name = "Required";
		if (!/^\d{10}$/.test(form.mobile.trim())) errors.mobile = "10-digit mobile required";
		if (!form.college.trim()) errors.college = "Required";
		if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errors.email = "Invalid email";
		setErr(errors);
		if (Object.keys(errors).length) {
			log("Step 2: Validation FAILED", errors);
			return;
		}
		log("Step 2: Validation PASSED", {
			name: form.name,
			mobile: form.mobile,
			college: form.college
		});
		setLoading(true);
		setStatusMsg("Loading payment gateway...");
		setErr({});
		try {
			if (!await loadRazorpaySDK()) {
				setError("Razorpay SDK failed to load. Please check your internet connection and try again.");
				return;
			}
			log("Step 3: Sending POST /api/payments/create-order", {
				projectId: domain.id,
				name: form.name,
				mobile: form.mobile,
				college: form.college,
				email: form.email || void 0
			});
			setStatusMsg("Creating payment order...");
			let paymentOrderRes;
			try {
				paymentOrderRes = await API.post("/api/payments/create-order", {
					name: form.name,
					mobile: form.mobile,
					college: form.college,
					email: form.email || void 0,
					projectId: domain.id,
					domainId: domain.id
				});
			} catch (apiErr) {
				const statusCode = apiErr?.response?.status;
				const errMsg = apiErr?.response?.data?.error || apiErr.message || "Network error";
				logError(`Step 3: POST /api/payments/create-order FAILED (HTTP ${statusCode})`, apiErr);
				if (!apiErr?.response) setError("Unable to connect to backend server. Is the Flask server running on port 5000?");
				else if (statusCode === 400) setError(`Invalid request: ${errMsg}`);
				else if (statusCode === 404) setError(`Project not found: ${errMsg}`);
				else if (statusCode === 502) setError(`Unable to create Razorpay Order: ${errMsg}`);
				else setError(`Backend error (${statusCode}): ${errMsg}`);
				return;
			}
			const { order_id, key_id, currency, amount, amount_paise, is_mock, access_token, already_owned } = paymentOrderRes.data;
			log("Step 4: Received order response from backend", {
				order_id,
				amount,
				amount_paise,
				currency,
				key_id: key_id ? `${key_id.slice(0, 12)}...` : "(empty)",
				is_mock,
				already_owned,
				has_access_token: !!access_token
			});
			if (already_owned) {
				log("Project already purchased — redirecting to payment-success");
				onClose();
				navigate({
					to: "/payment-success",
					search: {
						txn: order_id,
						domain: resolvedSlug
					}
				});
				return;
			}
			if (access_token) {
				log("Storing guest access_token in localStorage for subsequent API calls");
				localStorage.setItem("ph-user-token", access_token);
			}
			if (!order_id) {
				setError("Backend returned no order_id. Check Flask logs.");
				return;
			}
			if (is_mock) {
				log("Step 6: MOCK FLOW — Razorpay keys unavailable or test mode. Simulating payment.");
				setStatusMsg("Processing mock payment...");
				const mockTxnId = `pay_mock_${Math.floor(1e5 + Math.random() * 9e5)}`;
				log("Step 8 (mock): Calling POST /api/payments/verify with mock IDs", {
					order_id,
					mockTxnId
				});
				let mockVerifyRes;
				try {
					mockVerifyRes = await API.post("/api/payments/verify", {
						razorpay_order_id: order_id,
						razorpay_payment_id: mockTxnId,
						razorpay_signature: "mock_signature",
						name: form.name,
						mobile: form.mobile,
						college: form.college,
						email: form.email || void 0,
						projectId: domain.id,
						domainId: domain.id
					});
				} catch (verifyErr) {
					const statusCode = verifyErr?.response?.status;
					const errMsg = verifyErr?.response?.data?.error || verifyErr.message;
					logError(`Step 8 (mock): Verify call FAILED (HTTP ${statusCode})`, verifyErr);
					if (statusCode === 401) setError("Payment Verification Failed: Authentication error. The guest token may not have been stored correctly.");
					else setError(`Payment Verification Failed: ${errMsg || "Unknown error"}`);
					return;
				}
				log("Step 9 (mock): Verify response", mockVerifyRes.data);
				if (mockVerifyRes.data.success) {
					log("Step 10 (mock): Payment verified — saving purchase and redirecting");
					addPurchase({
						id: order_id,
						domainId: domain.id,
						domainName: resolvedName,
						projectId: domain.id,
						projectTitle: resolvedName,
						buyer: form.name,
						mobile: form.mobile,
						college: form.college,
						email: form.email || void 0,
						amount: resolvedPrice,
						status: "paid",
						date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
						transactionId: order_id
					});
					setLoading(false);
					setStatusMsg("");
					onClose();
					navigate({
						to: "/payment-success",
						search: {
							txn: order_id,
							domain: resolvedSlug
						}
					});
				} else {
					logError("Step 9 (mock): Verification returned success=false", mockVerifyRes.data);
					setLoading(false);
					setStatusMsg("");
					onClose();
					navigate({
						to: "/payment-failed",
						search: { domain: resolvedSlug }
					});
				}
			} else {
				const frontendKeyId = "rzp_test_SDDG2glE4fULbc".trim();
				const amountInPaise = amount_paise ?? amount * 100;
				log("Step 6: Opening Official Razorpay Checkout", {
					key: `${frontendKeyId.slice(0, 12)}...`,
					order_id,
					amount_paise: amountInPaise,
					currency
				});
				setStatusMsg("Opening Razorpay Checkout...");
				const options = {
					key: frontendKeyId,
					amount: amountInPaise,
					currency: currency || "INR",
					name: "ProjectHub",
					description: resolvedName,
					order_id,
					handler: async (response) => {
						log("Step 8: Payment success callback received from Razorpay", {
							razorpay_payment_id: response.razorpay_payment_id,
							razorpay_order_id: response.razorpay_order_id,
							razorpay_signature: response.razorpay_signature ? "present" : "missing"
						});
						setStatusMsg("Verifying payment...");
						setLoading(true);
						try {
							log("Step 8: Calling POST /api/payments/verify");
							const verifyRes = await API.post("/api/payments/verify", {
								razorpay_order_id: response.razorpay_order_id,
								razorpay_payment_id: response.razorpay_payment_id,
								razorpay_signature: response.razorpay_signature,
								name: form.name,
								mobile: form.mobile,
								college: form.college,
								email: form.email || void 0,
								projectId: domain.id,
								domainId: domain.id
							});
							log("Step 9: Verify response", verifyRes.data);
							if (verifyRes.data.success) {
								log("Step 10: Payment verified — saving purchase locally");
								addPurchase({
									id: response.razorpay_order_id,
									domainId: domain.id,
									domainName: resolvedName,
									projectId: domain.id,
									projectTitle: resolvedName,
									buyer: form.name,
									mobile: form.mobile,
									college: form.college,
									email: form.email || void 0,
									amount: resolvedPrice,
									status: "paid",
									date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
									transactionId: response.razorpay_payment_id
								});
								log("Step 11: Redirecting to Payment Success page");
								setLoading(false);
								setStatusMsg("");
								rzpOpenRef.current = false;
								onClose();
								navigate({
									to: "/payment-success",
									search: {
										txn: response.razorpay_payment_id,
										domain: resolvedSlug
									}
								});
							} else {
								logError("Step 9: Verify returned success=false", verifyRes.data);
								setLoading(false);
								setStatusMsg("");
								rzpOpenRef.current = false;
								onClose();
								navigate({
									to: "/payment-failed",
									search: { domain: resolvedSlug }
								});
							}
						} catch (verifyErr) {
							const statusCode = verifyErr?.response?.status;
							const errMsg = verifyErr?.response?.data?.error || verifyErr.message;
							logError(`Step 9: Payment Verification API FAILED (HTTP ${statusCode})`, verifyErr);
							setLoading(false);
							setStatusMsg("");
							rzpOpenRef.current = false;
							setErr({ submit: statusCode === 401 ? "Payment Verification Failed: Session expired. Please refresh and try again." : `Payment Verification Failed: ${errMsg || "Unknown error"}. Your payment may have been deducted — contact support with your payment ID: ${response.razorpay_payment_id}` });
						}
					},
					modal: {
						ondismiss: () => {
							log("Razorpay modal dismissed by user");
							rzpOpenRef.current = false;
							setLoading(false);
							setStatusMsg("");
							onClose();
							navigate({
								to: "/payment-cancelled",
								search: { domain: resolvedSlug }
							});
						},
						escape: true,
						backdropclose: false
					},
					prefill: {
						name: form.name,
						email: form.email || "",
						contact: form.mobile
					},
					notes: {
						project_id: domain.id,
						buyer_name: form.name,
						college: form.college
					},
					theme: { color: "#3b82f6" }
				};
				const rzp = new window.Razorpay(options);
				rzp.on("payment.failed", (response) => {
					logError("Razorpay payment.failed event", response);
					rzpOpenRef.current = false;
					setLoading(false);
					setStatusMsg("");
					onClose();
					navigate({
						to: "/payment-failed",
						search: { domain: resolvedSlug }
					});
				});
				log("Step 6: Calling rzp.open() — Official Razorpay Checkout should appear now");
				rzpOpenRef.current = true;
				rzp.open();
				setStatusMsg("Complete payment in Razorpay...");
				return;
			}
		} catch (error) {
			logError("Unhandled error in payment submit", error);
			setError(error?.response?.data?.error || error?.message || "An unexpected error occurred during checkout");
		} finally {
			if (!rzpOpenRef.current) {
				setLoading(false);
				setStatusMsg("");
			}
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-sm grid place-items-center p-4",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 20,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 20,
				scale: .96
			},
			transition: {
				duration: .25,
				ease: [
					.19,
					1,
					.22,
					1
				]
			},
			className: "w-full max-w-lg rounded-lg bg-card border border-border shadow-2xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between p-6 pb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] uppercase tracking-widest text-primary mb-1 text-left",
						children: "Checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-serif text-2xl text-left",
						children: ["Purchase ", resolvedName]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1 text-left",
						children: "Enter your details to receive the download instantly."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "grid size-8 place-items-center rounded-full hover:bg-accent text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "px-6 pb-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Full Name *",
						error: err.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.name,
							onChange: (e) => setForm({
								...form,
								name: e.target.value
							}),
							className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Mobile *",
							error: err.mobile,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								inputMode: "numeric",
								value: form.mobile,
								onChange: (e) => setForm({
									...form,
									mobile: e.target.value
								}),
								className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							error: err.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								}),
								className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "College Name *",
						error: err.college,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.college,
							onChange: (e) => setForm({
								...form,
								college: e.target.value
							}),
							className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-muted/40 border border-border rounded-md p-4 space-y-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground text-left",
							children: "Your Purchase Includes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5 text-xs text-foreground/90 text-left",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-bold",
										children: "✓"
									}), " Project ZIP Download"]
								}),
								promoActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-semibold text-foreground animate-pulse",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-bold",
										children: "✓"
									}), " FREE Book Coupon"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 font-semibold text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-primary font-bold",
										children: "✓"
									}), " Instant Access"]
								})
							]
						})]
					}),
					err.submit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -6
						},
						animate: {
							opacity: 1,
							y: 0
						},
						className: "flex items-start gap-3 rounded-md border border-destructive/40 bg-destructive/10 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-4 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-destructive leading-snug",
							children: err.submit
						})]
					}),
					loading && statusMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-mono text-muted-foreground text-center animate-pulse",
						children: statusMsg
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pt-4 border-t border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-2xl font-medium",
								children: ["₹", resolvedPrice.toLocaleString("en-IN")]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: loading,
							className: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90 disabled:opacity-60",
							children: [loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : null, loading ? statusMsg || "Processing..." : "Pay & Download"]
						})]
					})
				]
			})]
		})
	}) });
}
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
				children: label
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-xs text-destructive mt-1",
				children: error
			})
		]
	});
}
//#endregion
export { PurchaseModal as t };
