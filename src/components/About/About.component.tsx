import React from "react";
import AboutImage from "@/assets/images/developer-2.inline.svg";
import * as styles from "./About.styles";

const About = () => (
    <div css={styles.container} id="about">
        <div css={styles.imgContainer}>
            <AboutImage />
        </div>
        <div css={styles.textContainer}>
            <h5 css={styles.sectionHeading}>About me</h5>
            <p css={styles.about}>
                I started learning programming when I was 16. I started out as a Java developer. But
                I switched to Web Development in 2019 and started learning Javascript. Six months
                later, I got a Frontend Developer position in a startup company. About a year later,
                I got promoted to the <b>Frontend Lead</b> position.
                <br /> <br /> By the end of 2021, I ventured into Freelance works and currently,
                working as a Remote Frontend Developer in a Singapore-based company, handling both
                Web & Mobile Apps. While, at the same time, working on Freelance projects.
                <br /> My proudest one so far is -{" "}
                <a
                    href="https://www.saya.education"
                    target="_blank"
                    style={{ textDecoration: "underline" }}>
                    Saya - the English Learning Platform
                </a>
            </p>
        </div>
    </div>
);

export default About;
