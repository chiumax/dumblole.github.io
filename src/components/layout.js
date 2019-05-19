import React from "react";
import "../styles/styles.scss";
import { StaticQuery, Link, graphql } from "gatsby";
import { slide as Menu } from "react-burger-menu";

import anime from "animejs";
import { Waypoint } from "react-waypoint";
import Github from "../icons/git.svg";
import Twitter from "../icons/twitter.svg";
import Email from "../icons/envelope.svg";
import Youtube from "../icons/youtube.svg";
import Chevron from "../icons/chevron-up.svg";
//import Particles from "react-particles-js";

//import { rhythm } from "../utils/typography";

export default class Layout extends React.Component {
  state = {
    contacts: [
      { icon: <Github className={"footerIcon"} />, url: "https://github.com/dumblole" },
      { icon: <Twitter className={"footerIcon"} />, url: "https://twitter.com/dumblole" },
      { icon: <Email className={"footerIcon"} />, url: "mailto:	business@dumblole.com" },
      {
        icon: <Youtube className={"footerIcon"} />,
        url: "https://www.youtube.com/channel/UCpAL0BHmJ2aRj-37PQn8prQ"
      }
    ],
    openBurger: false
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
  animateChevronIn = el => {
    anime({
      targets: `.chevronWrap`,
      right: "5rem",
      duration: 1000,
      easing: "easeOutSine"
    });
  };
  animateChevronOut = el => {
    anime({
      targets: `.chevronWrap`,
      right: "-5rem",
      duration: 500,
      easing: "easeInSine"
    });
  };
  scrollToTop = () => {
    anime({
      targets: "html,body",
      scrollTop: 0,
      duration: 1000,
      easing: "easeInOutQuart"
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  closeBurger = () => {
    this.setState({
      openBurger: false
    });
  };
  toggleBurger = () => {
    this.setState(state => {
      return {
        openBurger: !state.openBurger
      };
    });
  };
  handleStateChange = state => {
    this.setState({ openBurger: state.isOpen });
  };
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
        render={data => {
          return (
            <div className="scrollWrap" id={"scrollWrap"}>
              {console.log(this.props.location)}
              <div
                className={"chevronWrap"}
                onClick={() => {
                  this.scrollToTop();
                }}
              >
                <Chevron className={"chevronUp"} />
              </div>
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

                  <div className={"nohamburgerMenu"}>
                    {" "}
                    <Link className="link" to={`/project/`}>
                      Projects
                    </Link>
                    <Link className="link" to={`/cv/`}>
                      CV
                    </Link>
                    <Link className="link" to={`/contact/`}>
                      Contact
                    </Link>
                  </div>
                  <div className={"hamburgerMenu"}>
                    <button
                      className={
                        this.state.openBurger
                          ? `hamburger hamburger--spin-r headerBurger is-active`
                          : `hamburger hamburger--spin-r headerBurger`
                      }
                      type="button"
                      onClick={() => {
                        this.toggleBurger();
                      }}
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                    <Menu
                      right
                      customBurgerIcon={false}
                      customCrossIcon={false}
                      width={"100vw"}
                      isOpen={this.state.openBurger}
                      disableAutoFocus
                      onStateChange={state => this.handleStateChange(state)}
                    >
                      <Link
                        className="link"
                        to={`/`}
                        onClick={() => {
                          this.closeBurger();
                        }}
                      >
                        Home
                      </Link>
                      <Link
                        className="link"
                        to={`/project/`}
                        onClick={() => {
                          this.closeBurger();
                        }}
                      >
                        Projects
                      </Link>
                      <Link
                        className="link"
                        to={`/cv/`}
                        onClick={() => {
                          this.closeBurger();
                        }}
                      >
                        CV
                      </Link>
                      <Link
                        className="link"
                        to={`/contact/`}
                        onClick={() => {
                          this.closeBurger();
                        }}
                      >
                        Contact
                      </Link>
                    </Menu>
                  </div>
                </div>
                <Waypoint
                  onLeave={() => {
                    this.animateHeadIn("data-head");
                    this.animateChevronIn(".chevronWrap");
                  }}
                  onEnter={() => {
                    this.animateHeadOut("data-head");
                    this.animateChevronOut(".chevronWrap");
                  }}
                />
                <div className={""}>
                  <div>{this.props.children}</div>
                </div>
                <div className={"footBigWrap"}>
                  <div className={"footerContainer"}>
                    <div className={"footerHeader"}>Copyright & Design © Max Chiu 2019</div>
                    <div className={"footerWrap"}>
                      {this.state.contacts.map((key, index) => (
                        <div key={key.url}>
                          <a className={"footerIconWrap"} target="_blank" href={key.url}>
                            {key.icon}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={"footerNav"}>
                    <Link className="footerLink" to={`/`}>
                      Home
                    </Link>
                    <Link className="footerLink" to={`/project/`}>
                      Projects
                    </Link>
                    <Link className="footerLink" to={`/cv/`}>
                      CV
                    </Link>
                    <Link className="footerLink" to={`/contact/`}>
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}
