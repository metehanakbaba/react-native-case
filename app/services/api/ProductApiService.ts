import MyJsonServer from '../servers/MyJsonServer';
import {
  EndPoint,
  IProductApiService,
  ProductDetailResult,
  ProductsResult,
} from './types';

const getProducts = (): Promise<ProductsResult> => {
  return MyJsonServer.get(EndPoint.Products);
};

const getProductDetail = async (id: number): Promise<ProductDetailResult> => {
  return MyJsonServer.get(`${EndPoint.Products}/${id}`);
};

const ProductApiService: IProductApiService = {
  getProducts,
  getProductDetail,
};

export default ProductApiService;
