import { Router } from "express";
import authRoute from "../modules/auth/auth.route";

const router = Router();

const modelRouters = [
    {
        path: "/auth",
        route: authRoute
    }
]

modelRouters.forEach((route) => router.use(route.path, route.route))


export default router;