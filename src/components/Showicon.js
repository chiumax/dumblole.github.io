import React from "react";

export default ({ choose, codeOnFocus, codeContent }) =>
  Object.keys(codeContent).map(key =>
    codeOnFocus === key ? (
      <div
        onClick={() => {
          choose(key);
        }}
      >
        what
      </div>
    ) : (
      <div>we</div>
    )
  );
