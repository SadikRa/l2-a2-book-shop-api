import express from 'express';
import { productControllers } from '../bookShopControllers/Product.Controllers';

const router = express.Router();

router.post('/products', productControllers.createBook);

router.get('/products', productControllers.GetAllBook);

router.get('/products/:productId', productControllers.GetABook);

export const ProductRoutes = router;