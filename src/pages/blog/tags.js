import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import kebabCase from 'lodash/kebabCase';
import Link from 'gatsby-link';

export default class Tags extends React.Component {
  render() {
    const tags = this.props.data.allMarkdownRemark.group;
    return (
      <Layout>
        <div>
        <Link to={`/blog/`}>Back </Link>
          <ul className="tags__list">
            {tags.map(tag => (
              <li key={tag.fieldValue} className="tags__list-item">
                <Link
                  to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}
                  className="tags__list-item-link"
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "blog" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
