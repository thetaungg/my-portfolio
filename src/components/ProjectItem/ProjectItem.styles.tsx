import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border: 1px solid #e1e4e8;
  border-radius: 0.7rem;
  background-color: #fff;
`;

export const name = css`
  color: #0984e3;
  font-weight: 400;
  font-size: 1.8rem;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }
`;

export const description = css`
  font-size: 1.4rem;
  margin: 1rem 0 2.5rem;
  flex: 1 0 auto;
`;

export const row = css`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

export const dot = css`
  width: 1.2rem;
  height: 1.2rem;
  background-color: #0984e3;
  border-radius: 50%;
`;

export const text = css`
  font-size: 1.3rem;
  margin-left: 0.7rem;
  margin-top: 0.5rem;
`;
