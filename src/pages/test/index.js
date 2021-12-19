import * as React from "react"
import { graphql } from "gatsby";
import { Header } from "../../components/header";
import { Button } from "react-bootstrap";

function Sample({data}) {
  return (
    <>
      <Header title={data.site.siteMetadata.title} author="吉村">
        <p>今日はいい日だった</p>
        <p>今日はいい日だった</p>
        <p>今日はいい日だった</p>
      </Header>
      <Button variant="primary">
        Primary btn
      </Button>
    </>
  )
}

export default Sample

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
