import React from "react"
import BackgroundImage from "gatsby-background-image"

import usePattern from "../../hooks/usePattern"

import "./Wrapper.css"

const Wrapper = ({ children }) => {
  const imageData = usePattern()
  return (
    <section className="wrapper">
      <BackgroundImage
        Tag="div"
        className="wrapper__background"
        fluid={imageData}
      >
        <div className="wrapper__inner">{children}</div>
      </BackgroundImage>
    </section>
  )
}

export default Wrapper
