import { Router } from "express";
import { authController } from "./auth.controller";

const authRoute = Router()
authRoute.post('/register', authController.register)
authRoute.post('/login', authController.login)
authRoute.post('/refresh-token', authController.refreshToken)

export default authRoute