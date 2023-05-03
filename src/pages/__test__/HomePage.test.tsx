import { act, screen } from '@testing-library/react';
import { setupStore } from 'app/store';
import HomePage from 'pages/HomePage';
import { renderWithProviders } from 'utils';
import dataTestIds from './data-test-ids';
import { movieDetailMock } from 'components/movie/__test__/mock-data';
import {
  intersectionMockInstance,
  mockIsIntersecting,
} from 'react-intersection-observer/test-utils';

import { useGetMovieList } from 'apiHooks';
import { updateSearchFilter } from 'components';
import reducer, { initialState } from 'components/searchBox/searchBoxSlice';

const movieDetail = movieDetailMock;

jest.mock('apiHooks/movie');

const mockedUseGetMovieList = useGetMovieList as jest.Mock<any>;

describe('query renders HomePage component', () => {
  const fetchNextPage = jest.fn();
  let result: any = {
    data: null,
    isLoading: true,
    fetchNextPage,
    hasNextPage: false,
    isFetchingNextPage: false,
    error: false,
  };
  beforeEach(() => {
    mockedUseGetMovieList.mockImplementation(() => result);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  const store = setupStore();

  test('HomePage: init page', () => {
    renderWithProviders(<HomePage />, { store });
    expect(screen.queryByRole(dataTestIds.homePage.loading)).toBeInTheDocument();
  });

  test('HomePage: search and filter', () => {
    store.dispatch(updateSearchFilter({ keyword: 'batman', filter: 'movie' }));
    expect(
      reducer(initialState, updateSearchFilter({ keyword: 'batman', filter: 'movie' }))
    ).toEqual({ keyword: 'batman', filter: 'movie' });
    result = {
      ...result,
      data: {
        pages: [{ Search: [movieDetailMock] }],
      },
      isLoading: false,
      hasNextPage: true,
      isFetchingNextPage: false,
      error: false,
    };

    renderWithProviders(<HomePage />, { store });
    expect(screen.queryByTestId(dataTestIds.homePage.root)).toBeInTheDocument();
  });
  test('HomePage: load more', () => {
    result = {
      ...result,
      data: {
        pages: [{ Search: [movieDetailMock] }],
      },
      isFetchingNextPage: false,
    };
    renderWithProviders(<HomePage />, { store });

    act(() => {
      mockIsIntersecting(screen.getByTestId(dataTestIds.homePage.loadMore), true);
    });
    expect(screen.getByTestId(dataTestIds.homePage.loadMore)).toBeInTheDocument();
    expect(fetchNextPage).toHaveBeenCalledTimes(1);
  });
});
