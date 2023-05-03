import { IMovie } from 'common';
import React from 'react';
import { Movie } from './Movie';
import { Grid } from '@mui/material';
import dataIDs from './__test__/data-test-ids';

//string | JSX.Element | JSX.Element[] | () => JSX.Element
type Props = {
  movieList?: IMovie[];
  // children: React.ReactElement;
};

export const MovieList = ({ movieList = [] }: Props) => {
  return (
    <Grid
      data-testid={dataIDs.movieList.component}
      container
      rowSpacing={{ xs: 1, sm: 2 }}
      columnSpacing={{ xs: 0.5, sm: 1 }}
    >
      {movieList.map((movie) => (
        <Grid
          role={dataIDs.movieList.movieItem}
          key={movie.imdbID}
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
        >
          <Movie movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};
