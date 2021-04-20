import { css } from "@emotion/react";

const footer = css`
  background-color: #fafafa;
`;

const wrapper = css`
  padding: 3rem 4rem;
  display: flex;
  flex-direction: column;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const row = css`
  display: flex;
  align-items: center;
`;

const name = css`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const icon = css`
  padding: 0.5rem;
  background-color: #fafafa;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #c4c4c4;

  img {
    width: 100%;
  }
`;

export { footer, wrapper, name, icon, row };
