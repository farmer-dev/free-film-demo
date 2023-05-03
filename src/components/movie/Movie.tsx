import { IMovie } from 'common';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Poster } from './Poster';
import { pathToUrl } from 'utils/router';
import { pageRoutes } from 'routes';

type Props = {
  key?: string;
  movie: IMovie;
};

const MoveStyled = styled('div')`
  border: 1px solid ${({ theme }) => theme.palette.grey[900]};
  background-color: ${({ theme }) => theme.palette.grey[800]};

  transition: transform 0.25s;
  a {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
  .movie {
    &__wrap-image {
    }
    &--title {
      margin: ${({ theme }) => theme.spacing(1)};
      color: ${({ theme }) => theme.palette.text.primary};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      /* text-shadow: ${({ theme }) => theme.shadows[10]}; */
    }
  }
`;

export const Movie = ({ movie }: Props) => {
  return (
    <MoveStyled className="movie">
      {/* <h3>{movie.Title}</h3> */}
      <Link to={pathToUrl(pageRoutes.movieDetail, { id: movie.imdbID })}>
        <Poster poster={movie.Poster || ''} />
        <div className="movie__footer">
          <h4 className="movie--title">{movie.Title}</h4>
        </div>
      </Link>
    </MoveStyled>
  );
};
