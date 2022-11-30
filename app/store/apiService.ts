import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from './types';

const ApiService = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/benirvingplt/products',
  }),
  tagTypes: ['Products'],
  endpoints: build => ({
    getProducts: build.query<IProduct, undefined>({
      // inferred as `number` from the `QueryArg` type
      query: () => `products`,
    }),
  }),
});

export default ApiService;

export const { useGetProductsQuery } = ApiService;
