// import { SearchAppBar } from '';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Footer, Header, Main, SearchAppBar } from './components';
import { pageRoutes } from './routes';
import { MovieDetailPage, HomePage } from './pages';
import { Box, useTheme } from '@mui/material';

function App() {
  const theme = useTheme();
  return (
    <Box className="App" sx={{ maxWidth: theme.breakpoints.values.lg, margin: '0 auto' }}>
      <Header />
      <Main>
        <Routes>
          <Route path={pageRoutes.home} element={<HomePage />} />
          <Route path={pageRoutes.movieDetail} element={<MovieDetailPage />} />
        </Routes>
      </Main>

      <Footer></Footer>
    </Box>
  );
}

export default App;
