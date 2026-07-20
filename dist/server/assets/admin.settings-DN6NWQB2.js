import { r as useTheme } from "./ThemeToggle-oSV43H9_.js";
import { c as getAdminSession, f as API } from "./data-DheW3zCV.js";
import { t as AdminShell } from "./AdminShell-DD3gE3VF.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Monitor, Moon, Sun } from "lucide-react";
//#region src/routes/admin.settings.tsx?tsr-split=component
function SettingsPage() {
	const { theme, setTheme } = useTheme();
	const [session, setSession] = useState(null);
	const [name, setName] = useState("");
	const [siteName, setSiteName] = useState("ProjectHub");
	const [tagline, setTagline] = useState("Premium Academic Resources");
	const [saved, setSaved] = useState(false);
	const [profileError, setProfileError] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [pwSaved, setPwSaved] = useState(false);
	const [pwError, setPwError] = useState("");
	const [promoEnabled, setPromoEnabled] = useState(false);
	const [promoTitle, setPromoTitle] = useState("");
	const [promoDesc, setPromoDesc] = useState("");
	const [publisherName, setPublisherName] = useState("");
	const [publisherUrl, setPublisherUrl] = useState("");
	const [couponCode, setCouponCode] = useState("");
	const [popupImage, setPopupImage] = useState("");
	const [publisherLogo, setPublisherLogo] = useState("");
	const [bannerImage, setBannerImage] = useState("");
	const [validTill, setValidTill] = useState("");
	const [promoSaved, setPromoSaved] = useState(false);
	const [promoError, setPromoError] = useState("");
	useEffect(() => {
		const s = getAdminSession();
		if (s) {
			setSession(s);
			setName(s.name);
		}
		API.get("/api/book-promotion").then((res) => {
			const d = res.data;
			if (d) {
				setPromoEnabled(d.isEnabled ?? false);
				setPromoTitle(d.title ?? "");
				setPromoDesc(d.description ?? "");
				setPublisherName(d.publisherName ?? "");
				setPublisherUrl(d.publisherWebsite ?? "");
				setCouponCode(d.couponCode ?? "");
				setPopupImage(d.popupImage ?? "");
				setPublisherLogo(d.publisherLogo ?? "");
				setBannerImage(d.bannerImage ?? "");
				setValidTill(d.validTill ?? "");
			}
		}).catch((err) => console.error("Error fetching promo settings:", err));
	}, []);
	const handleSavePromo = async () => {
		setPromoSaved(false);
		setPromoError("");
		try {
			await API.put("/api/admin/book-promotion", {
				isEnabled: promoEnabled,
				title: promoTitle,
				description: promoDesc,
				publisherName,
				publisherWebsite: publisherUrl,
				couponCode,
				popupImage,
				publisherLogo,
				bannerImage,
				validTill
			});
			setPromoSaved(true);
			setTimeout(() => setPromoSaved(false), 2e3);
		} catch (err) {
			setPromoError(err.response?.data?.error || "Failed to update settings");
		}
	};
	const handleSaveProfile = async () => {
		setSaved(false);
		setProfileError("");
		try {
			await API.patch("/api/auth/me", { name });
			const stored = localStorage.getItem("ph-admin-session");
			if (stored) {
				const parsed = JSON.parse(stored);
				localStorage.setItem("ph-admin-session", JSON.stringify({
					...parsed,
					name
				}));
			}
			setSaved(true);
			setTimeout(() => setSaved(false), 2e3);
		} catch (err) {
			setProfileError(err.response?.data?.error || "Failed to save profile");
		}
	};
	const handleChangePassword = async () => {
		setPwSaved(false);
		setPwError("");
		if (!oldPassword || !newPassword) {
			setPwError("Both current and new password are required.");
			return;
		}
		if (newPassword.length < 6) {
			setPwError("New password must be at least 6 characters.");
			return;
		}
		try {
			await API.patch("/api/auth/me", {
				old_password: oldPassword,
				new_password: newPassword
			});
			setPwSaved(true);
			setOldPassword("");
			setNewPassword("");
			setTimeout(() => setPwSaved(false), 2500);
		} catch (err) {
			setPwError(err.response?.data?.error || "Failed to change password");
		}
	};
	if (!session) return null;
	return /* @__PURE__ */ jsxs(AdminShell, {
		title: "Settings",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-8",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "font-serif text-3xl mb-1",
				children: "Settings"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-muted-foreground text-sm",
				children: "Manage your profile, theme and website preferences."
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "max-w-3xl space-y-6",
			children: [
				/* @__PURE__ */ jsxs(Section, {
					title: "Profile",
					desc: "Information used across the admin console.",
					children: [/* @__PURE__ */ jsx(Field, {
						label: "Full Name",
						children: /* @__PURE__ */ jsx("input", {
							value: name,
							onChange: (e) => setName(e.target.value),
							className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
						})
					}), /* @__PURE__ */ jsx(Field, {
						label: "Email",
						children: /* @__PURE__ */ jsx("input", {
							value: session.email,
							disabled: true,
							className: "w-full h-11 px-3 rounded-md border border-input bg-muted text-muted-foreground"
						})
					})]
				}),
				/* @__PURE__ */ jsx(Section, {
					title: "Theme Preference",
					desc: "Choose how the admin console appears.",
					children: /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-3 gap-3",
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
							onClick: () => setTheme(v),
							className: `flex flex-col items-start gap-2 p-4 rounded-md border-2 transition-colors ${theme === v ? "border-primary bg-primary/5" : "border-border hover:bg-accent/30"}`,
							children: [/* @__PURE__ */ jsx(I, { className: "size-4 text-primary" }), /* @__PURE__ */ jsx("div", {
								className: "text-sm font-medium",
								children: label
							})]
						}, v))
					})
				}),
				/* @__PURE__ */ jsxs(Section, {
					title: "Change Password",
					desc: "Update your admin password.",
					children: [
						/* @__PURE__ */ jsx(Field, {
							label: "Current Password",
							children: /* @__PURE__ */ jsx("input", {
								type: "password",
								value: oldPassword,
								onChange: (e) => setOldPassword(e.target.value),
								className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
								placeholder: "Enter current password"
							})
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "New Password",
							children: /* @__PURE__ */ jsx("input", {
								type: "password",
								value: newPassword,
								onChange: (e) => setNewPassword(e.target.value),
								className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
								placeholder: "Min. 6 characters"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-end gap-3 pt-1",
							children: [
								pwError && /* @__PURE__ */ jsx("span", {
									className: "text-xs text-destructive font-mono",
									children: pwError
								}),
								pwSaved && /* @__PURE__ */ jsx("span", {
									className: "text-xs text-primary font-mono uppercase tracking-widest",
									children: "✓ Password Updated"
								}),
								/* @__PURE__ */ jsx("button", {
									onClick: handleChangePassword,
									className: "px-6 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md hover:opacity-90",
									children: "Update Password"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs(Section, {
					title: "Book Promotion Settings",
					desc: "Configure the Free Physical Book Reward promotion.",
					children: [
						/* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 mb-4 cursor-pointer",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: promoEnabled,
								onChange: (e) => setPromoEnabled(e.target.checked),
								className: "size-4 rounded border border-input text-primary focus:ring-ring"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium",
								children: "Promotion Enabled"
							})]
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Popup Title",
							children: /* @__PURE__ */ jsx("input", {
								value: promoTitle,
								onChange: (e) => setPromoTitle(e.target.value),
								className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
								placeholder: "e.g. 🎁 Exclusive Student Reward"
							})
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Popup Description",
							children: /* @__PURE__ */ jsx("textarea", {
								value: promoDesc,
								onChange: (e) => setPromoDesc(e.target.value),
								rows: 3,
								className: "w-full p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40 text-sm",
								placeholder: "Enter popup description..."
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Popup Image URL",
								children: /* @__PURE__ */ jsx("input", {
									value: popupImage,
									onChange: (e) => setPopupImage(e.target.value),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
									placeholder: "Leave empty or enter absolute path/URL to popup image"
								})
							}), /* @__PURE__ */ jsx(Field, {
								label: "Publisher Logo URL",
								children: /* @__PURE__ */ jsx("input", {
									value: publisherLogo,
									onChange: (e) => setPublisherLogo(e.target.value),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
									placeholder: "Leave empty or enter absolute path/URL to publisher logo image"
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Publisher Name",
								children: /* @__PURE__ */ jsx("input", {
									value: publisherName,
									onChange: (e) => setPublisherName(e.target.value),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
									placeholder: "e.g. Official Publishing Partner"
								})
							}), /* @__PURE__ */ jsx(Field, {
								label: "Publisher Website URL",
								children: /* @__PURE__ */ jsx("input", {
									value: publisherUrl,
									onChange: (e) => setPublisherUrl(e.target.value),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
									placeholder: "e.g. https://example.com/books"
								})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ jsx(Field, {
								label: "Coupon Code",
								children: /* @__PURE__ */ jsx("input", {
									value: couponCode,
									onChange: (e) => setCouponCode(e.target.value),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
									placeholder: "e.g. FREEBOOKSTUDENT"
								})
							}), /* @__PURE__ */ jsx(Field, {
								label: "Offer Valid Until",
								children: /* @__PURE__ */ jsx("input", {
									type: "date",
									value: validTill,
									onChange: (e) => setValidTill(e.target.value),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
								})
							})]
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Banner Image URL",
							children: /* @__PURE__ */ jsx("input", {
								value: bannerImage,
								onChange: (e) => setBannerImage(e.target.value),
								className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40",
								placeholder: "Leave empty or enter absolute path/URL to promotional banner image"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center justify-end gap-3 pt-2",
							children: [
								promoError && /* @__PURE__ */ jsx("span", {
									className: "text-sm text-destructive font-mono text-[10px]",
									children: promoError
								}),
								promoSaved && /* @__PURE__ */ jsx("span", {
									className: "text-sm text-primary font-mono uppercase tracking-widest text-[10px]",
									children: "✓ Settings Saved"
								}),
								/* @__PURE__ */ jsx("button", {
									onClick: handleSavePromo,
									className: "px-6 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md",
									children: "Save Book Promotion Settings"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-end gap-3 pt-4",
					children: [
						profileError && /* @__PURE__ */ jsx("span", {
							className: "text-xs text-destructive font-mono",
							children: profileError
						}),
						saved && /* @__PURE__ */ jsx("span", {
							className: "text-sm text-primary font-mono uppercase tracking-widest text-[10px]",
							children: "✓ Profile Saved"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: handleSaveProfile,
							className: "px-6 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md hover:opacity-90",
							children: "Save Changes"
						})
					]
				})
			]
		})]
	});
}
function Section({ title, desc, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "border border-border bg-card rounded-md p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-5",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-serif text-xl",
				children: title
			}), /* @__PURE__ */ jsx("div", {
				className: "text-sm text-muted-foreground",
				children: desc
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "space-y-4",
			children
		})]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ jsxs("label", {
		className: "block",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
			children: label
		}), children]
	});
}
//#endregion
export { SettingsPage as component };
