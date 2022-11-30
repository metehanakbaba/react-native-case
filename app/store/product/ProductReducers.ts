import { Reducer } from 'redux';
import { ProductState, ProductActionTypes, IProduct } from './ProductTypes';

// Type-safe initialState!
export const initialState: ProductState = {
  products: {
    data: undefined,
    datas: [],
    error: undefined,
    loading: false,
  },
};

const reducer: Reducer<ProductState> = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_ALL_REQUEST: {
      return {
        ...state,
        products: { loading: true, datas: [], error: undefined },
      };
    }

    case ProductActionTypes.FETCH_ALL_SUCCESS: {
      return {
        ...state,
        products: { loading: false, datas: action.payload as IProduct[] },
      };
    }

    case ProductActionTypes.FETCH_ALL_ERROR: {
      return {
        ...state,
        products: {
          loading: false,
          datas: [],
          error: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer as ProductReducers };
