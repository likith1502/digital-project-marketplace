import { u as getProjectById } from "./data-DheW3zCV.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/projects.$id.tsx
var $$splitNotFoundComponentImporter = () => import("./projects._id-BFzlVzjb.js");
var $$splitComponentImporter = () => import("./projects._id-CfDIInCI.js");
var Route = createFileRoute("/projects/$id")({
	loader: async ({ params }) => {
		const p = await getProjectById(params.id || params.slug);
		if (!p) throw notFound();
		return p;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.projectName ?? "Project"} — ProjectHub` }, {
		name: "description",
		content: loaderData?.description ?? ""
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
