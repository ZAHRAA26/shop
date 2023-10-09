import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./toggleCart";
import productReducer from "./product";
export const store = configureStore({
  reducer: { cart: cartReducer, product: productReducer },
});
