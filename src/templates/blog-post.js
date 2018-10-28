import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

// import Typography from "typography";
// import fairyGatesTheme from "typography-theme-fairy-gates";
// const typography = new Typography(fairyGatesTheme);

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blog">
      <Link to={`/blog/`}> All Blogs </Link>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Img fluid={post.frontmatter.image.childImageSharp.fluid} className="img" />
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
