import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/payment-failed-BLB8D7ND.js
var $$splitComponentImporter = () => import("./payment-failed-CsfrnhPq.mjs");
var searchSchema = objectType({ domain: stringType().optional() });
var Route = createFileRoute("/payment-failed")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Payment Failed — ProjectHub" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
