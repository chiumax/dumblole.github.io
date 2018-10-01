import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
// import Typography from "typography";
// import fairyGatesTheme from "typography-theme-fairy-gates";
import "../styles/components/_blog-project-post.scss";
// const typography = new Typography(fairyGatesTheme);

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="blog" />
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
      }
    }
  }
`;
