import { AppBar } from '@mui/material';
import { SearchAppBar } from '../SearchAppBar';
import React from 'react';

type Props = {};

export const Header = (props: Props) => {
  return (
    <AppBar data-testid="header" position="static" sx={{ justifyContent: 'flex-start' }}>
      <SearchAppBar />
    </AppBar>
  );
};
