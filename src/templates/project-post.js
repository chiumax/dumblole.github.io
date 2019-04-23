import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

import Img from "gatsby-image";
import moment from "moment";
//import Overdrive from "react-overdrive";
import reactplayer from "react-player";

export default ({ data }) => {
  const post = data.markdownRemark;
  const start = post.frontmatter.startdate;
  const end = post.frontmatter.enddate;
  const displayDate = moment(start, "DD MMM, YYYY").isSame(moment(end, "DD MMM, YYYY"), "month")
    ? moment(start, "DD MMM, YYYY").format("MMM, YYYY")
    : start + " - " + end;
  const days = moment(end, "DD MMM, YYYY").diff(moment(start, "DD MMM, YYYY"), "days");
  return (
    <div>
      <div id={post.frontmatter.title}>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} className={"blogCoverImage"} />
      </div>

      <div className={"post-container"}>
        <div className={"blog"}>
          <div className={"postTitle"}>{post.frontmatter.title}</div>
          {/*<Link to={`/project/`}> All Projects</Link>*/}
          <div className={"postDataWrap"}>
            <div>
              <div>Client</div>
              <div>{post.frontmatter.client}</div>
            </div>
            <span>/</span>
            <div>
              <div>Role</div>
              <div>{post.frontmatter.role}</div>
            </div>
            <span>/</span>
            <div>
              <div>Time</div>
              <div>
                <span> {displayDate}</span> | <span>{days + " days"}</span>
              </div>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
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
        startdate(formatString: "DD MMM, YYYY")
        enddate(formatString: "DD MMM, YYYY")
        client
        role
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
