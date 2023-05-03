import { useAppSelector } from 'app/hooks';
import { useGetMovieList } from 'apiHooks';
import React, { useEffect, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Loading, Movie, MovieList, selectKeyword, selectSearchFilter } from 'components';
import debounce from 'lodash/debounce';
import { Button } from '@mui/material';
import { pushNotification } from 'utils/notifications';
import lodash from 'lodash';
import dataTestIds from './__test__/data-test-ids';

type Props = {};

export const HomePage = (props: Props) => {
  const { ref, inView } = useInView();
  const keyword = useAppSelector(selectKeyword);
  const searchFitler = useAppSelector(selectSearchFilter);

  const {
    data: list,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    error,
    ...result
  } = useGetMovieList({
    s: searchFitler.keyword || 'batman',
    type: searchFitler.filter,
  });

  useEffect(() => {
    if (!keyword) {
      return;
    }
    const message = error?.message;

    if (message) {
      pushNotification(message, 'error');
    }
  }, [error]);

  useEffect(() => {
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isFetchingNextPage, hasNextPage]);

  if (isLoading) {
    return <Loading role={dataTestIds.homePage.loading} />;
  }
  return (
    <div data-testid={dataTestIds.homePage.root}>
      <MovieList
        movieList={lodash.flatten((list?.pages || []).map((page) => page?.Search || []))}
      />
      {hasNextPage && (
        <Button data-testid={dataTestIds.homePage.loadMore} ref={ref} onClick={() => {}} disabled>
          {isFetchingNextPage ? 'Loading more...' : ''}
        </Button>
      )}
    </div>
  );
};

export default HomePage;
