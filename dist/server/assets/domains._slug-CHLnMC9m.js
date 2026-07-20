import { l as getDomainBySlug } from "./data-DheW3zCV.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/domains.$slug.tsx
var $$splitNotFoundComponentImporter = () => import("./domains._slug-DEb0r935.js");
var $$splitComponentImporter = () => import("./domains._slug-BYOJril0.js");
var Route = createFileRoute("/domains/$slug")({
	loader: async ({ params }) => {
		const d = await getDomainBySlug(params.slug);
		if (!d) throw notFound();
		return d;
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.name ?? "Domain Category"} — ProjectHub` }, {
		name: "description",
		content: loaderData?.description ?? ""
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
