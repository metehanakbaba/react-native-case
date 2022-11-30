// For more info: https://github.com/piotrwitek/typesafe-actions
import { action } from 'typesafe-actions';
import { BasketActionTypes } from './BasketType';
import { IProduct } from '../product/ProductTypes';

interface IAddBasketRequest {
  type: BasketActionTypes.ADD_BASKET_REQUEST;
  payload: IProduct;
}

interface IAddBasketError {
  type: BasketActionTypes.ADD_BASKET_ERROR;
  payload: string;
}

interface IRemoveBasketRequest {
  type: BasketActionTypes.REMOVE_BASKET_REQUEST;
  payload: number;
}

export const addBasketRequest = (data: IProduct): IAddBasketRequest =>
  action(BasketActionTypes.ADD_BASKET_REQUEST, data);
export const addBasketError = (message: string): IAddBasketError =>
  action(BasketActionTypes.ADD_BASKET_ERROR, message);
export const removeBasketRequest = (id: number): IRemoveBasketRequest =>
  action(BasketActionTypes.REMOVE_BASKET_REQUEST, id);
