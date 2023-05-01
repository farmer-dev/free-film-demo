export type TMovieType = 'movie' | 'series' | 'episode';

export interface GetInfinitePagesInterface<T> {
  Search: T[];
  totalResults: number;
  Response: boolean;
}

export interface IPaginationParams {
  totalResults: number;
  Response: boolean;
}

export interface IListResponse<T> {
  Search: T[];
  totalResults: number;
  Response: boolean;
}

export interface IListParams {
  page?: number;
  s?: string;
  [key: string]: any;
}
