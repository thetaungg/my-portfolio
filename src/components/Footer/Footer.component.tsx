import React from "react";
import GithubIcon from "@/assets/icons/github.inline.svg";
import LinkedInIcon from "@/assets/icons/linkedin.inline.svg";
import StackoverflowIcon from "@/assets/icons/stackoverflow.inline.svg";
import EmailIcon from "@/assets/icons/gmail.inline.svg";
import Wave from "@/assets/images/footer-wave.inline.svg";
import * as styles from "./Footer.styles";

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
              <GithubIcon />
            </a>
            <a css={styles.icon} href="https://www.linkedin.com/in/thetaung-dev/" target="_blank">
              <LinkedInIcon />
            </a>
            <a
              css={styles.icon}
              href="https://stackoverflow.com/users/11803427/thet-aung"
              target="_blank">
              <StackoverflowIcon />
            </a>
            <a css={styles.icon} href="mailto:contactus@cybergenius.co" title="Email us">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
      <div css={styles.wave}>
        <Wave />
      </div>
    </footer>
  );
};

export default Footer;
