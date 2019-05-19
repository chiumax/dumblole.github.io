import React from "react";
import { Link } from "gatsby";

export default () => (
  <div className={"content-container lostContainer"}>
    <div className={"lostTitle"}>404</div>
    <div>Who's There?</div>
    <div className={"lostTitle"}>🗺️</div>
    <div>Looks like you're lost, adventurer!</div>
    <div>
      Let's guide you back. Just click{" "}
      <Link className="lostLink" to={`/`}>
        here
      </Link>
      .
    </div>
  </div>
);
