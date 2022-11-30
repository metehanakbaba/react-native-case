// For more info: https://github.com/piotrwitek/typesafe-actions
import { action } from 'typesafe-actions';
import { ProductActionTypes, IProduct } from './ProductTypes';

interface IFetchProductsRequest {
  type: ProductActionTypes.FETCH_ALL_REQUEST;
}

interface IFetchProductsSuccess {
  type: ProductActionTypes.FETCH_ALL_SUCCESS;
  payload: IProduct[];
}

interface IFetchProductsError {
  type: ProductActionTypes.FETCH_ALL_ERROR;
  payload: string;
}

export const fetchProductsRequest = (): IFetchProductsRequest =>
  action(ProductActionTypes.FETCH_ALL_REQUEST);
export const fetchProductsSuccess = (data: IProduct[]): IFetchProductsSuccess =>
  action(ProductActionTypes.FETCH_ALL_SUCCESS, data);
export const fetchProductsError = (message: string): IFetchProductsError =>
  action(ProductActionTypes.FETCH_ALL_ERROR, message);
