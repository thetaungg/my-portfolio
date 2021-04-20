import React from "react";
import * as styles from "./Footer.styles";
import GithubIcon from "../../assets/icons/github.svg";

const Footer = () => {
  return (
    <footer
      css={styles.footer}
      style={{
        marginTop: `2rem`,
      }}>
      <div css={styles.wrapper}>
        <span css={styles.name}>Thet Aung</span>
        <div css={styles.row}>
          <div>© {new Date().getFullYear()}, Built with</div>
          <div css={styles.row}>
            <a css={styles.icon}>
              <img src={GithubIcon} alt="Github" />
            </a>
            <a css={styles.icon}>
              <img src={GithubIcon} alt="Github" />
            </a>
            <a css={styles.icon}>
              <img src={GithubIcon} alt="Github" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
