import { createSlice } from "@reduxjs/toolkit";
const cart = createSlice({
  name: "cart",
  initialState: { showCart: false },
  reducers: {
    showCart: (state, action) => {
      state.showCart = !state.showCart;
    },
  },
});
export default cart.reducer;
export const showCart = cart.actions.showCart;
