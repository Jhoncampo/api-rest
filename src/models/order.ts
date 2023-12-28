import { Schema, model, Model, Types } from "mongoose";
import { Order } from "../interfaces/order";

const OrderSchema = new Schema<Order>(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OrderModel = model("orders", OrderSchema);

export default OrderModel;
