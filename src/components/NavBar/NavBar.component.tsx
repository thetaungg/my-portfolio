import React, { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./NavBar.styles";
import ManSvg from "../../assets/icons/man.svg";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import NavBtn from "../NavBtn/NavBtn.component";

const NavBar = () => {
  const [isFloating, setIsFloating] = useState<boolean>(false);
  useScrollPosition(
    ({ currPos, prevPos }) => {
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexGrow: 1,
          }}>
          <div css={styles.row}>
            <img css={styles.logo} src={ManSvg} alt="Thet Aung" />
            <Link
              to="/"
              css={styles.link}
              style={{
                textDecoration: `none`,
              }}>
              Thet Aung
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
        <div css={styles.navBtnContainer}>
          <NavBtn />
        </div>
      </div>
    </header>
  );
};

interface HeaderProps {
  siteTitle?: string;
}

export default NavBar;