import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import "normalize.css";
import "../styles/styles.scss";

//import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="">
        <div className="">
          <div className="headerLinkWrap">
            <div>
              <Link className="linke" to={`/`}>
                DUMBLOLE
              </Link>
            </div>

            <div>
              <Link className="link" to={`/project/`}>
                Projects
              </Link>
              <Link className="link" to={`/blog/`}>
                Blogs
              </Link>
              <Link className="link" to={`/skills/`}>
                Skills
              </Link>
              <Link className="link" to={`/about/`}>
                About
              </Link>
            </div>
          </div>
          <div className={""}>
            <div className=" ">{children}</div>
          </div>
        </div>
      </div>
    )}
  />
);
