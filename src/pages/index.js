import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import "normalize.css";
import "../styles/styles.scss";

export default class Home extends React.Component{
	render(){
		const lorem ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla at volutpat diam ut venenatis tellus in metus. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Mattis pellentesque id nibh tortor id aliquet lectus. Nulla facilisi cras fermentum odio eu feugiat. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Non blandit massa enim nec dui nunc mattis. Ac felis donec et odio pellentesque. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Cursus in hac habitasse platea dictumst. Lobortis elementum nibh tellus molestie nunc non. Sit amet tellus cras adipiscing enim. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Congue eu consequat ac felis donec.";
  return (
    <div className=" home-back">
      <h1 className="title-home">
        DUMBLOLE
      </h1>
      <h1 className="title-home">
      	{(Math.random()*701)+}PLACEHOLDERTEXTPLACEHOLDERTEXT
      </h1>
    </div>
  )}
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
