import React from "react";
import { Link } from "gatsby";
import { header, wrapper } from "./Header.styles";

const HeaderComponent = ({ siteTitle = "" }: HeaderProps) => (
  <header css={header}>
    <div css={wrapper}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

interface HeaderProps {
  siteTitle?: string;
}

export default HeaderComponent;
