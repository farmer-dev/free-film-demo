import { IListParams, IMovie, IMovieDetail } from '../common';
import { useFetch, useLoadMore } from '../hooks/api';
import { apiRoutes } from '../routes';

export const useGetMovieList = (params: IListParams) =>
  useLoadMore<IMovie>(apiRoutes.getMovieList, params);

export const useGetMovie = (params: IListParams) =>
  useFetch<IMovieDetail>(apiRoutes.getMovieDetail, params);
