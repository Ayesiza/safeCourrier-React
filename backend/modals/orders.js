import mongoose from "mongoose";
import orderSchema from './schema/orderSchema'
const Order = mongoose.model("orders", orderSchema);

export default Order;