import { Typography } from '@mui/material';
import { pageRoutes } from '../routes';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

export const Logo = (props: Props) => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      textAlign={'start'}
      sx={{ '> a': { textDecoration: 'none', color: 'inherit' }, flexShrink: 0 }}
    >
      <Link to={pageRoutes.home}>FreeFilm</Link>
    </Typography>
  );
};
