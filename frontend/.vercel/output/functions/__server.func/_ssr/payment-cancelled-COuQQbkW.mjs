import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-cancelled-COuQQbkW.js
var $$splitComponentImporter = () => import("./payment-cancelled-BYZUO5BU.mjs");
var searchSchema = objectType({ domain: stringType().optional() });
var Route = createFileRoute("/payment-cancelled")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Payment Cancelled — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
