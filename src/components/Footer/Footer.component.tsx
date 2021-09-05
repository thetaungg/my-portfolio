import React from "react";
import * as styles from "./Footer.styles";
import GithubIcon from "../../assets/icons/github.svg";
import LinkedInIcon from "../../assets/icons/linkedin.svg";
import StackoverflowIcon from "../../assets/icons/stackoverflow.svg";

const Footer = () => {
  return (
    <footer
      css={styles.footer}
      style={{
        marginTop: `2rem`,
      }}>
      <div css={styles.wrapper}>
        <span css={styles.name}>Thet Aung</span>
        <div css={styles.row} style={{ justifyContent: "space-between" }}>
          <div css={styles.copyright}>© {new Date().getFullYear()}, All rights reserved</div>
          <div css={styles.iconsContainer}>
            <a css={styles.icon} href="https://www.github.com/thetaungg" target="_blank">
              <img src={GithubIcon} alt="Github" />
            </a>
            <a css={styles.icon} href="https://www.linkedin.com/in/thetaung-dev/" target="_blank">
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
            <a
              css={styles.icon}
              href="https://stackoverflow.com/users/11803427/thet-aung"
              target="_blank">
              <img src={StackoverflowIcon} alt="Stackoverflow" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
