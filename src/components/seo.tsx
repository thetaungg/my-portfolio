import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description = "", lang = "en", meta = [], title }: SEOProps) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            for_thadar
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `viewport`,
          content: `width=device-width, minimum-scale=1`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `For Thadar`,
          content: site.siteMetadata?.for_thadar || ``,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: metaDescription,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `google-site-verification`,
          content: `x7i5MhNZm7NjZyTDboDM5566yAXHAQ97wBPHJV2VIL4`,
        },
      ].concat(meta)}
    />
  );
}

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<any>;
  title: string;
}

export default SEO;
