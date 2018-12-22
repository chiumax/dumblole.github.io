import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import "normalize.css";
import "../styles/styles.scss";
import Particles from "react-particles-js";

//import { rhythm } from "../utils/typography";

const linkList = {
  0:{link: "Home",linkPath: "/"},
  1:{link: "About",linkPath: "/about"},
  2:{link: "Work",linkPath: "/project"},
  3:{link: "Blog",linkPath: "/blog"},
  4:{link: "Contact",linkPath: "/contact"}
}




export default class Layout extends React.Component {
  renderLinks = () => {
     let data = [];
    for (let i=0; i<Object.keys(linkList).length; i++) {
     
  data.push(<Link
    key={linkList[i].link}
              class="Menu-list-item"
              activeClassName="ActiveMenu Menu-list-item"
              data-offset="20"
              to={linkList[i].linkPath}
            >
              {linkList[i].link}
              <span class="Mask Laks">
                <span>{linkList[i].link}</span>
              </span>
              <span class="Mask">
                <span>{linkList[i].link}</span>
              </span>
            </Link>)
}
return data;
  }
render() {return(<StaticQuery
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
      <div className="scrollWrap">
        <Particles className="aboutParticle" />
        <div className="">
          <div className="headerLinkWrap">
            {/* <div>
              <Link className="linke" to={`/`}>
                DUMBLOLE
              </Link>
            </div> */}

            {this.renderLinks()}

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
            <div className=" ">{this.props.children}</div>
          </div>
        </div>
      </div>
    )}
  />)
  }
}
