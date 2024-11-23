import { Order } from '../bookShopInterface/Order.Interface';
import { OrderModel } from '../bookShopModel/Order.Model';
import { ProductModel } from '../bookShopModel/Product.Model';

//order a book
const OrderABook = async (order: Order) => {
  const product = await ProductModel.findById(order.product);

  if (!product) {
    throw new Error('Product not found');
  }

  if (product.quantity < order.quantity) {
    throw new Error('Insufficient stock available');
  }

  product.quantity -= order.quantity;
  product.inStock = product.quantity > 0;
  await product.save();

  const result = await OrderModel.create(order);
  return result;
};

export const OrderServices = {
  OrderABook,
};
