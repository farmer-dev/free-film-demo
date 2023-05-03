import { Poster } from 'components';
import { renderWithProviders } from 'utils';
import { screen } from '@testing-library/react';

test('renders poster', () => {
  const imageSrc = '/image.png';
  renderWithProviders(<Poster poster={imageSrc} />);
  expect(screen.getByRole('img')).toHaveAttribute('src', imageSrc);
});
