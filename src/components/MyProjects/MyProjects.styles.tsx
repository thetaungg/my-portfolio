import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  padding: 5rem 0 4rem;
  min-height: calc(100vh - 20rem);
  background-color: #fafafa;
`;
export const card = css`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  border-radius: 0.8rem;

  @media only screen and (max-width: 475px) {
    padding: 5rem 2.5rem;
  }
`;

export const sectionHeading = css`
  font-size: 4rem;
  margin-bottom: 4rem;
`;

export const projectContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;

  @media only screen and (max-width: 975px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;
