import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import "normalize.css";
import "../styles/styles.scss";

export default class Home extends React.Component {
  render() {
    const intro = ["Just Somebody", "Trying To Figure", "The World Out."];
    const lorem = [
      "Sed ut volutpat felis. Etiam euismod sit amet ante ut ornare. Donec scelerisque, purus in laoret sodales, orci ipsum porttitor erat, et placerat metus arcu eget turpis. Integer sodales a quam a porta. Nunc et risus efficitur odio elementum venenatis et eu nisi. Sed consequat quis lorem nec finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas eu aliquam nibh. In hac habitasse platea dictumst. Suspendisse convallis, mi mattis hendrerit aliquam, diam est suscipit est, eget iaculis nisi sapien volutpat lectus. Fusce et consequat sem. Donec non sollicitudin massa, quis congue lorem. Aliquam sollicitudin eleifend ipsum, at gravida massa scelerisque vel. Donec id ante est. Pellentesque bibendum lobortis orci, eu aliquet mauris dignissim ut. Suspendisse ut dui quis odio rutrum maximus at ac mauris. Morbi tristique interdum eros id rhoncus. Duis aliquet consectetur ipsum, quis placerat eros porttitor sed. Curabitur magna orci, faucibus id sed.",
      "Nam fermentum sed metus a semper. Maecenas consectetur ex pretium urna tempor porttitor. Nulla id elit sed quam placerat maximus ut eget elit. Suspendisse tincidunt venenatis velit sed elementum. Nulla iaculis nisl rutrum nulla mattis porttitor. Mauris eget mauris pulvinar leo mollis tincidunt sed at justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla tempus, sapien ut sagittis pharetra, felis tortor pellentesque lorem, in tempor neque odio ac velit. Nam tempus eleifend lorem non scelerisque. Proin dapibus tortor elit, non ornare massa feugiat quis. Nullam in ipsum in risus blandit vulputate quis eu mauris. Phasellus ac leo scelerisque, vehicula felis ut, maximus risus. Pellentesque sed risus semper ipsum venenatis venenatis. Proin tortor lorem, mollis at pellentesque a, feugiat eu lorem. Phasellus volutpat erat libero, sed fermentum sapien aliquet vel. Curabitur tempor erat quis eros viverra, vitae sagittis urna accumsan. Quisque metus.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed eros eget risus facilisis pretium eget ac nunc. Aenean mattis quis augue eu luctus. Donec consectetur justo lacus, non fermentum ipsum eleifend sit amet. Cras vehicula tincidunt justo, nec portitor est euismod id. In sit amet mauris sed mi euismod interdum. Nulla elit nunc, suscipit malesuada erat sed, euismod finibus erat. Vivamus quis iaculis enim. Phasellus malesuada scelerisque justo. Ut facilisis quis turpis eget dapibus. Phasellus est tellus, interdum at bibendum quis, auctor nec diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sit amet odio elementum, scelerisque nibh non, ullamcorper erat. Pellentesque scelerisque vel elit id ornare. Fusce lacinia feugiat magna et luctus. Praesent dictum elementum elementum. Aenean quis convallis lorem, in ornare augue. Donec vitae suscipit velit. Suspendisse rutrum nibh sit amet nibh mattis, nec varius felis volutpat.",
      "Nulla tristique eros eget quam porta, nec ultrices ipsum volutpa. Ut id mauris eu tortor dapibus finibus. Nullam sed elit iaculis, egestas est quis, tempus nibh. Sed aliquet tellus ut ultrices malesuada. Nam in imperdiet nisl. Phasellus in felis nibh. Sed nec neque at enim fringila interdum vel non mi. Duis tempor lobortis dui ac euismod. Nunc elementum metus in velit auctor molestie. Proin vestibulum arcu vel tortor condimentum, a interdum nisl suscipit. Maecenas laoreet ligula nibh, sed hendrerit risus facilisis sed. Curabitur vel accumsan urna. Donec porta non justo non ullamcorper. Sed dolor elit, malesuada cursus risus eu, gravida scelerisque quam. Sed scelerisque volutpat dui nec iaculis. Etiam consectetur eget erat ac pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur et luctus magna. Aliquam erat volutpat. Nullam vehicula sed mi a vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor fringilla ultricies cras amet."
    ];
    return (
      <div className=" home-back">
        <h1 className="title-home">DUMBLOLE</h1>

        {intro.map(intro => {
          return (
            <div className="desc-wrap" key={intro}>
              <h1 className="lorem">{lorem[Math.floor(Math.random() * lorem.length + 1)]}</h1>
              <h1>
                &nbsp;
                {intro}
                &nbsp;
              </h1>
              <h1 className="lorem">{lorem[Math.floor(Math.random() * lorem.length + 1)]}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

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
