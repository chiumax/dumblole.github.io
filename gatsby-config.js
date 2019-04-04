module.exports = {
  siteMetadata: {
    title: `dumblole`
  },
  plugins: [
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`)
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1920
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/image`
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/pages/project`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "cv",
        path: `${__dirname}/src/pages/cv`
      }
    },

    `gatsby-plugin-catch-links`
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`
    //   }
    // }
  ]
};
