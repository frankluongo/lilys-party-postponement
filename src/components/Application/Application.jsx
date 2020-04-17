import React from "react"

import SEO from "../seo"

import "./Application.css"
import Wrapper from "../Wrapper"
import Message from "../Message"

const Application = () => {
  return (
    <main>
      <SEO title="Home" />
      <Wrapper>
        <Message />
      </Wrapper>
    </main>
  )
}

export default Application
