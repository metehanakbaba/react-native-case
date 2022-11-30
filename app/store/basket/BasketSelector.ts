import { IApplicationState } from '../index';

export const getBasketSelector = (state: IApplicationState) => {
  const { basket } = state.basketState;
  return basket.datas;
};

export const getBasketCountSelector = (state: IApplicationState) => {
  const { basket } = state.basketState;
  let count = 0;
  if (basket.datas && basket.datas.length > 0) {
    count = basket.datas.length;
  }
  return count;
};
