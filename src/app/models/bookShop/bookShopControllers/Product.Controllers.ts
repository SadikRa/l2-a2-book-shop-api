import { Request, Response } from 'express';
import { ProductServices } from '../bookShopServices/Product.Services';

///create a book
const createBook = async (req: Request, res: Response) => {
  try {
    // console.log('book request', req.body);
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

/// get all book
const GetAllBook = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllBooksFromDB();

    res.status(200).json({
      message: 'Books retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

//get a book
const GetABook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.getABookFromDB(productId);

    res.status(200).json({
      message: 'A Book retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

// update a book
const UpdateABook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const book = req.body;
    const result = await ProductServices.UpdateABook(productId, book);

    res.status(200).json({
      message: 'A Book Update successfully',
      status: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};

//delete a book
const deleteABook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteABook(productId);

    res.status(200).json({
      message: 'Book deleted successfully',
      status: true,
      result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const productControllers = {
  createBook,
  GetAllBook,
  GetABook,
  UpdateABook,
  deleteABook,
};
