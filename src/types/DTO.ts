export interface DTO<T> {
  input: any;
  format(isForm?: boolean): any;
  get(): T;
}
