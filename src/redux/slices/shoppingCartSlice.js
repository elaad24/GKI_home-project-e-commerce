import { createSlice } from "@reduxjs/toolkit";

export const ShoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    products: [],
  },
  reducers: {
    // add item to shopping cart
    addItem: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    // remove item from shopping cart
    removeItem: (state, action) => {
      let temp = [];
      for (let i = 0; i < state.products.length; i++) {
        if (state.products[i].product.id !== action.payload.product.id) {
          temp.push(state.products[i]);
        }
      }
      state.products = temp;
    },
  },
});

export const { addItem, removeItem } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;
