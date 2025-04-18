import { Schema } from "mongoose";



export interface TOrder extends Document {
    mealSelection: string;
    dietaryPreferences: string[];
    customerId: Schema.Types.ObjectId;
    status: 'pending' | 'in progress' | 'delivered';
    createdAt?: Date;
    updatedAt?: Date;
}
