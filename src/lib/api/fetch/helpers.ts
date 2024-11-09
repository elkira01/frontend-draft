import { APIMethod } from '@/lib/api/types';
import { FetchAPI } from '@/lib/api/fetch/index';
import { baseEndpoint } from '@/lib/constants';
import { APIAdapter } from '@/lib/api/adapter';

const getMethod = (
  method: APIMethod,
): ((path: string, props?: any, headers?: any) => Promise<any>) => {
  const apiAdapter: APIAdapter = new FetchAPI();

  return (
    {
      get: apiAdapter.get,
      delete: apiAdapter.delete,
      post: apiAdapter.post,
      put: apiAdapter.put,
      patch: apiAdapter.patch,
    } as any
  )[method];
};

export const fetchCallAction = <T>(
  url: string,
  method: APIMethod,
): ((props?: T) => Promise<any>) => {
  const routeUrl = `${baseEndpoint}${url}`;

  return (props?: T) =>
    getMethod(method)(routeUrl, props)
      .then((res: Response) => {
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
};
