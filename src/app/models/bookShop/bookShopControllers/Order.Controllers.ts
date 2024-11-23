import { Request, Response } from 'express';
import { OrderServices } from '../bookShopServices/Order.Services';

//Order a book
const OrderABook = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await OrderServices.OrderABook(orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong',
    });
  }
};


export const OrderControllers = {
  OrderABook,
};
