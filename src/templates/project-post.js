import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

import Img from "gatsby-image";
import moment from "moment";
import Overdrive from "react-overdrive";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <div id={post.frontmatter.title}>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} className={"blogCoverImage"} />
      </div>

      <div className={"blog content-container"}>
        {/*<Link to={`/project/`}> All Projects</Link>*/}
        <h1>{post.frontmatter.title}</h1>
        <table>
          <tbody>
            <tr>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Spent Time</th>
            </tr>
            <tr>
              <td>{moment(post.frontmatter.startdate, "YYYY-MM-DD").format("D MMM, YYYY")}</td>
              <td>{moment(post.frontmatter.enddate, "YYYY-MM-DD").format("D MMM, YYYY")}</td>
              <td>
                {moment(post.frontmatter.enddate, "YYYY-MM-DD").diff(
                  moment(post.frontmatter.startdate, "YYYY-MM-DD"),
                  "days"
                ) + " days"}
              </td>
            </tr>
          </tbody>
        </table>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>SLOT</p>
      </div>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        path
        startdate
        enddate
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
