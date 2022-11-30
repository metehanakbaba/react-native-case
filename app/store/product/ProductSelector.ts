import { IApplicationState } from '../index';

export const getProductSelector = (state: IApplicationState) => {
  const { products } = state.productsState;
  return products.datas;
};

export const getProductCountSelector = (state: IApplicationState) => {
  const { products } = state.productsState;
  let count = 0;
  if (products.datas && products.datas.length > 0) {
    count = products.datas.length;
  }
  return count;
};
