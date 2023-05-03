import { fireEvent, screen, render } from '@testing-library/react';
import { renderWithProviders } from 'utils';
import { Footer } from 'components';

test('renders footer', () => {
  renderWithProviders(<Footer />);
  expect(screen.getByTestId('footer')).toBeInTheDocument();
});
