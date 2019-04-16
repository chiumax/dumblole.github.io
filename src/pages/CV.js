import React from "react";

import Layout from "../components/layout";
const json = require("./cv/cv.json");

export default () => {
  return (
    <div className={"cvWrap content-container"}>
      {json.data.map(item => {
        return (
          <div key={item.name} className={"cvSectionWrap"}>
            <div className={"cvSection"}>
              <div className={"cvColumn"}>
                <div className={"cvName"}>{item.name}</div>
              </div>
              <div className={"cvColumnRight"}>
                <div className={"cvItemsContainer"}>
                  {item.items.map(entry => {
                    return (
                      <div className={"cvItems"}>
                        <div className={"cvColumns"}>
                          <div className={"cvTitle"}>
                            {entry.title.map(text => {
                              return <div>{text}</div>;
                            })}
                          </div>
                          <div className={"cvDate"}>
                            {entry.date.map(text => {
                              return <div>{text}</div>;
                            })}
                          </div>
                        </div>
                        <div className={"cvDetails"}>
                          {entry.details.map((element, index) => {
                            let details = entry.details;
                            let nextelement = "";
                            let prevelement = "";
                            if (index + 1 < details.length) {
                              nextelement = details[index + 1];
                            }
                            if (index > 0) {
                              prevelement = details[index - 1];
                            }
                            if (
                              nextelement.indexOf("http://") === 0 ||
                              nextelement.indexOf("https://") === 0
                            ) {
                              return (
                                <span>
                                  &nbsp;
                                  <a href={nextelement} target="_blank">
                                    {element}
                                  </a>
                                  &nbsp;
                                </span>
                              );
                            } else if (
                              !(
                                element.indexOf("http://") === 0 || element.indexOf("https://") == 0
                              )
                            ) {
                              if (
                                !(
                                  prevelement.indexOf("http://") === 0 ||
                                  prevelement.indexOf("https://") === 0
                                )
                              ) {
                                return [<div className={"cvDivide"} />, <span>{element}</span>];
                              }
                              return <span>{element}</span>;
                            }
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
