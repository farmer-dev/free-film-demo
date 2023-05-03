import { Poster } from 'components/movie/Poster';
import { IMovie } from 'common';
import { Movie } from 'components';
import { uniqueId } from 'lodash';
import { renderWithProviders } from 'utils';
import { screen } from '@testing-library/react';
import { pathToUrl } from 'utils/router';
import { pageRoutes } from 'routes';
import userEvent from '@testing-library/user-event';
import dataTestIds from 'pages/__test__/data-test-ids';

jest.mock('components/movie/Poster', () => ({
  Poster: jest.fn(({ poster }) => <img src={poster} />),
}));

test('renders Movie component', async () => {
  const movie: IMovie = {
    imdbID: uniqueId(),
    Title: 'Movie name',
    Poster: '/movie-poster.png',
  };
  renderWithProviders(<Movie movie={movie} />);
  expect(screen.getByText(movie.Title || '')).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveAttribute(
    'href',
    pathToUrl(pageRoutes.movieDetail, { id: movie.imdbID })
  );
  expect(Poster).toHaveBeenCalledWith(
    expect.objectContaining({ poster: movie.Poster }),
    expect.anything()
  );
});
