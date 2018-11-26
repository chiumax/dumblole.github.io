import React from "react";
import twitter from "../images/twitter-brands.svg";
import envelope from "../images/envelope.svg";

export default () => (
  <div className="contact">
    <div className="contactDivWrap">
      <div className="contactWrap">
        <i src={twitter} alt="twitter" className={"ContactImg"} />
      </div>
      <div className="contactReveal" />
    </div>
  </div>
);
