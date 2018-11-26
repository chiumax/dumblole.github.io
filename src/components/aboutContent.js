import React from "react";

import Img from "gatsby-image";

export default ({ type, data }) => {
  switch (type) {
    case "myself":
      return <h1>YEET</h1>;
    case "coding":
      return <h1>YOTE</h1>;
    case "gaming":
      return <h1>YEART</h1>;
    case "editing":
      return <h1>YERT</h1>;
    default:
      return null;
  }
};

export const query = graphql`
  query {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
