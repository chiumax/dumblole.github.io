module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`
  },
  plugins: [
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/pages/projects`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: `${__dirname}/src/pages/blogs`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
