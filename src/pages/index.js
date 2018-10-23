import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import "normalize.css";
import "../styles/styles.scss";

export default ({ data }) => {
  return (
    <div className="home-back">
      <h1 className="home-back">aaaa</h1>
      <p>abcdefghijklmnopqrstuvwxyz</p>
      <h1 className="home-back">Thanks for stopping by!</h1>
    </div>
  );
};

// export const ImageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "1.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 1000) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//     imageTwo: file(relativePath: { eq: "abc.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 1080) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
