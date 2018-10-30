import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

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
  swipeTrigger = id => {
    console.log(id);
    this.setState(() => ({
      selected: id
    }));
    console.log(this.selected);
  };
  swipeEnd = () => {
    console.log(this.selected);
    this.setState(() => ({
      selected: null
    }));
    console.log(this.selected);
  };
  render() {
    return (
      <div key={this.props.node.id} className={"tile"}>
        <Link to={this.props.node.fields.slug}>
          <div>
            <Img fluid={this.props.node.frontmatter.image.childImageSharp.fluid} />
            <div>
              <h1>
                {this.props.node.frontmatter.title}
                <span>— {this.props.node.frontmatter.date}</span>
              </h1>
              <div>{this.props.node.tags.map(tag => {})}</div>
              <p>
                {this.props.node.excerpt.length > 505
                  ? this.props.node.excerpt.indexOf(" ", 505) === -1
                    ? this.props.node.excerpt
                    : /^[a-z]+$/i.test(
                        this.props.node.excerpt[this.props.node.excerpt.indexOf(" ", 505) - 1]
                      )
                      ? this.props.node.excerpt.substring(
                          0,
                          this.props.node.excerpt.indexOf(" ", 505)
                        ) + "..."
                      : this.props.node.excerpt.substring(
                          0,
                          this.props.node.excerpt.indexOf(" ", 505)
                        )
                  : this.props.node.excerpt}
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
