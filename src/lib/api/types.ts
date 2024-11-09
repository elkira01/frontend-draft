export type APIMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export interface CallActionParams {
  url: string;
  body?: any;
  type: APIMethod;
  headers?: { [key: string]: string };
  params?: { [key: string]: string };
}
