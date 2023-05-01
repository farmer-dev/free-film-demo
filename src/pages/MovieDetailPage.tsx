import { MovieDetail } from '../components';
import { useGetMovie } from '../apiHooks';
import React from 'react';
import { useMatches, useParams } from 'react-router-dom';

type Props = {};

export const MovieDetailPage = (props: Props) => {
  const { id } = useParams();

  const { data, isLoading } = useGetMovie({ i: id });
  if (!data) {
    return null;
  }
  return (
    <div>
      <MovieDetail movie={data} />
    </div>
  );
};
