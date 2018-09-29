import React from "react";
import Img from "gatsby-image";
//import { rhythm } from "../utils/typography";
import Layout from "../components/layout";
import { Link, graphql } from "gatsby";

export default ({ data }) => {
  //   console.log(data);
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        <h5>
          <i>
            To see previews on touch screen, swipe <b>slowly</b> across the screen horizontally.
            Otherwise, just hover over with your mouse.
          </i>
        </h5>
        <div className="wrap">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div
              key={node.id}
              className="tile tile-blog"
              // onClick={e => {
              //   e.preventDefault();
              //   e.stopPropagation();
              //   console.log("YYEET");
              // }}
            >
              <Link to={node.fields.slug}>
                {/* <img
                  src="https://i.pinimg.com/originals/1a/18/cd/1a18cd94cfa03c4abe7dacc2a476861b.jpg"
                  className="img"
                /> */}

                <div className="text">
                  <h2 className="animate-text">
                    {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
                  </h2>
                  <p className="animate-text">
                    {/*
            Basically what that huge chunk of code does
            is:
            1. Check if the tagline length is > 105
            2. If not, just print the whole tagline
            3. If it is, check if there is a space after
            the index 105 and is not -1. If there isn't 
            then it'll return -1.
            4. If there is no space after 105, (which returns
            -1) then print the whole tagline
            5. If not, then check if the last character of the tagline 
            has punctuation.
            6. If it does, it prints the (first 105 characters + however
            many more till the next space) of the string
            7. If it doesn't it prints the first 105 characters + however
            many more till the next space) of the string + '...'
            8. This is because  'banana...' looks better than
            'bannana!...'
            NOTE. This may not work with super super super long words
            Have not tried and don't see why anyone would do this.
            */}
                    {node.excerpt.length > 105
                      ? node.excerpt.indexOf(" ", 105) === -1
                        ? node.excerpt
                        : /^[a-z]+$/i.test(node.excerpt[node.excerpt.indexOf(" ", 105) - 1])
                          ? node.excerpt.substring(0, node.excerpt.indexOf(" ", 105)) + "..."
                          : node.excerpt.substring(0, node.excerpt.indexOf(" ", 105))
                      : node.excerpt}
                  </p>
                  {/* {console.log(node. excerpt[node.excerpt.indexOf(" ", 105)])} */}
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </Link>
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} className="img" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
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
