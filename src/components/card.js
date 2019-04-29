import React from "react";
import { Link, navigate } from "gatsby";
import Img from "gatsby-image";
import ProjectList from "../pages/project";
import anime from "animejs";
//import Overdrive from "react-overdrive";
import ImagePalette from "react-image-palette";
import { Waypoint } from "react-waypoint";

const _ = require("lodash");

export default class Card extends React.Component {
  state = {};
  projectOnClick = (el, location) => {
    const fadeOut = document.querySelectorAll(`div[data-project-card]:not([${el}])`);
    const sharedTrans = document.querySelectorAll(el);
    const sharedElement = document.getElementById(el);
    const sharedtran = sharedElement.getBoundingClientRect();
    const centerOff = window.innerHeight / 2 - sharedtran.top;
    anime({
      targets: fadeOut,
      opacity: [1, 0],
      translateY: [0, -20],
      duration: [250],
      easing: "easeInOutSine",
      complete: () => {
        const topOff = sharedtran.top;
        anime({
          targets: `[${el}]`,
          translateY: topOff * -1,
          height: "45rem",
          width: "100vw",
          duration: 1000,
          easing: "easeInOutSine",
          complete: () => {
            anime({
              targets: window.document.scrollingElement,
              scrollTop: 0,
              duration: 1,
              complete: () => {
                this.pushProject(location);
              }
            });
            anime({
              targets: `[${el}]`,
              translateY: sharedElement.offsetTop * -1,
              duration: 1
            });
          }
        });
      }
    });
  };

  pushProject = location => {
    console.log(location);
    navigate(location);
  };
  //   console.log(data);
  displayCard = () => {
    let data = this.props.node;
    let image = require(`../pages/project/${_.kebabCase(data.frontmatter.title)}/img.jpg`);
    let title = data.frontmatter.title
      ? _.replace(data.frontmatter.title, new RegExp(" ", "g"), "-").toLowerCase()
      : data.title;

    switch (this.props.type) {
      case "project":
        return (
          <div className="wrapCard">
            <ImagePalette image={image} className={"cardDivide"}>
              {({ backgroundColor, color, alternativeColor }) => {
                return (
                  <div
                    onClick={() => {
                      this.projectOnClick(`data-${title}`, data.fields.slug);
                    }}
                    className={`projectCard `}
                    style={{ color: alternativeColor }}
                    id={`data-${title}`}
                    {...{ [`data-${title}`]: title }}
                    data-project-card
                  >
                    <div className={"projectColorFilter"} style={{ backgroundColor }} />

                    <div className={"projectTitle"} style={{ backgroundColor }} data-project-card>
                      {data.frontmatter.title}
                    </div>
                    <div
                      style={{ backgroundColor }}
                      id={data.frontmatter.title}
                      className={"projectCardImage"}
                    >
                      <Img
                        fluid={data.frontmatter.image.childImageSharp.fluid}
                        className={"projectImage"}
                      />
                    </div>

                    {/* <div className={"projectColorFilter"} /> */}
                  </div>
                );
              }}
            </ImagePalette>
          </div>
        );

      default:
        return <div>Something unexpected happened</div>;
    }
  };
  render() {
    return (
      <div
        key={() =>
          !!this.props.node.frontmatter.title
            ? this.props.node.id + this.props.node.frontmatter.title
            : this.props.node.title + this.props.node.pubDate
        }
      >
        {this.displayCard()}
      </div>
    );
  }
}
//{
/* <div className={""}>
          <Link to={this.props.node.fields.slug}>
            <Img fluid={this.props.node.frontmatter.image.childImageSharp.fluid} className={""} />
          </Link>
        </div>
        <div className={""}>
          <h1 className={""}>
            <Link to={this.props.node.fields.slug} className={"link-not underline--magical-not"}>
              {this.props.node.frontmatter.title}
            </Link>
            <span>
              {" "}
              — {this.props.node.frontmatter.startdate}
              {console.log(this.props.node.frontmatter.startdate, this.props.node.frontmatter.date)}
              {this.props.node.frontmatter.date}{" "}
            </span>
          </h1>
          <div className={""}>
            {this.props.node.frontmatter.tags.map(tag => (
              <Link
                to={`/${this.props.node.frontmatter.type}/tags/${_.kebabCase(tag)}`}
                className={""}
              >
                <div className={""}>
                  <div className={""}>
                    <p key={this.props.node.frontmatter.title + tag} className={""}>
                      {tag}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <p className={""}>
            {this.props.node.excerpt.length > 300
              ? this.props.node.excerpt.indexOf(" ", 300) === -1
                ? this.props.node.excerpt
                : /^[a-z]+$/i.test(
                    this.props.node.excerpt[this.props.node.excerpt.indexOf(" ", 300) - 1]
                  )
                ? this.props.node.excerpt.substring(0, this.props.node.excerpt.indexOf(" ", 300)) +
                  "..."
                : this.props.node.excerpt.substring(0, this.props.node.excerpt.indexOf(" ", 300))
              : this.props.node.excerpt}
          </p>
        </div> */
//}
//  <Link to={this.props.node.fields.slug} className="blogTitleWrap">
//               <div>{this.props.node.frontmatter.title}</div>
//               <div>{this.props.node.frontmatter.date}</div>
//               <div>{readingTime(this.props.node.html).text}</div>
//             </Link>
