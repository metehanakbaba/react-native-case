import { Reducer } from 'redux';
import { BasketState, BasketActionTypes } from './BasketType';
import { IProduct } from '../product/ProductTypes';

// Type-safe initialState!
export const initialState: BasketState = {
  basket: {
    data: undefined,
    datas: [],
    loading: false,
    error: undefined,
  },
};

const reducer: Reducer<BasketState> = (state = initialState, action) => {
  switch (action.type) {
    case BasketActionTypes.ADD_BASKET_REQUEST: {
      const product = action.payload as IProduct;
      const newItems = state.basket.datas;
      newItems?.unshift({
        id: product.id,
        item: product,
        quantity: 1,
      });
      return {
        ...state,
        basket: {
          loading: false,
          error: undefined,
          datas: newItems,
        },
      };
    }

    case BasketActionTypes.ADD_BASKET_ERROR: {
      return {
        ...state,
        basket: {
          loading: false,
          datas: [],
          error: action.payload,
        },
      };
    }

    case BasketActionTypes.REMOVE_BASKET_REQUEST: {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      let newItems = [...state.basket.datas!];

      if (newItems.length) {
        // prevent any possible error
        newItems = newItems.filter(x => x.id !== action.payload);
      }

      return {
        ...state,
        basket: {
          loading: false,
          error: undefined,
          datas: newItems,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as BasketReducers };
