import React from "react";
import "../styles/styles.scss";
import { StaticQuery, Link, graphql } from "gatsby";

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
      { icon: <Github className={"footerIcon"} />, url: "https://github.com/dumblole" },
      { icon: <Twitter className={"footerIcon"} />, url: "https://twitter.com/dumblole" },
      { icon: <Email className={"footerIcon"} />, url: "mailto:dumblole@gmail.com" },
      {
        icon: <Youtube className={"footerIcon"} />,
        url: "https://www.youtube.com/channel/UCpAL0BHmJ2aRj-37PQn8prQ"
      }
    ],
    contactsColored: [
      { icon: <Github className={"footerIcon githubIcon"} /> },
      { icon: <Twitter className={"footerIcon twitterIcon"} /> },
      { icon: <Email className={"footerIcon mailIcon"} /> },
      { icon: <Youtube className={"footerIcon youtubeIcon"} /> }
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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let classNameVar = "";

    if (this.props.location.pathname != "/") {
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
            {console.log(this.props.location)}
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
                    Blog
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
                <div>{this.props.children}</div>
              </div>
              <div className={"footerContainer"}>
                <div className={"footerHeader"}>find me</div>
                <div className={"footerWrap"}>
                  {this.state.contacts.map((key, index) => (
                    <div key={key.url}>
                      <a className={"footerIconWrap"} target="_blank" href={key.url}>
                        {key.icon} {this.state.contactsColored[index].icon}{" "}
                      </a>
                    </div>
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
