module.exports = {
  siteMetadata: {
    title: `alex`,
    titleTemplate: "%s",
    description: `We're on a mission to make the web beautiful.`,
    image: "/logo.png",
    twitterUsername: "@Simplecodehq",
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
	  "gatsby-plugin-postcss", 
	  "gatsby-plugin-image", 
	  "gatsby-plugin-sharp", 
	  "gatsby-transformer-sharp", 
          `gatsby-plugin-react-helmet`,
          `gatsby-transformer-json`,
	  {
            resolve: 'gatsby-source-filesystem',
            options: {
              "name": "images",
               path: `./src/data/`,
              //"path": "./src/images/"
            },
            __key: "images"
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `gatsby-starter-default`,
              short_name: `starter`,
              start_url: `/`,
              background_color: `#663399`,
              theme_color: `#663399`,
              display: `minimal-ui`,
            },
          },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
