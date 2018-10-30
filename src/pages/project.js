import React from "react";
import Card from "../components/card";
//import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

export default class ProjectList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     classNameVar: "tile tile-project",
  //     data: props.data,
  //     selected: null
  //   };
  // }
  //   console.log(data);
  state = {
    classNameVar: "tile tile-project",
    selected: null
  };
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
      <Layout>
        <div>
          <h1>Projects</h1>
          <h4>{this.props.data.allMarkdownRemark.totalCount} Posts</h4>
          <h5>
            <i>
              To see previews on touch screen, just swipe across the screen. Otherwise, just hover
              over with your mouse.
            </i>
          </h5>
          <Link to={`/blog/tags`}> All tags -></Link>
          <div className="wrap">
            {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
              <Card node={node} type="project" key={node.id}/>
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
      sort: { fields: [frontmatter___startdate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tags
            startdate(formatString: "MMMM DD, YYYY")
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
          excerpt(pruneLength: 600)
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

// {/* <div
//                 key={node.id}
//                 className={
//                   node.id === this.state.selected ? "tile tile-project yeet" : "tile tile-project"
//                 }
//                 onTouchStart={touchStartEvent => this.swipeTrigger(node.id)}
//                 //onTouchEnd={() => this.swipeEnd()}
//                 // onClick={e => {
//                 //   e.preventDefault();
//                 //   e.stopPropagation();
//                 //   console.log("YYEET");
//                 // }}
//               >
//                 <Link to={node.fields.slug}>
//                   <div className="text">
//                     <h2 className="animate-text">
//                       {node.frontmatter.title} <span>— {node.frontmatter.startdate}</span>
//                     </h2>
//                     <p className="animate-text">
//                       {/*
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
//                       {node.excerpt.length > 105
//                         ? node.excerpt.indexOf(" ", 105) === -1
//                           ? node.excerpt
//                           : /^[a-z]+$/i.test(node.excerpt[node.excerpt.indexOf(" ", 105) - 1])
//                             ? node.excerpt.substring(0, node.excerpt.indexOf(" ", 105)) + "..."
//                             : node.excerpt.substring(0, node.excerpt.indexOf(" ", 105))
//                         : node.excerpt}
//                     </p>
//                     {/* {console.log(node. excerpt[node.excerpt.indexOf(" ", 105)])} */}
//                     <div className="dots">
//                       <span />
//                       <span />
//                       <span />
//                       <span />
//                       <span />
//                     </div>
//                   </div>
//                 </Link>
//                 <Img fluid={node.frontmatter.image.childImageSharp.fluid} className="img" />
//               </div> */}
