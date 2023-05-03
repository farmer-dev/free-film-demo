import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils';
import { SearchBox } from 'components';
import dataTestIds from './data-test-ids';

test('renders SearchBox component', () => {
  renderWithProviders(<SearchBox />);
  expect(screen.getByTestId(dataTestIds.searchBox.root)).toBeInTheDocument();
});
