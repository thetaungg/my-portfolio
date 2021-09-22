import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5rem;
  min-height: calc(100vh - 20rem);

  @media only screen and (max-width: 975px) {
    flex-direction: column-reverse;
  }
  @media only screen and (max-width: 475px) {
    padding: 5rem 2.5rem;
  }
`;

export const imgContainer = css`
  min-width: 50%;
  flex-grow: 1;
  padding-right: 5rem;

  img {
    width: 100%;
  }
  @media only screen and (max-width: 1175px) {
    min-width: 45%;
  }
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 975px) {
    margin-bottom: 6rem;
  }
`;

export const sectionHeading = css`
  font-size: 4rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 975px) {
    margin-bottom: 2rem;
  }
`;

export const about = css`
  font-size: 2rem;
  line-height: 3.5rem;
`;
