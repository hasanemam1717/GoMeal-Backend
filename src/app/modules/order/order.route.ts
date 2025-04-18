import express from 'express';
import { orderController } from './order.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.interface';

const orderRouter = express.Router();

orderRouter.post('/create-order', auth(USER_ROLE.user), orderController.createOrder);

export default orderRouter;
