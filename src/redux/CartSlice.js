// src/redux/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const existingProduct = state.find(item => item.id === action.payload);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          return state.filter(item => item.id !== action.payload);
        }
      }
    },
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
