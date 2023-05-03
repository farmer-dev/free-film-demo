import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const Loading = ({ role }: { role?: string }) => {
  return (
    <Box
      role={role}
      sx={{
        top: 0,
        left: 0,
        display: 'flex',
        width: '100%',
        height: '100%',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        background: 'rgba(0,0,0,0.5)',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
