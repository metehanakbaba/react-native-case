export interface IPayload<T> {
  data?: T;
  datas?: T[];
  error?: never;
  loading: boolean;
}
