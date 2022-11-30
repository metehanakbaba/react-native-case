import { AxiosResponse } from 'axios';
import { IProduct } from 'app/store/product/ProductTypes';

export enum EndPoint {
  Products = '/products/products',
}
export type ProductsResult = AxiosResponse<IProduct[]>;
export type ProductDetailResult = AxiosResponse<IProduct>;

export interface IProductApiService {
  getProducts: () => Promise<ProductsResult>;
  getProductDetail: (id: number) => Promise<ProductDetailResult>;
}
