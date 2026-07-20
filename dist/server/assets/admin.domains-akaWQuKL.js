import { f as API, o as fetchDomains } from "./data-DheW3zCV.js";
import { t as AdminShell } from "./AdminShell-DD3gE3VF.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, Layers, Loader2, Pencil, Plus, Trash2, Upload, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
//#region src/routes/admin.domains.tsx?tsr-split=component
function DomainsAdmin() {
	const [view, setView] = useState({ type: "domains" });
	const [domains, setDomains] = useState([]);
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [domainModalOpen, setDomainModalOpen] = useState(false);
	const [selectedDomain, setSelectedDomain] = useState(null);
	const [projectModalOpen, setProjectModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);
	const loadDomains = async () => {
		setLoading(true);
		try {
			setDomains((await API.get("/api/domains")).data);
		} catch (err) {
			console.error("Failed to load domains:", err);
		} finally {
			setLoading(false);
		}
	};
	const loadProjects = async (domainId) => {
		setLoading(true);
		try {
			setProjects((await API.get(`/api/domains/${domainId}/projects`)).data);
		} catch (err) {
			console.error("Failed to load projects:", err);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		if (view.type === "domains") loadDomains();
		else loadProjects(view.domain.id);
	}, [view]);
	const handleDeleteDomain = async (id, count) => {
		if (count > 0) return alert("Delete all Projects before deleting this Domain.");
		if (!confirm("Are you sure you want to delete this domain category?")) return;
		try {
			await API.delete(`/api/admin/domains/${id}`);
			loadDomains();
			await fetchDomains();
		} catch (err) {
			alert("Failed to delete domain: " + (err.response?.data?.error || err.message));
		}
	};
	const handleDeleteProject = async (id) => {
		if (!confirm("Are you sure you want to delete this project bundle?")) return;
		try {
			await API.delete(`/api/admin/projects/${id}`);
			if (view.type === "projects") loadProjects(view.domain.id);
		} catch (err) {
			alert("Failed to delete project: " + (err.response?.data?.error || err.message));
		}
	};
	return /* @__PURE__ */ jsxs(AdminShell, {
		title: view.type === "domains" ? "Domains" : `Projects: ${view.domain.name}`,
		children: [
			view.type === "domains" ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between mb-6 flex-wrap gap-3",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "font-serif text-3xl mb-1 text-left",
					children: "Manage Domains"
				}), /* @__PURE__ */ jsx("p", {
					className: "text-muted-foreground text-sm text-left",
					children: "Create and edit your primary academic domain categories."
				})] }), /* @__PURE__ */ jsxs("button", {
					onClick: () => {
						setSelectedDomain(null);
						setDomainModalOpen(true);
					},
					className: "inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md",
					children: [/* @__PURE__ */ jsx(Plus, { className: "size-4" }), " New Domain"]
				})]
			}), loading ? /* @__PURE__ */ jsx("div", {
				className: "text-center py-12 text-muted-foreground font-mono",
				children: "Loading domains..."
			}) : /* @__PURE__ */ jsxs("div", {
				className: "border border-border bg-card rounded-md overflow-hidden",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-12 px-6 py-3 border-b border-border font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-left",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "col-span-6",
								children: "Domain"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-span-3",
								children: "Project Count"
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-span-3 text-right",
								children: "Actions"
							})
						]
					}),
					domains.map((d) => /* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-12 px-6 py-4 border-b border-border last:border-0 items-center hover:bg-accent/30 text-left",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-6 min-w-0",
								children: [/* @__PURE__ */ jsx("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: /* @__PURE__ */ jsx("div", {
										className: "font-medium truncate",
										children: d.name
									})
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground truncate",
									children: d.description
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "col-span-3",
								children: /* @__PURE__ */ jsxs("span", {
									className: "font-mono text-xs px-2 py-1 rounded bg-secondary/80 text-foreground font-semibold",
									children: [
										d.count,
										" ",
										d.count === 1 ? "Project" : "Projects"
									]
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "col-span-3 flex justify-end gap-2 items-center",
								children: [
									/* @__PURE__ */ jsxs("button", {
										onClick: () => setView({
											type: "projects",
											domain: d
										}),
										className: "inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-foreground hover:bg-secondary text-[10px] uppercase font-mono tracking-wider rounded",
										children: [/* @__PURE__ */ jsx(Layers, { className: "size-3" }), " Manage Projects"]
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => {
											setSelectedDomain(d);
											setDomainModalOpen(true);
										},
										className: "size-8 grid place-items-center rounded-md hover:bg-accent text-muted-foreground",
										title: "Edit Domain",
										children: /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" })
									}),
									/* @__PURE__ */ jsx("button", {
										onClick: () => handleDeleteDomain(d.id, d.count),
										className: "size-8 grid place-items-center rounded-md hover:bg-destructive/10 text-destructive",
										title: "Delete Domain",
										children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
									})
								]
							})
						]
					}, d.id)),
					domains.length === 0 && /* @__PURE__ */ jsx("div", {
						className: "text-center py-12 text-muted-foreground font-mono",
						children: "No domain categories created yet."
					})
				]
			})] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
				/* @__PURE__ */ jsx("div", {
					className: "mb-4",
					children: /* @__PURE__ */ jsxs("button", {
						onClick: () => setView({ type: "domains" }),
						className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-mono uppercase tracking-wider mb-2 transition-colors",
						children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "size-4" }), " Back to Domains"]
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-between mb-6 flex-wrap gap-3",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h1", {
						className: "font-serif text-3xl mb-1 text-left",
						children: [
							"Projects inside \"",
							view.domain.name,
							"\""
						]
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground text-sm text-left",
						children: "Manage project details, difficulty levels, prices, and package files."
					})] }), /* @__PURE__ */ jsxs("button", {
						onClick: () => {
							setSelectedProject(null);
							setProjectModalOpen(true);
						},
						className: "inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md",
						children: [/* @__PURE__ */ jsx(Plus, { className: "size-4" }), " New Project"]
					})]
				}),
				loading ? /* @__PURE__ */ jsx("div", {
					className: "text-center py-12 text-muted-foreground font-mono",
					children: "Loading projects..."
				}) : /* @__PURE__ */ jsxs("div", {
					className: "border border-border bg-card rounded-md overflow-hidden",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-12 px-6 py-3 border-b border-border font-mono text-[10px] uppercase tracking-widest text-muted-foreground text-left",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "col-span-5",
									children: "Project Name"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-2",
									children: "Difficulty"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-2",
									children: "Price"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-1",
									children: "Files"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-2 text-right",
									children: "Actions"
								})
							]
						}),
						projects.map((p) => /* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-12 px-6 py-4 border-b border-border last:border-0 items-center hover:bg-accent/30 text-left",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "col-span-5 min-w-0",
									children: [/* @__PURE__ */ jsx("div", {
										className: "font-medium truncate",
										children: p.projectName
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs text-muted-foreground truncate",
										children: p.description
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "col-span-2",
									children: /* @__PURE__ */ jsx("span", {
										className: "font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border",
										children: p.difficulty
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-span-2 font-medium",
									children: ["₹", p.price.toLocaleString("en-IN")]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-span-1 font-mono text-xs",
									children: [(p.filesList || p.files || []).length, " files"]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "col-span-2 flex justify-end gap-2 items-center",
									children: [/* @__PURE__ */ jsx("button", {
										onClick: () => {
											setSelectedProject(p);
											setProjectModalOpen(true);
										},
										className: "size-8 grid place-items-center rounded-md hover:bg-accent text-muted-foreground",
										title: "Edit Project & Files",
										children: /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" })
									}), /* @__PURE__ */ jsx("button", {
										onClick: () => handleDeleteProject(p.id),
										className: "size-8 grid place-items-center rounded-md hover:bg-destructive/10 text-destructive",
										title: "Delete Project",
										children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
									})]
								})
							]
						}, p.id)),
						projects.length === 0 && /* @__PURE__ */ jsx("div", {
							className: "text-center py-12 text-muted-foreground font-mono",
							children: "No projects created in this domain category yet."
						})
					]
				})
			] }),
			/* @__PURE__ */ jsx(AnimatePresence, { children: domainModalOpen && /* @__PURE__ */ jsx(DomainCategoryModal, {
				domain: selectedDomain,
				onClose: () => setDomainModalOpen(false),
				onSuccess: () => {
					setDomainModalOpen(false);
					loadDomains();
					fetchDomains();
				}
			}) }),
			/* @__PURE__ */ jsx(AnimatePresence, { children: projectModalOpen && /* @__PURE__ */ jsx(ProjectBundleModal, {
				project: selectedProject,
				domainId: view.type === "projects" ? view.domain.id : "",
				onClose: () => setProjectModalOpen(false),
				onSuccess: () => {
					setProjectModalOpen(false);
					if (view.type === "projects") loadProjects(view.domain.id);
				}
			}) })
		]
	});
}
function DomainCategoryModal({ domain, onClose, onSuccess }) {
	const [name, setName] = useState(domain?.name || "");
	const categoryName = "General";
	const [description, setDescription] = useState(domain?.description || "");
	const [thumbnail, setThumbnail] = useState(null);
	const [loading, setLoading] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!name.trim()) return alert("Domain name is required");
		setLoading(true);
		const fd = new FormData();
		fd.append("name", name);
		fd.append("categoryName", categoryName);
		fd.append("categoryId", categoryName);
		fd.append("description", description);
		if (thumbnail) fd.append("thumbnail", thumbnail);
		try {
			if (domain) await API.put(`/api/admin/domains/${domain.id}`, fd, { headers: { "Content-Type": "multipart/form-data" } });
			else await API.post("/api/admin/domains", fd, { headers: { "Content-Type": "multipart/form-data" } });
			onSuccess();
		} catch (err) {
			console.error(err);
			alert("Failed to save domain: " + (err.response?.data?.error || err.message));
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm grid place-items-center p-4",
		onClick: onClose,
		children: /* @__PURE__ */ jsx(motion.div, {
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
			className: "w-full max-w-md bg-card border border-border rounded-md shadow-2xl overflow-hidden",
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between p-6 border-b border-border",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "text-left",
							children: [/* @__PURE__ */ jsx("div", {
								className: "font-mono text-[10px] uppercase tracking-widest text-primary",
								children: "Category Manager"
							}), /* @__PURE__ */ jsx("h3", {
								className: "font-serif text-2xl",
								children: domain ? "Edit Domain Category" : "Create Domain Category"
							})]
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "grid size-8 place-items-center rounded-full hover:bg-accent",
							children: /* @__PURE__ */ jsx(X, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 space-y-4 text-left",
						children: [
							/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Domain Name *"
								}), /* @__PURE__ */ jsx("input", {
									required: true,
									type: "text",
									value: name,
									onChange: (e) => setName(e.target.value),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Description"
								}), /* @__PURE__ */ jsx("textarea", {
									value: description,
									onChange: (e) => setDescription(e.target.value),
									className: "w-full min-h-[80px] p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40 text-sm"
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Thumbnail Image"
								}), /* @__PURE__ */ jsx("input", {
									type: "file",
									accept: ".png,.jpg,.jpeg,.webp",
									onChange: (e) => {
										setThumbnail(e.target.files?.[0] || null);
									},
									className: "w-full text-xs font-mono file:h-9 file:px-3 file:mr-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 cursor-pointer"
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-t border-border flex justify-end gap-3",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-md hover:bg-accent",
							children: "Cancel"
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: loading,
							className: "px-5 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md disabled:opacity-60",
							children: loading ? "Saving..." : domain ? "Save Changes" : "Create"
						})]
					})
				]
			})
		})
	});
}
var AVAILABLE_RESOURCES = [
	"Source Code (ZIP)",
	"Project Report (PDF)",
	"Presentation (PPTX)",
	"Project Abstract (PDF)",
	"Viva Questions (PDF)",
	"README (TXT)",
	"Mini Project File",
	"IEEE Paper Document",
	"Lab Setup Guide"
];
function ProjectBundleModal({ project, domainId, onClose, onSuccess }) {
	const [form, setForm] = useState({
		projectName: project?.projectName || project?.title || "",
		description: project?.description || "",
		price: project?.price?.toString() || "0",
		difficulty: project?.difficulty || "Medium",
		technologies: project?.technologies?.join(", ") || ""
	});
	const [resourcesIncluded, setResourcesIncluded] = useState(project?.resourcesIncluded || []);
	const [thumbnail, setThumbnail] = useState(null);
	const [loading, setLoading] = useState(false);
	const [files, setFiles] = useState(project?.filesList || project?.files || []);
	const [uploadingFile, setUploadingFile] = useState(false);
	const [uploadStatus, setUploadStatus] = useState({ status: "idle" });
	const formatBytes = (bytes) => {
		if (bytes <= 0 || isNaN(bytes)) return "0 B";
		const k = 1024;
		const sizes = [
			"B",
			"KB",
			"MB",
			"GB"
		];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
	};
	const refreshFiles = async () => {
		if (!project) return;
		try {
			const res = await API.get(`/api/projects/${project.id}`);
			if (res.data && res.data.filesList) setFiles(res.data.filesList);
		} catch (err) {
			console.error("Failed to refresh files list:", err);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!form.projectName.trim()) return alert("Project Name is required");
		setLoading(true);
		const fd = new FormData();
		fd.append("projectName", form.projectName);
		fd.append("title", form.projectName);
		fd.append("description", form.description);
		fd.append("price", form.price);
		fd.append("difficulty", form.difficulty);
		fd.append("technologies", form.technologies);
		if (domainId) {
			fd.append("domainId", domainId);
			fd.append("category_id", domainId);
		}
		if (thumbnail) fd.append("thumbnail", thumbnail);
		resourcesIncluded.forEach((res) => {
			fd.append("resourcesIncluded", res);
		});
		try {
			if (project) await API.put(`/api/admin/projects/${project.id}`, fd, { headers: { "Content-Type": "multipart/form-data" } });
			else await API.post("/api/admin/projects", fd, { headers: { "Content-Type": "multipart/form-data" } });
			onSuccess();
		} catch (err) {
			console.error(err);
			alert("Failed to save project: " + (err.response?.data?.error || err.message));
		} finally {
			setLoading(false);
		}
	};
	return /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto",
		onClick: onClose,
		children: /* @__PURE__ */ jsx(motion.div, {
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
			className: "w-full max-w-lg bg-card border border-border rounded-md shadow-2xl my-8 text-left",
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between p-6 border-b border-border",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
							className: "font-mono text-[10px] uppercase tracking-widest text-primary",
							children: "Project Bundle Manager"
						}), /* @__PURE__ */ jsx("h3", {
							className: "font-serif text-2xl",
							children: project ? "Edit Project Bundle" : "Create Project Bundle"
						})] }), /* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "grid size-8 place-items-center rounded-full hover:bg-accent",
							children: /* @__PURE__ */ jsx(X, { className: "size-4" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 space-y-4 max-h-[60vh] overflow-y-auto",
						children: [
							/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Project Name *"
								}), /* @__PURE__ */ jsx("input", {
									required: true,
									type: "text",
									value: form.projectName,
									onChange: (e) => setForm({
										...form,
										projectName: e.target.value
									}),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Short Description"
								}), /* @__PURE__ */ jsx("textarea", {
									value: form.description,
									onChange: (e) => setForm({
										...form,
										description: e.target.value
									}),
									className: "w-full min-h-[80px] p-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40 text-sm"
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Price (INR)"
								}), /* @__PURE__ */ jsx("input", {
									type: "number",
									value: form.price,
									onChange: (e) => setForm({
										...form,
										price: e.target.value
									}),
									className: "w-full h-11 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring/40"
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Resources checklist"
								}), /* @__PURE__ */ jsx("div", {
									className: "grid grid-cols-2 gap-x-4 gap-y-2 border border-border rounded-md p-4 bg-background max-h-[140px] overflow-y-auto",
									children: AVAILABLE_RESOURCES.map((res) => {
										return /* @__PURE__ */ jsxs("label", {
											className: "flex items-center gap-2 text-sm cursor-pointer select-none",
											children: [/* @__PURE__ */ jsx("input", {
												type: "checkbox",
												checked: resourcesIncluded.includes(res),
												onChange: (e) => {
													if (e.target.checked) setResourcesIncluded([...resourcesIncluded, res]);
													else setResourcesIncluded(resourcesIncluded.filter((r) => r !== res));
												},
												className: "size-4 rounded border border-input text-primary focus:ring-ring"
											}), /* @__PURE__ */ jsx("span", { children: res })]
										}, res);
									})
								})]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "block",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5",
									children: "Project Thumbnail Image"
								}), /* @__PURE__ */ jsx("input", {
									type: "file",
									accept: ".png,.jpg,.jpeg,.webp",
									onChange: (e) => {
										setThumbnail(e.target.files?.[0] || null);
									},
									className: "w-full text-xs font-mono file:h-9 file:px-3 file:mr-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground hover:file:opacity-90 cursor-pointer"
								})]
							}),
							project && /* @__PURE__ */ jsxs("div", {
								className: "border-t border-border pt-6 mt-6",
								children: [
									/* @__PURE__ */ jsxs("div", {
										className: "flex justify-between items-center mb-4",
										children: [
											/* @__PURE__ */ jsxs("h4", {
												className: "font-serif text-lg",
												children: [
													"Project Files (",
													files.length,
													")"
												]
											}),
											/* @__PURE__ */ jsxs("label", {
												htmlFor: "project-file-upload-input",
												className: "cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-sm hover:opacity-90",
												children: [uploadingFile ? /* @__PURE__ */ jsx(Loader2, { className: "size-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Plus, { className: "size-3.5" }), "Upload Resource"]
											}),
											/* @__PURE__ */ jsx("input", {
												id: "project-file-upload-input",
												type: "file",
												disabled: uploadingFile,
												accept: ".pdf,.zip,.ppt,.pptx,.doc,.docx",
												className: "sr-only",
												onChange: async (e) => {
													const file = e.target.files?.[0];
													if (!file) return;
													setUploadingFile(true);
													setUploadStatus({
														fileName: file.name,
														fileSize: formatBytes(file.size),
														status: "uploading",
														message: "Uploading..."
													});
													const fd = new FormData();
													fd.append("file", file);
													try {
														await API.post(`/api/admin/projects/${project.id}/files`, fd, { headers: { "Content-Type": "multipart/form-data" } });
														setUploadStatus({
															fileName: file.name,
															fileSize: formatBytes(file.size),
															status: "success",
															message: "Upload Successful"
														});
														await refreshFiles();
														setTimeout(() => setUploadStatus({ status: "idle" }), 3e3);
													} catch (err) {
														const errMsg = err.response?.data?.error || err.message || "Upload Failed";
														setUploadStatus({
															fileName: file.name,
															fileSize: formatBytes(file.size),
															status: "error",
															message: errMsg
														});
													} finally {
														setUploadingFile(false);
														e.target.value = "";
													}
												}
											})
										]
									}),
									uploadStatus.status !== "idle" && /* @__PURE__ */ jsxs("div", {
										className: `mb-4 p-3 border rounded-md font-mono text-xs ${uploadStatus.status === "uploading" ? "bg-accent/40 border-accent text-accent-foreground animate-pulse" : uploadStatus.status === "success" ? "bg-primary/10 border-primary text-primary" : "bg-destructive/10 border-destructive text-destructive"}`,
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex justify-between font-semibold mb-1",
											children: [/* @__PURE__ */ jsx("span", {
												className: "truncate max-w-[70%]",
												children: uploadStatus.fileName
											}), /* @__PURE__ */ jsx("span", { children: uploadStatus.fileSize })]
										}), /* @__PURE__ */ jsx("div", {
											className: "text-[10px] text-muted-foreground mt-1 text-right font-bold uppercase",
											children: uploadStatus.message
										})]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2 max-h-[180px] overflow-y-auto",
										children: [files.map((file) => /* @__PURE__ */ jsxs("div", {
											className: "flex items-center justify-between p-3 bg-secondary rounded border border-border",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "min-w-0 flex-1 mr-4",
												children: [/* @__PURE__ */ jsx("div", {
													className: "text-sm font-mono truncate",
													children: file.name
												}), /* @__PURE__ */ jsxs("div", {
													className: "text-[10px] font-mono text-muted-foreground uppercase",
													children: [
														file.type,
														" · ",
														file.size
													]
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex items-center gap-1 shrink-0",
												children: [
													/* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: async () => {
															const newName = prompt("Enter new name for the file:", file.name);
															if (!newName || newName.trim() === "") return;
															try {
																await API.put(`/api/admin/projects/${project.id}/files/${file.filename}`, { name: newName.trim() });
																await refreshFiles();
															} catch (err) {
																alert("Rename failed: " + (err.response?.data?.error || err.message));
															}
														},
														className: "size-8 grid place-items-center rounded hover:bg-accent text-muted-foreground",
														children: /* @__PURE__ */ jsx(Pencil, { className: "size-3.5" })
													}),
													/* @__PURE__ */ jsx("label", {
														htmlFor: `replace-file-input-${file.filename}`,
														className: "size-8 grid place-items-center rounded hover:bg-accent text-muted-foreground cursor-pointer",
														children: /* @__PURE__ */ jsx(Upload, { className: "size-3.5" })
													}),
													/* @__PURE__ */ jsx("input", {
														id: `replace-file-input-${file.filename}`,
														type: "file",
														accept: ".pdf,.zip,.ppt,.pptx,.doc,.docx",
														className: "sr-only",
														onChange: async (e) => {
															const newFile = e.target.files?.[0];
															if (!newFile) return;
															setUploadStatus({
																fileName: newFile.name,
																fileSize: formatBytes(newFile.size),
																status: "uploading",
																message: "Replacing..."
															});
															const fd = new FormData();
															fd.append("file", newFile);
															try {
																await API.put(`/api/admin/projects/${project.id}/files/${file.filename}`, fd, { headers: { "Content-Type": "multipart/form-data" } });
																setUploadStatus({
																	fileName: newFile.name,
																	fileSize: formatBytes(newFile.size),
																	status: "success",
																	message: "Replace Successful"
																});
																await refreshFiles();
																setTimeout(() => setUploadStatus({ status: "idle" }), 3e3);
															} catch (err) {
																const errMsg = err.response?.data?.error || err.message || "Replace Failed";
																setUploadStatus({
																	fileName: newFile.name,
																	fileSize: formatBytes(newFile.size),
																	status: "error",
																	message: errMsg
																});
															} finally {
																e.target.value = "";
															}
														}
													}),
													/* @__PURE__ */ jsx("button", {
														type: "button",
														onClick: async () => {
															if (!confirm("Are you sure you want to delete this file?")) return;
															try {
																await API.delete(`/api/admin/projects/${project.id}/files/${file.filename}`);
																await refreshFiles();
															} catch (err) {
																alert("Delete failed: " + (err.response?.data?.error || err.message));
															}
														},
														className: "size-8 grid place-items-center rounded hover:bg-destructive/10 text-destructive",
														children: /* @__PURE__ */ jsx(Trash2, { className: "size-3.5" })
													})
												]
											})]
										}, file.filename)), files.length === 0 && /* @__PURE__ */ jsx("div", {
											className: "text-center py-6 text-muted-foreground text-xs font-mono border border-dashed border-border rounded",
											children: "No files uploaded to this project yet."
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-t border-border flex justify-end gap-3",
						children: [/* @__PURE__ */ jsx("button", {
							type: "button",
							onClick: onClose,
							className: "px-4 py-2 text-xs font-mono uppercase tracking-widest rounded-md hover:bg-accent",
							children: "Cancel"
						}), /* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: loading,
							className: "px-5 py-2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest rounded-md disabled:opacity-60",
							children: loading ? "Saving..." : project ? "Save Changes" : "Create"
						})]
					})
				]
			})
		})
	});
}
//#endregion
export { DomainsAdmin as component };
