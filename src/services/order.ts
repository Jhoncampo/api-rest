import { Order } from "../interfaces/order";
import OrderModel from "../models/order";

const insertOrder = async (order: Order) => {
  const response = await OrderModel.create(order);
  return response;
};

const getOrders = async () => {
    const response = await OrderModel.find({})
    return response
};

export { insertOrder, getOrders };
