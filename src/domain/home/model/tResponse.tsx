export interface TResponse<T> {
  error?: string;
  succeeded?: number;
  data?: T;
  errorCode?: number;
}
