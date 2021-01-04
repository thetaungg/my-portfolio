import React from "react";
import * as styles from "./About.styles";
import AboutImage from "../Images/AboutImage";

const About = () => (
  <div css={styles.container} id="about">
    <div css={styles.imgContainer}>
      <AboutImage />
    </div>
    <div css={styles.textContainer}>
      <h5 css={styles.sectionHeading}>About me</h5>
      <p css={styles.about}>
        I started learning programming even before I have a computer. I started learning Java in
        2017. I started learning Web Development in 2019. Six months later, I got my first job as
        Mid-level Frontend Developer. I'm currently leading the Frontend part of my team.
      </p>
    </div>
  </div>
);

export default About;
