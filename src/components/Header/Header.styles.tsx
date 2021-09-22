import { css } from "@emotion/react";

export const header = css`
  display: flex;
  width: 100%;
  padding: 0 5rem 5rem;
  min-height: calc(100vh - 20rem);
  margin-top: 10rem;
  position: relative;

  @media only screen and (max-width: 975px) {
    min-height: calc(100vh - 15rem);
  }

  @media only screen and (max-width: 475px) {
    padding: 0 3rem 3rem;
  }

  @media only screen and (max-width: 375px) {
    padding: 0 2rem 3rem;
  }
`;

export const textContainer = css`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 4rem;

  @media only screen and (max-width: 1075px) {
    flex-basis: 55%;
  }
  @media only screen and (max-width: 975px) {
    flex-basis: 65%;
  }
  @media only screen and (max-width: 875px) {
    flex-basis: 70%;
  }
  @media only screen and (max-width: 775px) {
    flex-basis: 75%;
  }
  @media only screen and (max-width: 695px) {
    flex-basis: 100%;
  }
  @media only screen and (max-width: 475px) {
    margin-top: 5rem;
  }
`;

export const imgContainer = css`
  flex-basis: 50%;
  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  @media only screen and (max-width: 1075px) {
    flex-basis: 45%;
  }
  @media only screen and (max-width: 975px) {
    height: 100%;
    width: auto;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: -1;
  }
  @media only screen and (max-width: 695px) {
    width: 100vw;
    height: auto;
    top: 50%;
    transform: translate(-50%, -50%);
    filter: blur(0.4rem);
  }
`;

export const heading = css`
  font-size: 8rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: #373737;

  @media only screen and (max-width: 1175px) {
    font-size: 7rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 5.5rem;
  }
  @media only screen and (max-width: 345px) {
    font-size: 4.5rem;
  }
`;

export const subHeading = css`
  font-size: 5rem;
  font-weight: 700;
  color: #373737;
  margin-left: -1.5rem; /* to make up for &nbsp; */

  @media only screen and (max-width: 1175px) {
    font-size: 4rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 3rem;
  }
  @media only screen and (max-width: 345px) {
    font-size: 2rem;
  }
`;

export const introduction = css`
  ${subHeading};
  margin-bottom: 2rem;
  margin-left: 0;
`;

export const wave = css`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  img {
    width: 100%;
  }
`;
