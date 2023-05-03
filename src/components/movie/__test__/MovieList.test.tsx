import { screen } from '@testing-library/react';
import { IMovie } from 'common';
import { MovieList } from 'components';
import { uniqueId } from 'lodash';
import { renderWithProviders } from 'utils';
import { v4 as uuid } from 'uuid';
import movieDataIDs from 'components/movie/__test__/data-test-ids';

test('render MovieList component', () => {
  const movieList: IMovie[] = [{ imdbID: uuid(), Title: 'Movie Tile 1', Poster: '/poster-1.png' }];
  renderWithProviders(<MovieList movieList={movieList} />);
  expect(screen.getByTestId(movieDataIDs.movieList.component)).toBeInTheDocument();
  expect(screen.getAllByRole(movieDataIDs.movieList.movieItem)).toHaveLength(1);
});
