import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from "../components/NavBar/NavBar.component";
import "../assets/css/global.css";
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
      <div
        style={{
          padding: `1.5rem 0`,
          maxWidth: `160rem`,
          margin: "0 auto",
        }}>
        <NavBar siteTitle={data.site.siteMetadata?.title || `Title`} />
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
