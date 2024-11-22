import { Request, Response } from 'express';
import { ProductServices } from '../bookShopServices/Product.Services';

///create a book
const createBook = async (req: Request, res: Response) => {
  try {
    console.log('book request', req.body);
    const productData = req.body;
    const result = await ProductServices.createBookIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Book created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const productControllers = {
  createBook,
};
