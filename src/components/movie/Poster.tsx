import React from 'react';
import { styled } from '@mui/material/styles';
type Props = {
  poster: string;
};

const PosterStyled = styled('div')`
  position: relative;
  width: 100%;
  padding: 6px;
  &::before {
    content: '';
    display: inline-block;
    width: 100%;
    padding-top: calc(40 / 27 * 100%);
  }
  img {
    top: 0;
    left: 0;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Poster = ({ poster }: Props) => {
  return (
    <PosterStyled className="movie__wrap-image">
      <img src={poster} />
    </PosterStyled>
  );
};
