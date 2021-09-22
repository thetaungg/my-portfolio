import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from "../components/NavBar/NavBar.component";
import "../assets/css/global.css";
import SEO from "../components/seo";
import Footer from "../components/Footer/Footer.component";

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
          padding: `1.5rem 0 0`,
        }}>
        <NavBar />
        <main style={{ maxWidth: `var(--max-width)`, margin: `0 auto` }}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default DefaultLayout;
