import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import useInstagram from '../hooks/use-instagram';

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];
  return (
    <>
      <h2>Instagram posts from @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            href={`https://www.instagram.com/p/${photo.id}`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;

              :focus
              :hover {
                box-shadow: 0 2px 14px #2222224
                z-index: 10;
              }
            `}
          >
            <Image
              fluid={photo.fluid}
              alt={photo.caption}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
            />
          </a>
        ))}
        ;
      </div>
      <a href={`https://www.instagram.com/${username}`}>
        See more on instagram
      </a>
    </>
  );
};

export default Insta;
