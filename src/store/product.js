import { createSlice } from "@reduxjs/toolkit";
const product = createSlice({
  name: "product",
  initialState: { numberOfProducts: 0, products: [], totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.products.push({
          id: newItem.id,
          price: newItem.price,
          title: newItem.title,
          totalPrice: newItem.price,
          quantity: 1,
          // quantity: newItem.quantity,
          // totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += existingItem.price;
      }
      state.numberOfProducts++;
      state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => (item.id = action.payload)
      );
      state.numberOfProducts--;
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((p) => p.id !== existingItem.id);
        existingItem.totalPrice -= existingItem.price;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalPrice -= existingItem.price;
    },
  },
});
export default product.reducer;
export const { addToCart, removeFromCart } = product.actions;
