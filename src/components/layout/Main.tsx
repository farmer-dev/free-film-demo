import { Box } from '@mui/material';
import React from 'react';

type Props = {
  children: any;
};

export const Main = ({ children }: Props) => {
  return <Box sx={{ minHeight: '80vh' }}>{children}</Box>;
};
