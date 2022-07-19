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

export const textarea = css`
    margin-bottom: 1rem;
`;

export const button = css`
    padding: 1.2rem 4rem;
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 600;
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
    margin-top: 2rem;

    a {
        color: #2573a7;
    }
`;

export const success = css`
    color: #00b050;
    font-size: 1.5rem;
`;
