import { IPayload } from '../shared/SharedTypes';
import { IProduct } from '../product/ProductTypes';

export interface IBasket {
  id: number;
  item: IProduct;
  quantity: number;
}

export enum BasketActionTypes {
  ADD_BASKET_REQUEST = '@@BASKET/ADD_BASKET_REQUEST',
  ADD_BASKET_ERROR = '@@BASKET/ADD_BASKET_ERROR',

  REMOVE_BASKET_REQUEST = '@@BASKET/REMOVE_BASKET_REQUEST',
}

/**
 * Basket state
 */
export interface BasketState {
  readonly basket: IPayload<IBasket>;
}
