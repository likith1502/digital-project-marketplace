import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
//#region src/routes/payment-cancelled.tsx
var $$splitComponentImporter = () => import("./payment-cancelled-BYZUO5BU.js");
var searchSchema = z.object({ domain: z.string().optional() });
var Route = createFileRoute("/payment-cancelled")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Payment Cancelled — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
