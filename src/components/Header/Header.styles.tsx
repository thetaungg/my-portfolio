import { css } from "@emotion/react";

export const header = css`
  display: flex;
  width: 100%;
  padding: 0 5rem 5rem;
  min-height: calc(100vh - 20rem);
  margin-top: 10rem;
  position: relative;
`;

export const textContainer = css`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;
`;

export const imgContainer = css`
  flex-basis: 50%;

  img {
    width: 100%;
  }
`;

export const heading = css`
  font-size: 8rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #373737;
`;

export const subHeading = css`
  font-size: 5rem;
  font-weight: 700;
  color: #373737;
  margin-left: -1.5rem; /* to make up for &nbsp; */
`;

export const introduction = css`
  ${subHeading};
  margin-bottom: 2rem;
  margin-left: 0;
`;

export const wave = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
  }
`;
