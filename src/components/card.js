import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const _ = require("lodash");

export default class Card extends React.Component {
  state = {
    selected: null,
    fullScreen: false,
    focused: null,
    image: null
  };
  imgStyle = {
    backgroundColor: "blue"
  };
  //   console.log(data);

  render() {
    return (
      <div key={this.props.node.id + this.props.node.frontmatter.title} className={"tile"}>
        <div className={""}>
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
        </div>
      </div>
    );
  }
}
