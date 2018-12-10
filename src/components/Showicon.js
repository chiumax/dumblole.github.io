import React from "react";

export default ({ choose, codeOnFocus, codeContent, flippedProps }) =>
  Object.keys(codeContent).map(key =>
    codeOnFocus === key ? (
      <div
        {...flippedProps}
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
