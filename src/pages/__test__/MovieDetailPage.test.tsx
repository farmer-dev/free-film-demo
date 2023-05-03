import { screen } from '@testing-library/react';
import { renderWithProviders } from 'utils';
import { MovieDetailPage } from 'pages/MovieDetailPage';
import axios from 'axios';
import { movieDetailMock } from 'components/movie/__test__/mock-data';
import { useGetMovie } from 'apiHooks';
import dataTestIds from './data-test-ids';

const movieDetail = movieDetailMock;

jest.mock('apiHooks/movie');

const mockedUseGetMovie = useGetMovie as jest.Mock<any>;

describe('query MovieDetailPage', () => {
  let result: any = {
    data: movieDetail,
    isLoading: true,
  };
  beforeEach(() => {
    mockedUseGetMovie.mockImplementation(() => result);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('is loading query', () => {
    renderWithProviders(<MovieDetailPage />);
    expect(screen.queryByRole(dataTestIds.movieDetailPage.loading)).toBeInTheDocument();
    expect(screen.queryByTestId(dataTestIds.movieDetailPage.root)).not.toBeInTheDocument();
  });

  test('successful query', () => {
    result = {
      data: movieDetail,
      loading: false,
    };
    renderWithProviders(<MovieDetailPage />);

    expect(screen.queryByRole(dataTestIds.movieDetailPage.loading)).not.toBeInTheDocument();
    expect(screen.queryByTestId(dataTestIds.movieDetailPage.root)).toBeInTheDocument();
  });
});
