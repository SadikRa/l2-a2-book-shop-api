import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  res.send('hElLo SaDik');
};

app.get('/', getAController);

export default app;
