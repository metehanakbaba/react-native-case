import { IPayload } from '../shared/SharedTypes';

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  colour: string;
}

export enum ProductActionTypes {
  FETCH_ALL_REQUEST = '@@PRODUCT/FETCH_ALL_REQUEST',
  FETCH_ALL_SUCCESS = '@@PRODUCT/FETCH_ALL_SUCCESS',
  FETCH_ALL_ERROR = '@@PRODUCT/FETCH_ALL_ERROR',
}

export interface ProductState {
  readonly products: IPayload<IProduct>;
}
