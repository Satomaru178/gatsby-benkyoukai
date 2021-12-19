import * as React from 'react';
import { graphql } from 'gatsby';


function Sample({ data }) {
  console.log("data:", data);
  return (
    <>
      <h1>Hello world</h1>
      <ul>
        {data.allMarkdownRemark.nodes.map(function (node, index) {
          return (
            <li key={index}>{ node.frontmatter.title }</li>
          )
        })}
      </ul>
    </>
  );
}

export default Sample

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
        }
      }
    }
  }
`
