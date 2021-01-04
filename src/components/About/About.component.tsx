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
        I started learning programming when I was 16. I started out as a Java developer(software).
        But I switched to Web Developer in 2019 and started learning Javascript. Six months later, I
        got a Frontend Developer position in a startup company. Now, I'm leading the Frontend.
      </p>
    </div>
  </div>
);

export default About;
