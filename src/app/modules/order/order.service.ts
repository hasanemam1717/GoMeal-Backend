import { orderModel } from './order.model';
import { Types } from 'mongoose';

interface CreateOrderInput {
    mealSelection: string;
    dietaryPreferences?: string[];
    customerId: string | Types.ObjectId;
    status?: 'pending' | 'in progress' | 'delivered';
}

const createOrderInDB = async (payload: CreateOrderInput) => {
    const {
        mealSelection,
        dietaryPreferences = [],
        customerId,
        status = 'pending',
    } = payload;

    const newOrder = await orderModel.create({
        mealSelection,
        dietaryPreferences,
        customerId,
        status,
    });

    return newOrder;
};

export const orderService = {
    createOrderInDB,
};
