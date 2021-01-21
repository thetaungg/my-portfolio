import { css } from "@emotion/react";

export const form = css`
  display: flex;
  flex-direction: column;
`;

export const input = css`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const button = css`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background-color: #2980b9;
  color: #fff;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #2573a7;
  }

  &:active {
    background-color: #2980b9;
  }
`;

export const error = css`
  color: #db1f48;

  a {
    color: #2573a7;
  }
`;

export const success = css`
  color: #00b050;
`;
