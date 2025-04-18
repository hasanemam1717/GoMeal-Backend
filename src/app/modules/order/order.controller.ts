import httpStatus from 'http-status';
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderService } from './order.service';

const createOrder = catchAsync(async (req, res) => {
    // console.log(req.body);
    const order = await orderService.createOrderInDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        message: "Order placed successfully",
        data: order,
    });
});

export const orderController = {
    createOrder,
};