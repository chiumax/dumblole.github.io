import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Content from "../components/aboutContent";

export default class About extends React.Component {
  state = {
    one: "myself",
    two: "coding",
    three: "gaming",
    four: "editing",
    current: "click me",
    classone: "",
    classtwo: "",
    classthree: "",
    classfour: "",
    listState: "list__ul"
  };

  selectChoice = type => {
    let classtype = "class" + type;
    if (this.state.current === "click me") {
      this.setState(prevstate => ({
        [classtype]: "blockChoice"
      }));
    }
    console.log(classtype, this.state.current === "click me");
    this.setState(prevState => ({
      [type]: prevState.current,
      current: this.state[type],
      listState: "list__ul"
    }));
  };
  focus = () => {
    if (this.state.listState === "list__ul active") {
      this.setState({ listState: "list__ul" });
      return;
    }
    this.setState({ listState: "list__ul active" });
    console.log(this.state.listState);
  };
  mapPic = () => {
    const obj = {};
    const data = this.props.data.allFile.edges;
    for (let i = 0; i < data.length; i++) {
      obj[data[i].node.name] = data[i].node.childImageSharp.fluid;
    }
    console.log(obj);
    return <Content type={this.state.current} pic={obj} />;
  };

  render() {
    return (
      <Layout>
        <div className={"aboutWrap"}>
          <div> Hey there! I'm dumblole but you can also call me Max.</div>
          <div>
            This is a page about me and I love{" "}
            <div className="list">
              <span
                className="placeholder"
                onClick={() => {
                  this.focus();
                }}
              >
                {this.state.current}
              </span>
              <ul className={this.state.listState}>
                <li
                  onClick={() => {
                    this.selectChoice("one");
                  }}
                  className={this.state.classone}
                >
                  <a href="">{this.state.one}</a>
                </li>
                <li
                  onClick={() => {
                    this.selectChoice("two");
                  }}
                  className={this.state.classtwo}
                >
                  <a href="">{this.state.two}</a>
                </li>
                <li
                  onClick={() => {
                    this.selectChoice("three");
                  }}
                  className={this.state.classthree}
                >
                  <a href="">{this.state.three}</a>
                </li>
                <li
                  onClick={() => {
                    this.selectChoice("four");
                  }}
                  className={this.state.classfour}
                >
                  <a href="">{this.state.four}</a>
                </li>
              </ul>
            </div>
            .
          </div>
        </div>
        {this.mapPic()}
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          children {
            id
          }
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`;
