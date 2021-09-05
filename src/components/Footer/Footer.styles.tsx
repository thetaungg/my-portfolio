import { css } from "@emotion/react";

const footer = css`
  background-color: #fafafa;
`;

const wrapper = css`
  padding: 5rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: var(--max-width);
  margin: 0 auto;
  border-top: 1px solid #e5e5e5;
`;

const row = css`
  display: flex;
  align-items: center;
`;

const name = css`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 3rem;
    height: 0.2rem;
    background: var(--color-primary);
  }
`;

const copyright = css`
  font-size: 1.5rem;
`;

const iconsContainer = css`
  ${row};
  margin-left: 2rem;
`;

const icon = css`
  width: 2.7rem;
  height: 2.7rem;
  cursor: pointer;

  img {
    width: 100%;
  }

  &:not(:last-child) {
    margin-right: 2.5rem;
  }
`;

export { footer, wrapper, name, icon, row, copyright, iconsContainer };
