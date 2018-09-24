const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
var _ = require("lodash");
const slash = require("slash");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode, basePath: `blogs` });
    const parent = getNode(_.get(node, "parent"));
    slug = slash(node.frontmatter.path);
    //console.log(node);
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
    // if (node.frontmatter.type === "blog") {
    //   createNodeField({
    //     node,
    //     name: `blog`,
    //     value: slug
    //   });
    // } else if (node.frontmatter.type === "project") {
    //   {
    //     createNodeField({
    //       node,
    //       name: `project`,
    //       value: slug
    //     });
    //   }
    // }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const projectPost = path.resolve("./src/templates/project-post.js");
    const blogPost = path.resolve("./src/templates/blog-post.js");

    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                type
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        console.log(node.fields.slug, node.frontmatter.type);
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/${node.frontmatter.type}-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        });
      });
      resolve();
    });
  });
};
