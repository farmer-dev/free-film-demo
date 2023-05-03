import { useAppSelector } from 'app/hooks';
import { useGetMovieList } from 'apiHooks';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Loading, Movie, MovieList, selectKeyword, selectSearchFilter } from 'components';
import { Box, Button, useTheme } from '@mui/material';
import { pushNotification } from 'utils/notifications';
import dataTestIds from './__test__/data-test-ids';
import _ from 'lodash';

type Props = {};

export const HomePage = (props: Props) => {
  const timeOutNoti: any = useRef(null);
  const { ref, inView } = useInView();
  const keyword = useAppSelector(selectKeyword);
  const searchFitler = useAppSelector(selectSearchFilter);
  const theme = useTheme();
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
    if (inView && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, isFetchingNextPage, hasNextPage]);

  const movieList = _.flatten((list?.pages || []).map((page) => page?.Search || []));

  if (isLoading) {
    return <Loading role={dataTestIds.homePage.loading} />;
  }

  return (
    <Box data-testid={dataTestIds.homePage.root} sx={{ minHeight: '300px' }}>
      {_.isEmpty(movieList) ? (
        <Box mt={theme.spacing(2)} sx={{ fontSize: theme.spacing(3) }}>
          No data to show
        </Box>
      ) : (
        <MovieList movieList={movieList} />
      )}

      {hasNextPage && (
        <Button data-testid={dataTestIds.homePage.loadMore} ref={ref} onClick={() => {}} disabled>
          {isFetchingNextPage ? 'Loading more...' : ''}
        </Button>
      )}
    </Box>
  );
};

export default HomePage;
