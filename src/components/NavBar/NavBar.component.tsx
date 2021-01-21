import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./NavBar.styles";
import ManSvg from "../../assets/images/man.svg";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

const NavBar = ({ siteTitle = "" }: HeaderProps) => {
  const [isFloating, setIsFloating] = useState<boolean>(false);
  useScrollPosition(
    ({ currPos, prevPos }) => {
      console.log(Math.abs(currPos.y));
      if (Math.abs(currPos.y) > 80) {
        setIsFloating(true);
      } else {
        setIsFloating(false);
      }
    },
    [isFloating],
    undefined,
    false,
    0
  );

  const onNavClick = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ block: "center" });
  };

  return (
    <header css={styles.navbar(isFloating)}>
      <div css={styles.wrapper}>
        <div css={styles.row}>
          <img css={styles.logo} src={ManSvg} alt="Thet Aung" />
          <Link
            to="/"
            css={styles.link}
            style={{
              textDecoration: `none`,
            }}>
            {siteTitle}
          </Link>
        </div>

        <ul css={styles.row}>
          <li css={styles.navItem} onClick={() => onNavClick("about")}>
            About
          </li>
          <li css={styles.navItem} onClick={() => onNavClick("projects")}>
            Projects
          </li>
          <li css={styles.navItem} onClick={() => onNavClick("contact")}>
            Contact me
          </li>
        </ul>
      </div>
    </header>
  );
};

interface HeaderProps {
  siteTitle?: string;
}

export default NavBar;
