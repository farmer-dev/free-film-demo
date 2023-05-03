import { IMovieDetail } from 'common';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Poster } from './Poster';
import dataTestIds from './__test__/data-test-ids';

type Props = {
  movie: IMovieDetail;
};
const labelMapping: { [key: string]: string } = {
  imdbRating: 'Rating',
};
const labelNames: string[] = [
  'Runtime',
  'Genre',
  'Writer',
  'Actors',
  'Released',
  'Language',
  'imdbRating',
];

export const InfoRow = ({ label, value }: { label: string; value: string }) => {
  const theme = useTheme();
  const newLabel = labelMapping[label] ? labelMapping[label] : label;
  return (
    <Grid container sx={{ color: theme.palette.grey[100], padding: '0.5rem' }} rowSpacing={40}>
      <Grid item xs={3} textAlign={'start'}>
        {newLabel}
      </Grid>
      <Grid item xs={9} textAlign={'start'} sx={{}}>
        {value}
      </Grid>
    </Grid>
  );
};

export const MovieDetail = ({ movie }: Props) => {
  const theme = useTheme();
  return (
    <Box data-testid={dataTestIds.movieDetail.component}>
      <Box
        mt={theme.spacing(1)}
        sx={{
          backgroundColor: theme.palette.grey[900],
          borderTop: `2px solid ${theme.palette.common.black}`,
        }}
      >
        <Typography
          component={'h2'}
          p={theme.spacing(2)}
          sx={{
            color: theme.palette.grey[100],
            fontSize: '1.5rem',
            fontWeight: 'bold',
            backgroundColor: theme.palette.grey[800],
          }}
        >
          {movie.Title}
        </Typography>
        <Grid container flexGrow={1} p={2} spacing={{ xs: 1, sm: 1.5 }}>
          <Grid item xs={12} sm={2}>
            <Poster poster={movie.Poster || ''} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-between'}
              sx={{ height: '100%' }}
            >
              {labelNames.map((label) => (
                <InfoRow key={label} label={label} value={movie[label]} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box p={2} component={'p'} textAlign={'start'} sx={{ color: theme.palette.grey[100] }}>
        {movie.Plot}
      </Box>
    </Box>
  );
};
