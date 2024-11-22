import { Product } from '../bookShopInterface/Product.Interface';
import { ProductModel } from '../bookShopModel/Product.Model';

// create a book
const createBookIntoDB = async (book: Product) => {
  const result = await ProductModel.create(book);
  return result;
};

export const ProductServices = {
  createBookIntoDB,
};
