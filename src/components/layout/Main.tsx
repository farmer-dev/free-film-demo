import { Box } from '@mui/material';
import React, { ReactElement } from 'react';

type Props = {
  children?: ReactElement;
};

export const Main = ({ children }: Props) => {
  return (
    <Box data-testid="main" component={'main'} sx={{ minHeight: '80vh' }}>
      {children}
    </Box>
  );
};
