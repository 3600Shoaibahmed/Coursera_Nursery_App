// src/features/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [
    { id: 1, name: 'Fern', price: 10, image: 'rose.jpg' },
    { id: 2, name: 'Succulent', price: 15, image: 'succulent.jpg' },
    { id: 3, name: 'Cactus', price: 20, image: 'cactus.jpg' },
  ],
  reducers: {},
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;
