import { css } from "@emotion/react";

export const container = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5rem;
  min-height: calc(100vh - 20rem);
`;

export const imgContainer = css`
  min-width: 50%;
  flex-grow: 1;
  padding-right: 5rem;

  img {
    width: 100%;
  }
`;

export const textContainer = css`
  display: flex;
  flex-direction: column;
`;

export const sectionHeading = css`
  font-size: 4rem;
  margin-bottom: 3rem;
`;

export const about = css`
  font-size: 2rem;
  line-height: 3.5rem;
`;
