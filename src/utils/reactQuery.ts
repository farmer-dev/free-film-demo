import { QueryFunctionContext } from 'react-query';
import { api } from './api';

export type QueryKeyT = [string, object | undefined];
export const fetcher = <T>({
  queryKey,
  pageParam,
  meta,
}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;
  return api.get<T>(url, { meta, params: { ...params, page: pageParam } }).then((res) => res.data);
};
