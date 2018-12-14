import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import "normalize.css";
import "../styles/styles.scss";

//import { rhythm } from "../utils/typography";

export default ({ children }) => (
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
      <div className="">
        <div className="">
          <div className="headerLinkWrap">
            <div>
              <Link className="linke" to={`/`}>
                DUMBLOLE
              </Link>
            </div>

            <div>
              <Link className="link" to={`/project/`}>
                Projects
              </Link>
              <Link className="link" to={`/blog/`}>
                Blogs
              </Link>
              <Link className="link" to={`/skills/`}>
                Skills
              </Link>
              <Link className="link" to={`/about/`}>
                About
              </Link>
            </div>
          </div>
          <div className={""}>
            <div className=" ">{children}</div>
          </div>
        </div>
      </div>
    )}
  />
);
// // === Variables =====
// $perspective:     60rem;
// $font-size:       4.25rem;
// $split-position:  49%;
// $split-thickness: 4px;
// $split-color:     #FF2C75;

// // === Settings =====
// %font-settings {
//   font-family: "Gilroy ExtraBold", system-ui, sans-serif;
//   font-style: normal;
//   font-weight: normal;
//   -webkit-font-smoothing: antialiased;
//   -webkit-font-kerning: normal;
//   -webkit-text-size-adjust: 100%;
// }

// // === Codepen Setup =====
// html,
// body {
//   width: 100vw;
//   height: 100vh;
// }
// body {
//   @extend %font-settings;
//   background: linear-gradient(45deg, #02001F,#1F1B4E);
//   transform-style: preserve-3d;
//   transform: perspective($perspective);
//   position: fixed;
//   display: flex;
//   align-items: center;
//   justify-content: center; 
// }

// // === Menu <ul> =====
// .Menu-list {
//   font-size: $font-size;
//   line-height: 1.2;
//   text-transform: uppercase;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   transform: rotateX(-10deg) rotateY(20deg); // overwritten by JS
// }

// // === Menu item =====
// .Menu-list-item {
//   position: relative;
//   color: transparent;
//   cursor: pointer;
  
//   // === Split Line =====
//   &::before {
//     content: '';
//     display: block;
//     position: absolute;
//     top: $split-position;
//     left: -10%;
//     right: -10%;
//     height: $split-thickness;
//     border-radius: $split-thickness;
//     margin-top: -($split-thickness / 2);
//     background: $split-color;
//     transform: scale(0);
//     transition: transform .8s cubic-bezier(.16,1.08,.38,.98);
//     z-index: 1;
//   }
// }

// // === Top/bottom mask =====
// .Mask {
//   display: block;
//   position: absolute;
//   overflow: hidden;
//   color: $split-color;
//  background: green;
//   height: 170%;
//   transition: all .8s cubic-bezier(.16,1.08,.38,.98);
//   transform: rotate(-45deg);
//   span { display: block; }
// }
// .Laks{
//   position: absolute;
//   top:0;
//    transform: translateX(-110px) rotate(-45deg) ;
//   span{transform: rotate(45deg) translateX(110px);}
// }
// // === Bottom mask specific =====
// .Mask + .Mask {
//  bottom: -119%;
//  transform: translateX(10px) translateY(15px) rotate(-45deg) ;
  
//   span { transform:  rotate(45deg) translateY(-$split-position) translateX(-10px); }
// }

// // === Where the fun stuff happens =====
// .Menu-list-item:hover,
// .Menu-list-item:active {
//   .Mask { color: #FFF; transform: skewX(12deg) translateX(5px); }
//   .Mask + .Mask { transform: skewX(12deg) translateX(-5px); }
//   &::before { transform: scale(1); }
// }