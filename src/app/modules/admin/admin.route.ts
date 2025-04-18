import { Router } from "express";
import { USER_ROLE } from "../user/user.interface";
import { AdminControllers } from "./admin.controller";
import auth from "../../middleware/auth";


const router = Router();
// block a user
router.patch(
    "/user/:userId/block",
    auth(USER_ROLE.admin),
    AdminControllers.blockUser
);

// delete a user
router.delete("/user/:id", auth(USER_ROLE.admin), AdminControllers.deleteUser);
//get all user
router.get("/users", auth(USER_ROLE.admin), AdminControllers.getAllUser);

export const AdminRoutes = router;