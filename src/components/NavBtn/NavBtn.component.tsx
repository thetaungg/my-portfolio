import React, { useEffect, useState } from "react";
import GithubIcon from "../../assets/icons/github.inline.svg";
import LinkedInIcon from "../../assets/icons/linkedin-square.inline.svg";
import StackoverflowIcon from "../../assets/icons/stackoverflow2.inline.svg";
import EmailIcon from "../../assets/icons/mail.inline.svg";
import * as styles from "./NavBtn.styles";

const NavBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onNavToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    //disabling scroll when popup opens
    if (isOpen) {
      // @ts-ignore
      document.querySelector("html").style.overflow = "hidden";
    } else {
      // @ts-ignore
      document.querySelector("html").style.overflowY = "auto";
    }
  }, [isOpen]);

  const onItemClick = (name: string) => {
    setIsOpen(!isOpen);
    const element = document.getElementById(name.toLowerCase());
    element && element.scrollIntoView({ block: "start" });
  };

  return (
    <div css={styles.navigation}>
      <div css={styles.btnWrapper}>
        <div css={styles.navigationBg(isOpen)}>
          <div css={styles.ratio} />
        </div>
        <div css={styles.bars} onClick={onNavToggle}>
          <div css={styles.bar(isOpen)} />
          <div css={styles.bar(isOpen)} />
          <div css={styles.bar(isOpen)} />
          <div css={styles.bar(isOpen)} />
        </div>
      </div>
      <div css={styles.navContents(isOpen)}>
        <ul css={styles.navItems(isOpen)}>
          {navItems.map((item) => (
            <li css={styles.navItem} key={item.id} onClick={() => onItemClick(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>

        <div css={styles.socialItems(isOpen)}>
          <a
            css={styles.socialItem}
            href="https://www.facebook.com/cybergenius.co"
            target="_blank"
            title="My Github profile">
            <GithubIcon />
          </a>
          <a
            css={styles.socialItem}
            href="https://www.linkedin.com/company/cybergenius-co"
            target="_blank"
            title="My LinkedIn page">
            <LinkedInIcon />
          </a>
          <a
            css={styles.socialItem}
            href="https://stackoverflow.com/users/11803427/thet-aung"
            title="Email us">
            <StackoverflowIcon />
          </a>
          <a css={styles.socialItem} href="mailto:contactus@cybergenius.co" title="Email us">
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

const navItems = [
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Projects",
  },
  {
    id: 3,
    name: "Contact",
  },
];

export default NavBtn;
