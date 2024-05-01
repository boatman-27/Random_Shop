import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      state.cart = state.cart.filter((el) => el.id !== item.id);
      state.totalAmount -= item.price;
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.totalItemPrice = item.quantity * item.price;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      item.totalItemPrice = item.quantity * item.price;
      if (item.quantity === 0) {
        return cartSlice.caseReducers.removeItem(state, action);
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getCart = (state) => state.cart.cart;
export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((acc, el) => acc + el.quantity, 0);
export const getTotalAmount = (state) =>
  state.cart.cart.reduce((acc, el) => acc + el.totalItemPrice, 0);
export const getCurrentQuantity = (id) => (state) => {
  const cartItem = state.cart.cart.find((item) => item.id === id);
  return cartItem ? cartItem.quantity : 0;
};

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
