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
      return <h1>YOTE</h1>;
    case "gaming":
      return <h1>YEART</h1>;
    case "editing":
      return <h1>YERT</h1>;
    default:
      return null;
  }
};
