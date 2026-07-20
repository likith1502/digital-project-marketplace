import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
//#region src/routes/payment-failed.tsx
var $$splitComponentImporter = () => import("./payment-failed-CsfrnhPq.js");
var searchSchema = z.object({ domain: z.string().optional() });
var Route = createFileRoute("/payment-failed")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Payment Failed — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
