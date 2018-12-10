import React from "react";

export default ({ choose, codeOnFocus, codeContent, flippedProps }) =>
  Object.keys(codeContent).map(key => (
    <div
      {...flippedProps}
      key={key}
      className={"singleIcon"}
      onClick={() => {
        choose(key);
      }}
    >
      <div>{codeContent[key].icon}</div>
      <div>{codeContent[key].name}</div>
    </div>
  ));
