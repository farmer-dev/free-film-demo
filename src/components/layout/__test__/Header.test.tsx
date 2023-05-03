import { fireEvent, screen, render } from '@testing-library/react';
import { renderWithProviders } from 'utils';
import { Header } from 'components';

test('renders header', () => {
  renderWithProviders(<Header />);
  expect(screen.getByTestId('header')).toBeInTheDocument();
});
