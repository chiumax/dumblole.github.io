import React from "react";

export default ({ choose, codeOnFocus, codeContent }) =>
  Object.keys(codeContent).map(key =>
    codeOnFocus === key ? (
      <div
        key={key}
        onClick={() => {
          choose(key);
        }}
      >
        {codeContent[key].icon}
        <div>{codeContent[key].content}</div>
      </div>
    ) : (
      <div>we</div>
    )
  );
