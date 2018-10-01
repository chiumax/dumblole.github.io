import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles/components/_blog-project-post.scss";
export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className={"blog"} />
        <p>SLOT</p>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;
