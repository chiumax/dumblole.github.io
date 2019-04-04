import React from "react";

import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
      {console.log(data.allMarkdownRemark.edges[0])}
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "cv" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
