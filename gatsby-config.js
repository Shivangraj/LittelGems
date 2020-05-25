module.exports = {
  siteMetadata: {
    title: 'Fpvtips',
    author: 'Georgi Yanev',
    description:
      "Let's bring the FPV community closer together and help new people get into the hobby!",
    siteUrl: 'https://www.fpvtips.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {},
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/pages`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'dictionary',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-43588334-10`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: `1392125`,
        sv: `6`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fpvtips.com`,
        short_name: `FPVtips`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1960a0`,
        display: `minimal-ui`,
        icon: `src/assets/fpvtips-logo-512.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: config.contentful.spaceId,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: config.contentful.accessToken,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`, // Keep this last in the list
  ],
}
