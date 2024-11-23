import express from 'express';
import { OrderControllers } from '../bookShopControllers/Order.Controllers';

const router = express.Router();

//order a book 
router.post('/orders', OrderControllers.OrderABook);


export const OrderRoutes = router;