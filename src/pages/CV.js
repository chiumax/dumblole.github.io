import React from "react";

import Layout from "../components/layout";
const json = require("./cv/cv.json");

export default ({ data }) => {
  return (
    <div className={"cvWrap content-container"}>
      {console.log(json)}

      {json.data.map(item => {
        return (
          <div key={item.name} className={"cvSectionWrap"}>
            <div className={"cvSection"}>
              <div className={"cvColumn"}>
                <div className={"cvName"}>{item.name}</div>
              </div>
              <div className={"cvColumn"}>
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
                          {entry.details.map(text => {
                            return <div>{text}</div>;
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className={"cvColumn"} /> */}
            </div>
          </div>
        );
      })}
      {console.log(data.allMarkdownRemark.edges[0])}
    </div>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { title: { eq: "cv" } } }) {
      edges {
        node {
          html
        }
      }
    }
  }
`;
