module.exports = {
  siteMetadata: {
    title: `Gatsby-App Example`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, nostrum.`,
    author: `@llutti`,
    copyright: `© Copyright - All Rights Reserved`,
    socialMedia: {
      github: 'https://github.com/llutti',
      codepen: 'https://github.com/llutti',
      facebook: 'https://github.com/llutti',
    },
    siteUrl: `http://www.example.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
