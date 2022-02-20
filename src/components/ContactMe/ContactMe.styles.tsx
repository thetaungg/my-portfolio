import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5rem;
  min-height: calc(100vh - 20rem);

  @media only screen and (max-width: 895px) {
    padding: 5rem 2.5rem;
  }
  @media only screen and (max-width: 695px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 475px) {
    padding: 5rem 2rem;
  }
`;

export const imgContainer = css`
  flex-basis: 45%;
  padding-right: 5rem;

  svg {
    width: 100%;
    height: auto;
  }

  @media only screen and (max-width: 895px) {
    padding-right: 2rem;
  }
  @media only screen and (max-width: 695px) {
    display: none;
  }
`;

export const contentsContainer = css`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
  padding: 3rem 4rem;

  @media only screen and (max-width: 895px) {
    padding: 3rem 0;
  }
  @media only screen and (max-width: 695px) {
    width: 100%;
    padding: 3rem 4rem;
  }
  @media only screen and (max-width: 475px) {
    padding: 3rem 1rem;
  }
`;

export const heading = css`
  font-size: 4rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 475px) {
    font-size: 2.5rem;
  }
`;
