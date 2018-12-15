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
            {/* <div>
              <Link className="linke" to={`/`}>
                DUMBLOLE
              </Link>
            </div> */}

            <Link
              class="Menu-list-item"
              activeClassName="ActiveMenu Menu-list-item"
              data-offset="20"
              to={`/`}
            >
              Home
              <span class="Mask Laks">
                <span>Home</span>
              </span>
              <span class="Mask">
                <span>Home</span>
              </span>
            </Link>
            <Link
              class="Menu-list-item"
              div
              activeClassName="ActiveMenu Menu-list-item"
              data-offset="16"
              to={`/about/`}
            >
              About
              <span class="Mask Laks">
                <span>About</span>
              </span>
              <span class="Mask">
                <span>About</span>
              </span>
            </Link>
            <Link
              class="Menu-list-item"
              div
              activeClassName="ActiveMenu Menu-list-item"
              data-offset="12"
              to={`/project/`}
            >
              Work
              <span class="Mask Laks">
                <span>Work</span>
              </span>
              <span class="Mask">
                <span>Work</span>
              </span>
            </Link>
            <Link
              class="Menu-list-item"
              div
              activeClassName="ActiveMenu Menu-list-item"
              data-offset="12"
              to={`/blog/`}
            >
              Words
              <span class="Mask Laks">
                <span>Words</span>
              </span>
              <span class="Mask">
                <span>Words</span>
              </span>
            </Link>

            <Link
              class="Menu-list-item"
              div
              activeClassName="ActiveMenu Menu-list-item"
              data-offset="8"
              to={`/contact/`}
            >
              Contact
              <span class="Mask Laks">
                <span>Contact</span>
              </span>
              <span class="Mask">
                <span>Contact</span>
              </span>
            </Link>

            {/* <Link className="link" to={`/project/`}>
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
              </Link> */}
          </div>
          <div className={""}>
            <div className=" ">{children}</div>
          </div>
        </div>
      </div>
    )}
  />
);
