import React from "react";
import * as styles from "./About.styles";
import AboutImage from "../../assets/icons/developer-2.svg";

const About = () => (
  <div css={styles.container} id="about">
    <div css={styles.imgContainer}>
      <img src={AboutImage} alt="Developer contemplating" />
    </div>
    <div css={styles.textContainer}>
      <h5 css={styles.sectionHeading}>About me</h5>
      <p css={styles.about}>
        I started learning programming when I was 16. I started out as a Java developer. But I
        switched to Web Development in 2019 and started learning Javascript. Six months later, I got
        a Frontend Developer position in a startup company. About a year later, I got promoted to
        the <b>Frontend Lead</b> position.
        <br /> Currently, I'm working as a Remote Frontend Developer in a Singapore-based Ventures
        Builder company with a team of developers from all over the world.
      </p>
    </div>
  </div>
);

export default About;
