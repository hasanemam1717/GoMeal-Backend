import { Router } from "express";
import authRoute from "../modules/auth/auth.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import orderRouter from "../modules/order/order.route";

const router = Router();

const modelRouters = [
    {
        path: "/auth",
        route: authRoute
    },
    {
        path: "/admin",
        route: AdminRoutes
    }, {
        path: "/order",
        route: orderRouter
    },
]

modelRouters.forEach((route) => router.use(route.path, route.route))


export default router;