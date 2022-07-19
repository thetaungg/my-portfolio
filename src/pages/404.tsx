import React from "react";
import { css } from "@emotion/react";
import EmptyLayout from "@/layouts/EmptyLayout";
import PageNotFoundIllustration from "@/assets/images/not-found.inline.svg";

const NotFoundPage = () => (
    <EmptyLayout title="404: Not found">
        <div css={container}>
            <div css={illustration}>
                <PageNotFoundIllustration />
            </div>
            <h1 css={heading}>Page Not Found</h1>
            <p css={text}>You just hit a route that doesn&#39;t exist.</p>
            <a css={button} href="/">
                Go To Homepage
            </a>
        </div>
    </EmptyLayout>
);

const container = css`
    min-height: 100vh;
    padding: 5rem 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 680px) {
        padding: 5rem 5rem;
    }
`;

const illustration = css`
    margin-bottom: 5rem;
    height: calc(100vh - 32rem);

    svg {
        height: 100%;
        width: auto;
    }

    @media (max-width: 1065px) {
        width: calc(100vw - 5rem);
        height: auto;

        svg {
            width: 100%;
            height: auto;
        }
    }
`;

const heading = css`
    font-size: 4rem;
    font-weight: 500;

    @media (max-width: 475px) {
        font-size: 2.5rem;
    }
`;

const text = css`
    font-size: 2rem;
    margin: 2rem 0;

    @media (max-width: 475px) {
        font-size: 1.4rem;
    }
`;

const button = css`
    font-size: 1.6rem;
    padding: 1rem 2rem;
    border: 1px solid var(--color-primary);
    border-radius: 2rem;
    cursor: pointer;
    transition: all 0.2s;

    @media (max-width: 475px) {
        font-size: 1.4rem;
    }

    &:hover {
        transform: scale(1.02);
    }

    &:active {
        transform: scale(0.98);
    }
`;

export default NotFoundPage;
