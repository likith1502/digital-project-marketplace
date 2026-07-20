import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as getProjectById } from "./data-DheW3zCV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._id-Y7JYZuMA.js
var $$splitNotFoundComponentImporter = () => import("./projects._id-BFzlVzjb.mjs");
var $$splitComponentImporter = () => import("./projects._id-CfDIInCI.mjs");
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
