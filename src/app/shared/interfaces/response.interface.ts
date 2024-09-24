export interface IResponse<T> {
  message: string;
  data: T;
  count?: number;
}
