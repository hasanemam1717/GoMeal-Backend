import mongoose, { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";


const orderSchema = new Schema<TOrder>({
    mealSelection: {
        type: String,
        required: true,
    },
    dietaryPreferences: {
        type: [String], // Array of dietary preferences
        default: [],
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to a Customer document
        ref: 'Customer',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'delivered'],
        default: 'pending',
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});


export const orderModel = model<TOrder>('Order', orderSchema);
