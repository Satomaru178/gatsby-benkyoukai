import * as React from "react"
import { Header } from "../../components/header";
import { Button } from "react-bootstrap";

function Sample() {
  return (
    <>
      <Header title="タイトル" author="吉村">
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
