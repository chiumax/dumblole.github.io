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
      <div>
        <div className="header">
          <Link to={`/`} className="header__title">
            <h1>{data.site.siteMetadata.title}</h1>
          </Link>
          <Link to={`/project/`}>Projects</Link>
          <Link to={`/blog/`}>Blogs</Link>

          <Link to={`/about/`}>About</Link>
        </div>
        {children}
      </div>
    )}
  />
);
