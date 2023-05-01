import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Filter } from './searchBox/Filter';
import { Logo } from './Logo';

export function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ justifyContent: 'flex-start' }}>
        <Toolbar>
          <Logo />
          <Filter />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
