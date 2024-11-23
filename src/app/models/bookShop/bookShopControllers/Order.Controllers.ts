import { Request, Response } from 'express';
import { OrderServices } from '../bookShopServices/Order.Services';
import { orderValidationSchema } from '../validation/orderValidation';

//Order a book
const OrderABook = async (req: Request, res: Response) => {
  try {
    // Validate request body
    const { error } = orderValidationSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        message: 'Validation failed',
        success: false,
        error: error.details.map((error) => error.message),
      });
    }

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

///
const CalculateRevenueOrders = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.CalculateRevenueOrders();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      status: false,
      error,
    });
  }
};

export const OrderControllers = {
  OrderABook,
  CalculateRevenueOrders,
};
