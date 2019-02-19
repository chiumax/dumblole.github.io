import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Content from "../components/aboutContent";

import Javascript from "../icons/javascript.svg";
import Java from "../icons/java.svg";
import NodeJS from "../icons/node.svg";
import Sass from "../icons/sass.svg";
import Python from "../icons/python.svg";
import ReactIcon from "../icons/preact.svg";
import CSS3 from "../icons/css3.svg";
import HTML5 from "../icons/html5.svg";
import Premiere from "../icons/pp.svg";
import AfterE from "../icons/ae.svg";

import GamePad from "../icons/gamepad.svg";
import CodeIcon from "../icons/code.svg";
import TvIcon from "../icons/tv.svg";
var _ = require("lodash");

const editContent = {};

export default class About extends React.Component {
  state = {
    one: "myself",
    two: "coding",
    three: "gaming",
    four: "editing",
    current: "code",
    classone: "",
    classtwo: "",
    classthree: "",
    classfour: "",
    listState: "list__ul",
    codeOnFocus: null,
    SVGcontent: {
      GamePad: <GamePad className={"greenIntIcon"} />,
      CodeIcon: <CodeIcon className={"pinkIntIcon"} />,
      TvIcon: <TvIcon className={"blueIntIcon"} />
    },
    codeContent: [
      {
        icon: <Python className={"icon"} />,
        content: `Python, my first real programming language (Had been playing around with Scratch and
    Alice in school), I was "taught" this language in 8th grade. Although I can't argue
    that this class didn't fuel my interest in programming, I had a pretty difficult time
    with this language starting out. Because the curriculum wasn't designed well, it was
    difficult to learn many concepts and develop a way of thinking that is required to be
    a good programmer. A lot of the journey is discovering on your own. Now that I have
    learned other languages and other programming things, I hope to return to python again
    soon to work in Artificial Intelligence.`,
        color: "black",
        border: "black",
        name: "Python",
        star: 0,
        skillArea: ["code"]
      },
      {
        icon: <Sass className={"icon"} />,
        content: `SCSS, basically CSS but with a lot helpful features added, also allows you to use
    vanilla CSS. CSS is something that isn't hard to understand, but in my opinion, it is
    hard to master. Everything you see on my website is the result of SCSS/CSS styling.
    Evidently, I still have ways to go.`,
        color: "black",
        border: "black",
        name: "Sass",
        star: 0,
        skillArea: ["code"]
      },
      {
        icon: <ReactIcon className={"icon"} />,
        content: `Learning Javscript was difficult for me because I really didn't know where to start.
    ReactJS was something that I kept hearing over and over when learning Javascript.
    Although I haven't worked with Angular or Vue yet, I've enjoyed my time working with
    React. A big part of learning react was also learning HTML, CSS, webpack, babel, and
    working with multiple files.`,
        color: "black",
        border: "black",
        name: "React",
        star: 0,
        skillArea: ["code"]
      },
      {
        icon: <NodeJS className={"icon"} />,
        content: `I don't think I do much with NodeJS. I just know that it lets me install and use
    packages and that it's helpful. I put it here to make me look good... Does it make me
    look good?`,
        color: "black",
        border: "black",
        name: "Node",
        star: 0,
        skillArea: ["code"]
      },
      {
        icon: <Java className={"icon"} />,
        content: `I'm learning Java this year (10th grade) in school. My teacher there is a fucking
    legend. I really wish I had him as a teacher earlier. Though I don't find Java as
    riveting. I haven't really found a use case where I would need to know Java, but I
    guess it's something different. My first OOP. I have found that the whole brackets and
    defining variables deal to be pretty similar to Javascript.`,
        color: "black",
        border: "black",
        name: "Java",
        star: 0,
        skillArea: ["code"]
      },
      {
        icon: <Javascript className={"icon"} />,
        content: `I started to learn this language in the summer at the end of 9th grade (high school
    whooo). Along with Javascript came about a bunch of other terms: Angular, React, Vue,
    object destructuring, computed property names. Self-learning this was a PAIN in the
    ass. I started to learn javascript because I wanted to build myself a website (this
    website!). From what I've heard, people either really like JS or hate it. I happen to
    really like it. It's a really flexible language and that may be a good thing or a bad
    thing.`,
        color: "black",
        border: "black",
        name: "Javascript",
        star: 0,
        skillArea: ["code", "edit"]
      },
      {
        icon: <HTML5 className={"icon"} />,
        content: `I don't think HTML is a language but some employers don't know the difference, so here it is... I know HTML! Hire me! heh...`,
        color: "black",
        border: "black",
        name: "HTML",
        star: 0,
        skillArea: ["code"]
      },
      {
        icon: <CSS3 className={"icon"} />,
        content: `Yes, I know SCSS and I know CSS too. Amazing, right?`,
        color: "black",
        border: "black",
        name: "CSS",
        star: 0,
        skillArea: ["code"]
      },
      {
        icon: <Premiere className={"icon"} />,
        content: "yeet",
        color: "black",
        border: "black",
        name: "Premiere Pro",
        star: 0,
        skillArea: ["edit"]
      },
      {
        icon: <AfterE className={"icon"} />,
        content: "yeet",
        color: "black",
        border: "black",
        name: "After Effects",
        star: 0,
        skillArea: ["edit"]
      }
    ],
    clickedElement: null
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
    return (
      <Content
        type={this.state.current}
        pic={obj}
        codeOnFocus={this.state.codeOnFocus}
        codeContent={this.state.codeContent}
        SVGcontent={this.state.SVGcontent}
        choose={this.choose}
        shuffle={this.shuffleList}
        current={this.state.current}
        clickExpand={this.clickExpand}
        clickedElement={this.clickedElement}
      />
    );
  };
  clickExpand = element => {
    this.setState(prev => ({
      clickedElement: element
    }));
  };
  shuffleList = select => {
    //this.setState(prev => ({ codeContent: _.shuffle(prev.codeContent) }));
    this.setState(prev => ({
      codeContent: prev.codeContent.sort((a, b) => {
        if (prev.current === "" && select === "") {
          return 0;
        }
        return a.skillArea.includes(select) ? -1 : 1;
      }),
      current: select
    }));
  };
  choose = select => {
    this.setState(prev => ({ codeOnFocus: prev.codeOnFocus == select ? null : select }));
  };

  render() {
    return <Layout>{this.mapPic()}</Layout>;
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
            fluid(quality: 99) {
              ...GatsbyImageSharpFluid
            }
          }
          relativePath
        }
      }
    }
  }
`;
// <div className="list">
//               <span
//                 className="placeholder"
//                 onClick={() => {
//                   this.focus();
//                 }}
//               >
//                 {this.state.current}
//               </span>
//               <ul className={this.state.listState}>
// <li
//   onClick={() => {
//                     this.selectChoice("one");
//                   }}
//                   className={this.state.classone}
//                 >
//                   <a href="">{this.state.one}</a>
//                 </li>
//                 <li
//                   onClick={() => {
//                     this.selectChoice("two");
//                   }}
//                   className={this.state.classtwo}
//                 >
//                   <a href="">{this.state.two}</a>
//                 </li>
//                 <li
//                   onClick={() => {
//                     this.selectChoice("three");
//                   }}
//                   className={this.state.classthree}
//                 >
//                   <a href="">{this.state.three}</a>
//                 </li>
//                 <li
//                   onClick={() => {
//                     this.selectChoice("four");
//                   }}
//                   className={this.state.classfour}
//                 >
//                   <a href="">{this.state.four}</a>
//                 </li>
//               </ul>
//             </div>
//             .
//           </div>
