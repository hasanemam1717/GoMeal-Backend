/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from "http-status";
import { AdminServices } from "./admin.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const blockUser = catchAsync(async (req, res) => {
    // console.log(req.params.userId);
    const result = await AdminServices.blockUserFromDB(req.params.userId);

    sendResponse(res, {
        data: result,
        statusCode: httpStatus.CREATED,
        message: "This user is blocked successfully",
    });
});
const getAllUser = catchAsync(async (req, res) => {
    // console.log(req.params.userId);
    const result = await AdminServices.getAllUser();

    sendResponse(res, {
        data: result,
        statusCode: httpStatus.CREATED,
        message: "All users are get successfully",
    });
});

const deleteUser = catchAsync(async (req, res) => {
    const result = await AdminServices.deleteUserFromDB(req.params.id);

    sendResponse(res, {
        data: result,
        statusCode: httpStatus.OK,
        message: "User deleted successfully",
    });
});

export const AdminControllers = {
    blockUser,
    deleteUser,
    getAllUser
};