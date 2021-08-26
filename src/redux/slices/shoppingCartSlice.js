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
      state.products = state.products.filter(
        (product) => product != action.payload
      );
    },
  },
});

export const { addItem, removeItem } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;

// in front -
// check if item inside a store
// -> in store
// if wanna increase/decrese - calc the amount of total qty , remove the item from
// the store and add the new item with the new qty to store .
// -> not in store
// add item to store
