import { P as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as getDomainBySlug } from "./data-DheW3zCV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/domains._slug-CHLnMC9m.js
var $$splitNotFoundComponentImporter = () => import("./domains._slug-DEb0r935.mjs");
var $$splitComponentImporter = () => import("./domains._slug-BYOJril0.mjs");
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
