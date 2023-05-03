import { Logo } from '../Logo';
import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

type Props = {};

export const Footer = (props: Props) => {
  const theme = useTheme();
  return (
    <footer data-testid="footer">
      <Grid p={1.5} container sx={{ backgroundColor: theme.palette.common.black }}>
        <Grid item xs={4} md={2} sx={{ flexShrink: 0 }}>
          <Logo />
        </Grid>
        <Grid item xs={8} md={10}>
          <Typography textAlign={'start'} component={'h3'}>
            Copyright © 2021 Công Ty TNHH FreeFilm
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
