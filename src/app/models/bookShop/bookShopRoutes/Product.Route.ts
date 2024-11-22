import express from 'express';
import { productControllers } from '../bookShopControllers/Product.Controllers';

const router = express.Router();

router.post('/products', productControllers.createBook);

router.get('/', );

export const ProductRoutes = router;