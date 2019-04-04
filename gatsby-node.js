const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const _ = require("lodash");
const slash = require("slash");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // let slug = createFilePath({ node, getNode, basePath: `blogs` });
    // console.log(slug, "NOOO");
    const parent = getNode(_.get(node, "parent"));
    slug = slash(node.frontmatter.path);
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
    console.log("TCL: exports.onCreateNode -> node", node);
    //////// tags
    // if (!!node.frontmatter.tags) {
    //   const tagSlugs = node.frontmatter.tags.map(tag => {
    //     return `/${node.frontmatter.type}/tags/${_.kebabCase(tag)}/`;
    //   });
    //   createNodeField({ node, name: "tagSlugs", value: tagSlugs });
    // }
    ////////
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
    //const blogPost = path.resolve("./src/templates/blog-post.js");
    //const tagTemplate = path.resolve("./src/templates/project-tag-list.js");

    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                type
                path
                tags
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
        //console.log(node.fields.slug, node.frontmatter.path);
        if (node.frontmatter.type === "project") {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/${node.frontmatter.type}-post.js`),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              slug: node.fields.slug
            }
          });
        }

        ////// tags
        // let tags = [];
        // if (!!node.frontmatter.tags) {
        //   tags = tags.concat(node.frontmatter.tags);
        // }
        // console.log("tag", tags);
        // tags = _.uniq(tags);
        // tags.forEach(tag => {
        //   const tagPath = `/${node.frontmatter.type}/tags/${_.kebabCase(tag)}/`;
        //   console.log(tag, _.kebabCase(tag));
        //   createPage({
        //     path: tagPath,
        //     component: tagTemplate,
        //     context: { tag: tag, type: node.frontmatter.type }
        //   });
        // });
      });
      resolve();
    });
  });
};
