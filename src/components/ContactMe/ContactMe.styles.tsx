import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5rem;
  min-height: calc(100vh - 20rem);
`;

export const imgContainer = css`
  flex-basis: 45%;
  padding-right: 5rem;

  img {
    width: 100%;
  }
`;

export const contentsContainer = css`
  display: flex;
  flex-direction: column;
  flex-basis: 55%;
  padding: 3rem 4rem;
`;

export const heading = css`
  font-size: 4rem;
  margin-bottom: 3rem;
`;
