import React from "react";

export default ({ choose, codeOnFocus, codeContent }) =>
  Object.keys(codeContent).map(key => (
    <div
      onClick={() => {
        choose(key);
      }}
    >
      RETARD
    </div>
  ));
