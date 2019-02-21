import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import "../styles/styles.scss";
import anime from "animejs";
import { Waypoint } from "react-waypoint";
//import Particles from "react-particles-js";

//import { rhythm } from "../utils/typography";

export default class Layout extends React.Component {
  animateHeadIn = el => {
    anime({
      targets: `[${el}]`,
      translateY: [200, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutSine",
      delay: anime.stagger(300)
    });
  };
  animateHeadOut = el => {
    anime({
      targets: `[${el}]`,
      translateY: [200, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutSine",
      delay: anime.stagger(300)
    });
  };
  render() {
    return (
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
          <div className="scrollWrap">
            {/* <Particles className="aboutParticle" /> */}
            <div className="bodyWrap">
              {/* <div className="headerLinkWrap">
                 {this.renderLinks()}
                
              </div> */}
              <div className={"headerLink"}>
                <div>
                  {" "}
                  <Link className="linke" to={`/`}>
                    DUMBLOLE
                  </Link>
                </div>

                <div>
                  {" "}
                  <Link className="link" to={`/project/`}>
                    Projects
                  </Link>
                  <Link className="link" to={`/blog/`}>
                    Blogs
                  </Link>
                  <Link className="link" to={`/contact/`}>
                    Contact
                  </Link>
                </div>
              </div>
              <Waypoint
                onEnter={() => {
                  this.state.animateHeadIn("data-head");
                }}
                onLeave={() => {
                  this.state.animateHeadOut("data-head");
                }}
              />

              <div className={""}>
                <div className=" ">{this.props.children}</div>
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}
