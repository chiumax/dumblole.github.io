import React from "react";
//import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import Card from "../components/card";
import { graphql } from "gatsby";

export default class TagList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     classNameVar: "tile tile-blog",
  //     data: props.data,
  //   };
  // }
  state = {
    classNameVar: "tile tile-blog",
    selected: null,
    fullScreen: false,
    focused: null,
    image: null
  };
  imgStyle = {
    backgroundColor: "blue"
  };
  //   console.log(data);
  swipeTrigger = id => {
    console.log(id);
    this.setState(() => ({
      selected: id
    }));
    console.log(this.selected);
  };
  swipeEnd = () => {
    console.log(this.selected);
    this.setState(() => ({
      selected: null
    }));
    console.log(this.selected);
  };
  render() {
    return (
      <div>
        <div>
          <h1>Projects</h1>
          <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
          <h5>
            <i>
              To see previews on touch screen, just swipe across the screen. Otherwise, just hover
              over with your mouse.
            </i>
          </h5>
          <div className="wrap">
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
              <Card node={node} type="project" key={node.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export const query = graphql`
  query($tag: String, $type: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] }, type: { eq: $type } } }
      sort: { fields: [frontmatter___startdate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            tags
            type
            title
            startdate(formatString: "MMMM DD, YYYY")
            enddate(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
// {node.excerpt.length > 105
//   ? node.excerpt.substring(
//       0,
//       node.excerpt.indexOf(" ", 105) === -1
//         ? node.excerpt.length
//         : node.excerpt.indexOf(" ", 105)
//     ) + "..."
//   : node.excerpt}

// import React from "react";
// import Img from "gatsby-image";
// //import { rhythm } from "../utils/typography";
// import Layout from "../components/layout";
// import { Flipper, Flipped } from "react-flip-toolkit";
// import { Link, graphql, navigate } from "gatsby";

// export default class BlogList extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     classNameVar: "tile tile-blog",
//   //     data: props.data,
//   //     selected: null
//   //   };
//   // }
//   state = {
//     classNameVar: "tile tile-blog",
//     selected: null,
//     fullScreen: false,
//     focused: null,
//     image: null
//   };
//   imgStyle = {
//     backgroundColor: "blue"
//   };
//   //   console.log(data);
//   swipeTrigger = id => {
//     console.log(id);
//     this.setState(() => ({
//       selected: id
//     }));
//     console.log(this.selected);
//   };
//   swipeEnd = () => {
//     console.log(this.selected);
//     this.setState(() => ({
//       selected: null
//     }));
//     console.log(this.selected);
//   };
//   render() {
//     return (
//       <Flipper flipKey={this.state.focused}>
//         {!!this.state.focused ? (
//           <Flipped flipId={this.state.focused}>
//             <div
//               onClick={() => this.setState({ focused: null })}
//               style={{ backgroundColor: "blue" }}
//             >
//               <Img fluid={this.state.image} className="img" />
//             </div>
//           </Flipped>
//         ) : (
//           <Layout>
//             <div>
//               <h1>Blogs</h1>
//               <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
//               <h5>
//                 <i>
//                   To see previews on touch screen, just swipe across the screen. Otherwise, just
//                   hover over with your mouse.
//                 </i>
//               </h5>
//               <div className="wrap">
//                 {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
//                   <Flipped flipId={node.id}>
//                     <div
//                       key={node.id}
//                       className={
//                         node.id === this.state.selected ? "tile tile-blog yeet" : "tile tile-blog"
//                       }
//                       onClick={() =>
//                         this.setState({
//                           focused: node.id,
//                           image: node.frontmatter.image.childImageSharp.fluid
//                         })
//                       }
//                       onTouchStart={touchStartEvent => this.swipeTrigger(node.id)}
//                       //onTouchEnd={() => this.swipeEnd()}
//                       // onClick={e => {
//                       //   e.preventDefault();
//                       //   e.stopPropagation();
//                       //   console.log("YYEET");
//                       // }}
//                     >
//                       {/* <Link to={node.fields.slug}> */}
//                       {/* <img
//                   src="https://i.pinimg.com/originals/1a/18/cd/1a18cd94cfa03c4abe7dacc2a476861b.jpg"
//                   className="img"
//                 /> */}

//                       <div className="text">
//                         <h2 className="animate-text">
//                           {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
//                         </h2>
//                         <p className="animate-text">
//                           {/*
//             Basically what that huge chunk of code does
//             is:
//             1. Check if the tagline length is > 105
//             2. If not, just print the whole tagline
//             3. If it is, check if there is a space after
//             the index 105 and is not -1. If there isn't
//             then it'll return -1.
//             4. If there is no space after 105, (which returns
//             -1) then print the whole tagline
//             5. If not, then check if the last character of the tagline
//             has punctuation.
//             6. If it does, it prints the (first 105 characters + however
//             many more till the next space) of the string
//             7. If it doesn't it prints the first 105 characters + however
//             many more till the next space) of the string + '...'
//             8. This is because  'banana...' looks better than
//             'bannana!...'
//             NOTE. This may not work with super super super long words
//             Have not tried and don't see why anyone would do this.
//             */}
//                           {node.excerpt.length > 105
//                             ? node.excerpt.indexOf(" ", 105) === -1
//                               ? node.excerpt
//                               : /^[a-z]+$/i.test(node.excerpt[node.excerpt.indexOf(" ", 105) - 1])
//                                 ? node.excerpt.substring(0, node.excerpt.indexOf(" ", 105)) + "..."
//                                 : node.excerpt.substring(0, node.excerpt.indexOf(" ", 105))
//                             : node.excerpt}
//                         </p>
//                         {/* {console.log(node. excerpt[node.excerpt.indexOf(" ", 105)])} */}
//                         <div className="dots">
//                           <span />
//                           <span />
//                           <span />
//                           <span />
//                           <span />
//                         </div>
//                       </div>
//                       {/* </Link> */}
//                       <Img fluid={node.frontmatter.image.childImageSharp.fluid} className="img" />
//                     </div>
//                   </Flipped>
//                 ))}
//               </div>
//             </div>
//           </Layout>
//         )}
//       </Flipper>
//     );
//   }
// }

// export const query = graphql`
//   query {
//     allMarkdownRemark(
//       filter: { frontmatter: { type: { eq: "blog" } } }
//       sort: { fields: [frontmatter___date], order: DESC }
//     ) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "MMMM DD, YYYY")
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 1920) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }

//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
// // {node.excerpt.length > 105
// //   ? node.excerpt.substring(
// //       0,
// //       node.excerpt.indexOf(" ", 105) === -1
// //         ? node.excerpt.length
// //         : node.excerpt.indexOf(" ", 105)
// //     ) + "..."
// //   : node.excerpt}
