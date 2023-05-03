import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Filter } from './searchBox/Filter';
import { Logo } from './Logo';

export function SearchAppBar() {
  return (
    <Toolbar>
      <Logo />
      <Filter />
    </Toolbar>
  );
}
