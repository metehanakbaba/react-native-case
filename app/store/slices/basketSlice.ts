import { createSlice } from '@reduxjs/toolkit';
import { IBasket, IPayload } from '../types';
import { RootState } from '../index';

const initialState: IPayload<IBasket> = {
  data: [],
  status: 'idle',
  error: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemInBasket = state.data.find(
        item => item.id === action.payload.id,
      );
      if (itemInBasket) {
        itemInBasket.quantity++;
      } else {
        state.data.push({
          id: action.payload.id,
          item: action.payload,
          quantity: 1,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.data.find(_ => _.id === action.payload);
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.data.find(_ => _.id === action.payload);
      if (product) {
        if (product.quantity === 1) {
          product.quantity = 1;
        } else {
          product.quantity--;
        }
      }
    },
    removeItem: (state, action) => {
      const index = state.data.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.data.splice(index, 1);
      }
    },
  },
});
export const selectBasket = (state: RootState) => state.basket.data;

export const basketReducer = basketSlice.reducer;
export const { addToBasket, incrementQuantity, decrementQuantity, removeItem } =
  basketSlice.actions;
