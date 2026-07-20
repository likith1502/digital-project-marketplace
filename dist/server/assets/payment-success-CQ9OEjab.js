import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { z } from "zod";
//#region src/routes/payment-success.tsx
var $$splitComponentImporter = () => import("./payment-success-Zbf2oEZY.js");
var searchSchema = z.object({
	txn: z.string().optional(),
	domain: z.string().optional()
});
var Route = createFileRoute("/payment-success")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Payment Successful — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
