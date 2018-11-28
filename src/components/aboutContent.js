import React from "react";

import Img from "gatsby-image";

export default ({ type, pic }) => {
  console.log(pic, "hiasdhifhasif");
  switch (type) {
    case "myself":
      return (
        <div>
          <div className={"aboutTitle"}>ME</div>
          <Img fluid={pic.b} />
        </div>
      );
    case "coding":
      return (
        <div>
          <div className={"aboutTitle"}>CODING</div>
        </div>
      );
    case "gaming":
      return (
        <div>
          <div className={"aboutTitle"}>GAMING</div>
        </div>
      );
    case "editing":
      return (
        <div>
          <div className={"aboutTitle"}>EDITING</div>
        </div>
      );
    default:
      return null;
  }
};
