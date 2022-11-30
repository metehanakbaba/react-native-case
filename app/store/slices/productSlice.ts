import { createSlice } from '@reduxjs/toolkit';
import { IPayload, IProduct } from '../types';
import { RootState } from '../index';

const initialState: IPayload<IProduct> = {
  data: [],
  status: 'idle',
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    getProducts: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const selectProducts = (state: RootState) => state.products;

export const productReducer = productsSlice.reducer;
export const { setProducts, getProducts } = productsSlice.actions;
