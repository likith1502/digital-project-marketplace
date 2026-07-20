import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-success-CQ9OEjab.js
var $$splitComponentImporter = () => import("./payment-success-Zbf2oEZY.mjs");
var searchSchema = objectType({
	txn: stringType().optional(),
	domain: stringType().optional()
});
var Route = createFileRoute("/payment-success")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Payment Successful — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
