export interface IPayload<T> {
  data: T[];
  // Multiple possible status enum values
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  colour: string;
}

export interface IBasket {
  id: number;
  item: IProduct;
  quantity: number;
}
