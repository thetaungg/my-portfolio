module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Thet Aung | Web Developer in Yangon, Myanmar`,
    description: `Portfolio for Thet Aung | Web Developer in Yangon, Myanmar`,
    author: `Thet Aung`,
    for_thadar: `I promise I'll be with you for all eternity. Thank you for making me the happiest man in the universe. I love you so much.`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `roboto`,
    //       `source sans pro\:300,400,500`, // you can also specify font weights and styles
    //     ],
    //     display: "swap",
    //   },
    // },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/assets/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "thetaung",
        protocol: "https",
        hostname: "thetaung.com",
      },
    },
  ],
};
