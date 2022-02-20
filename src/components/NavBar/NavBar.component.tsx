import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import NavBtn from "@/components/NavBtn/NavBtn.component";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import ManSvg from "@/assets/icons/man.svg";
import * as styles from "./NavBar.styles";

const NavBar = () => {
  const [isFloating, setIsFloating] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (Math.abs(scrollPosition) > 150) {
      if (!isFloating) {
        setIsHidden(true);
        setTimeout(() => {
          setIsHidden(false);
          setIsFloating(true);
        }, 100);
      }
    } else {
      setIsFloating(false);
    }
  }, [scrollPosition]);

  const onNavClick = (id: string) => {
    const element = document.getElementById(id);
    element && element.scrollIntoView({ block: "center" });
  };

  return (
    <header css={styles.navbar(isFloating, isHidden)}>
      <div css={styles.wrapper}>
        <div css={styles.desktopNav}>
          <div css={styles.row}>
            <img css={styles.logo} src={ManSvg} alt="Thet Aung" />
            <Link to="/" css={styles.link}>
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

export default NavBar;
