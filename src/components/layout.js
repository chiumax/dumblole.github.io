import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import "../styles/styles.scss";
import anime from "animejs";
import { Waypoint } from "react-waypoint";
import Github from "../icons/github.svg";
import Twitter from "../icons/twitter.svg";
import Email from "../icons/envelope.svg";
import Youtube from "../icons/youtube.svg";
//import Particles from "react-particles-js";

//import { rhythm } from "../utils/typography";

export default class Layout extends React.Component {
  state = {
    contacts: [
      { icon: <Github className={"footerIcon"} />, color: "red" },
      { icon: <Twitter className={"footerIcon"} />, color: "red" },
      { icon: <Email className={"footerIcon"} />, color: "red" },
      { icon: <Youtube className={"footerIcon"} />, color: "red" }
    ]
  };
  animateHeadIn = el => {
    anime({
      targets: `[${el}]`,
      translateY: [0, -20],
      background: "rgba(0,0,0,0.90)",
      duration: 1000,
      easing: "easeInOutSine",
      delay: anime.stagger(300)
    });
  };
  animateHeadOut = el => {
    anime({
      targets: `[${el}]`,
      translateY: [0],
      background: "rgba(0,0,0,0.0)",
      duration: 1000,
      easing: "easeInOutSine",
      delay: anime.stagger(300)
    });
  };
  render() {
    let classNameVar = "";

    if (this.props.location === undefined) {
      classNameVar = "headerBlack";
    }
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
              <div className={`headerLink ${classNameVar}`} data-head>
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
                onLeave={() => {
                  this.animateHeadIn("data-head");
                }}
                onEnter={() => {
                  this.animateHeadOut("data-head");
                }}
              />
              <div className={""}>
                <div className=" ">{this.props.children}</div>
              </div>
              <div className={"footerContainer"}>
                <div className={"footerWrap"}>
                  {this.state.contacts.map(key => (
                    <div className={"footerIconWrap"}>{key.icon} </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}
