import * as React from "react";
import { titleStyle } from "./header.module.css";

// コンポーネント
export function Header(props) {
  const { title, author, children} = props

  return (
    <div>
      <h1 className={titleStyle}>{title}</h1>
      <h2>著者：{author}</h2>
      {children}
    </div>
  )
}
