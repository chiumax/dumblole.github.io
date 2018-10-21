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
      <div
        key={this.props.node.id}
        className={
          this.props.node.id === this.state.selected
            ? `tile tile-${this.props.type} yeet`
            : `tile tile-${this.props.type}`
        }
        onClick={() =>
          this.setState({
            focused: this.props.node.id,
            image: this.props.node.frontmatter.image.childImageSharp.fluid
          })
        }
        onTouchStart={touchStartEvent => this.swipeTrigger(this.props.node.id)}
      >
        <Link to={this.props.node.fields.slug}>
          <div className="text">
            <h2 className="animate-text">
              {this.props.node.frontmatter.title} <span>— {this.props.node.frontmatter.date}</span>
            </h2>
            <p className="animate-text">
              {/*
              Basically what that huge chunk of code does
              is:
              1. Check if the tagline length is > 105
              2. If not, just print the whole tagline
              3. If it is, check if there is a space after
              the index 105 and is not -1. If there isn't 
              then it'll return -1.
              4. If there is no space after 105, (which returns
              -1) then print the whole tagline
              5. If not, then check if the last character of the tagline 
              has punctuation.
              6. If it does, it prints the (first 105 characters + however
              many more till the next space) of the string
              7. If it doesn't it prints the first 105 characters + however
              many more till the next space) of the string + '...'
              8. This is because  'banana...' looks better than
              'bannana!...'
              NOTE. This may not work with super super super long words
              Have not tried and don't see why anyone would do this.
              */}
              {this.props.node.excerpt.length > 105
                ? this.props.node.excerpt.indexOf(" ", 105) === -1
                  ? this.props.node.excerpt
                  : /^[a-z]+$/i.test(
                      this.props.node.excerpt[this.props.node.excerpt.indexOf(" ", 105) - 1]
                    )
                    ? this.props.node.excerpt.substring(
                        0,
                        this.props.node.excerpt.indexOf(" ", 105)
                      ) + "..."
                    : this.props.node.excerpt.substring(
                        0,
                        this.props.node.excerpt.indexOf(" ", 105)
                      )
                : this.props.node.excerpt}
            </p>
            <div className="dots">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </Link>
        <Img fluid={this.props.node.frontmatter.image.childImageSharp.fluid} className="img" />
      </div>
    );
  }
}
