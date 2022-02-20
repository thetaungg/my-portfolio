import { css } from "@emotion/react";

const footer = css`
  background-color: #f4f4f4;
  position: relative;
`;

const wrapper = css`
  padding: 0 15rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  max-width: var(--max-width);
  margin: 20rem auto 0;

  @media only screen and (max-width: 675px) {
    padding: 5rem 4rem;
  }
`;

const row = css`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 475px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media only screen and (max-width: 475px) {
    font-size: 3.5rem;
  }
`;

const copyright = css`
  font-size: 1.5rem;
`;

const iconsContainer = css`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  @media only screen and (max-width: 475px) {
    margin-left: 0;
    margin-top: 3rem;
    align-self: flex-end;
  }
`;

const icon = css`
  width: 2.7rem;
  height: 2.7rem;
  cursor: pointer;

  img {
    width: 100%;
  }

  &:not(:last-child) {
    margin-right: 3rem;
  }

  @media only screen and (max-width: 475px) {
    width: 3rem;
    height: 3rem;
  }
`;

const wave = css`
  position: absolute;
  top: 0;
  transform: translateY(calc(-100% + 8px));
  left: 0;
  right: 0;

  svg {
    width: 100%;
    height: auto;
  }
`;

export { footer, wrapper, name, icon, row, copyright, iconsContainer, wave };
