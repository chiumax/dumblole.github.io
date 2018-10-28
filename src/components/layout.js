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
      <body className="body2">
        <div className="color">
          <div className="header header__content">
            <Link to={`/`} className="header__title underline--magical link">
              <h1>{data.site.siteMetadata.title}</h1>
            </Link>
            {/* <Link to={`/project/`}>Projects</Link>
          <Link to={`/blog/`}>Blogs</Link>
          <Link to={`/skills/`}>Skills</Link>
          <Link to={`/about/`}>About</Link> */}
          </div>
          <div className="content-container color">{children}</div>
        </div>
      </body>
    )}
  />
);
