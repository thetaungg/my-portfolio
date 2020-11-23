import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import HeaderComponent from "../components/Header/Header.component";
import "../css/global.css";
import SEO from "../components/seo";

const DefaultLayout = ({ title = "Hi, I'm Thet Aung", children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <SEO title={title} />
      <HeaderComponent siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default DefaultLayout;
