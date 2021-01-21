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
        I started learning programming when I was 16. I started out as a Java developer. But I
        switched to Web Development in 2019 and started learning Javascript. Six months later, I got
        a Frontend Developer position in a startup company. I'm still working there as the{" "}
        <b>Frontend Lead</b>. <br /> I learned everything I know by self-learning , so, don't bother
        asking me for certificates or degrees. :)
      </p>
    </div>
  </div>
);

export default About;
