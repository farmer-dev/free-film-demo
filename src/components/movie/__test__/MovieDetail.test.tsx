import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils';
import { MovieDetail } from 'components';
import { IMovieDetail } from 'common';
import { movieDetailMock } from './mock-data';

const movieDetail = movieDetailMock;
test('renders MovieDetail component', () => {
  renderWithProviders(<MovieDetail movie={movieDetail} />);
  const labelNames: string[] = [
    'Runtime',
    'Genre',
    'Writer',
    'Actors',
    'Released',
    'Language',
    // 'Plot',
    'imdbRating',
  ];

  const labelMapping: { [key: string]: string } = {
    imdbRating: 'Rating',
  };

  labelNames.forEach((label) => {
    const newLabel = labelMapping[label] ? labelMapping[label] : label;
    const value = movieDetail[label];
    expect(screen.getByText(newLabel)).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
  });
  expect(screen.getByText(movieDetail['Plot'])).toBeInTheDocument();
});
