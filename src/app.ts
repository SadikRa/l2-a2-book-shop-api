import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './app/models/bookShop/bookShopRoutes/Product.Route';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api', ProductRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('hElLo SaDik');
};

app.get('/', getAController);

export default app;
