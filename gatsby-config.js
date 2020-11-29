require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Aluko Brown — Product Designer`,
    description: `I’m a Product Designer based in Lagos, Nigeria, with over 
5 years experience designing tasteful experiences for brands, products & services and a background in graphic & brand design. 
I currently work on the Product team at Quidax and teach 
UX design at Stutern.`,
    author: `Aremu Smog`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
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
        background_color: `#022C14`,
        theme_color: `#022C14`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
        // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
