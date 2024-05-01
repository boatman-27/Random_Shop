import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder(state, action) {
      state.order = action.payload;
    },
    clearOrder(state) {
      state.order = null;
    },
    finalizeOrder(state) {
      state.order.orderFinalised = !state.order.orderFinalised;
    },
    confirmDelivery(state) {
      state.order.orderDelivered = !state.order.orderDelivered;
    },
  },
});

export const { setOrder, clearOrder, finalizeOrder, confirmDelivery } =
  orderSlice.actions;
export const getOrder = (state) => state.order.order;
export default orderSlice.reducer;
