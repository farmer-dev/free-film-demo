import { Loading, MovieDetail } from 'components';
import { useGetMovie } from 'apiHooks';
import React from 'react';
import { useMatches, useParams } from 'react-router-dom';
import dataTestIds from './__test__/data-test-ids';
import { Box } from '@mui/material';

type Props = {};

export const MovieDetailPage = (props: Props) => {
  const { id } = useParams();

  const { data, isLoading } = useGetMovie({ i: id });
  if (isLoading) {
    return <Loading role={dataTestIds.movieDetailPage.loading} />;
  }

  if (!data) {
    return null;
  }

  return (
    <Box data-testid={dataTestIds.movieDetailPage.root}>
      <MovieDetail movie={data} />
    </Box>
  );
};
