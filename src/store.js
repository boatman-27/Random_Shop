import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Features/user/userSlice";
import cartSlice from "./Features/cart/cartSlice";
import orderSlice from "./Features/order/orderSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    order: orderSlice,
  },
});

export default store;
