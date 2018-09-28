import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";

export default ({ data }) => {
  return (
    <Layout>
      <h1>aaaa</h1>
      <Img fluid={data.imageTwo.childImageSharp.fluid} />
      <h1>Thanks for stopping by!</h1>
    </Layout>
  );
};

export const ImageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "abc.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
