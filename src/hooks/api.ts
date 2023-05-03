import { GetInfinitePagesInterface } from 'common/interfaces';
import { fetcher, QueryKeyT } from '../utils/reactQuery';
import { useInfiniteQuery, useQueryClient, UseQueryOptions, useQuery } from 'react-query';

export const useLoadMore = <T>(url: string | null, params?: object) => {
  const context = useInfiniteQuery<
    GetInfinitePagesInterface<T>,
    Error,
    GetInfinitePagesInterface<T>,
    QueryKeyT
  >(
    [url!, params],
    ({ queryKey, pageParam = 1, meta = undefined }) => fetcher({ queryKey, pageParam, meta }),
    {
      getPreviousPageParam: (firstPage, pages) => {
        return firstPage.Response ?? false;
      },
      getNextPageParam: (lastPage, pages) => {
        const isLastPage = lastPage?.Search.length < 10;
        return isLastPage
          ? false
          : (lastPage?.Response as unknown as string).toLocaleLowerCase() === 'true'
          ? pages.length + 1
          : false;
      },
      retry: false,
    }
  );

  return context;
};

export const usePrefetch = <T>(url: string | null, params?: object) => {
  const queryClient = useQueryClient();

  return () => {
    if (!url) {
      return;
    }

    queryClient.prefetchQuery<T, Error, T, QueryKeyT>([url!, params], ({ queryKey, meta }) =>
      fetcher({ queryKey, meta })
    );
  };
};

export const useFetch = <T>(
  url: string | null,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKeyT>
) => {
  const context = useQuery<T, Error, T, QueryKeyT>(
    [url!, params],
    ({ queryKey, meta }) => fetcher({ queryKey, meta }),
    {
      enabled: !!url,
      ...config,
    }
  );

  return context;
};
