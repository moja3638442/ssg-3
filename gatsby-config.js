module.exports = {
  siteMetadata: {
    title: "mysite",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      option: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
};
