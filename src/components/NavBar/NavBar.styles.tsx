import { css } from "@emotion/react";

export const navbar = (isFloating: boolean, isHidden: boolean) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: #fff;
    transition: all 0.4s;

    ${isHidden &&
    `
    transform: translateY(-20rem);
  `}

    ${isFloating &&
    `
    position: fixed;
    background-color: #fff;
    box-shadow: 0 .3rem .6rem rgba(0, 0, 0, .1);
    transform: translateY(0);
  `}
`;

export const wrapper = css`
    margin: 0 auto;
    padding: 1rem 5rem;
    max-width: var(--max-width);
    display: flex;
    align-items: center;

    @media only screen and (max-width: 695px) {
        padding: 2.5rem 3rem;
        justify-content: space-between;
    }
`;

export const desktopNav = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
`;

export const logo = css`
    width: 5.5rem;
    height: 5.5rem;
    margin-right: 1rem;
`;

export const link = css`
    font-size: 2.2rem;
    font-weight: 500;
    color: #424242;
    text-decoration: none;
`;

export const row = css`
    display: flex;
    align-items: center;
`;

export const navItem = css`
    white-space: nowrap;
    font-size: 1.8rem;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 3rem;
    }
    @media only screen and (max-width: 695px) {
        display: none;
    }
`;

export const navBtnContainer = css``;
