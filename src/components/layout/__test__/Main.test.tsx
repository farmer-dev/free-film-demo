import { fireEvent, screen, render } from '@testing-library/react';
import { renderWithProviders } from 'utils';
import { Main } from 'components';

test('renders main not children', () => {
  renderWithProviders(<Main />);
  expect(screen.getByTestId('main')).toBeInTheDocument();
});

test('renders main has children', () => {
  renderWithProviders(
    <Main>
      <div data-testid="children"></div>
    </Main>
  );
  expect(screen.getByTestId('children')).toBeInTheDocument();
});
