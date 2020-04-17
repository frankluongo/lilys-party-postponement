import React from "react"
import Img from "gatsby-image"

import "./LilyPhoto.css"
import useLilyPhoto from "../../hooks/useLilyPhoto"

const LilyPhoto = () => {
  const imageData = useLilyPhoto()
  return (
    <div className="lily-photo-wrapper">
      <Img fluid={imageData} alt="Lily Luongo" />
    </div>
  )
}

export default LilyPhoto
