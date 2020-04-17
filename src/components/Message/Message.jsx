import React from "react"

import "./Message.css"
import LilyPhoto from "../LilyPhoto/LilyPhoto"

const Message = () => {
  return (
    <section className="message">
      <h1 className="message__heading">
        Unfortunately, We're Postponing Lily's Birthday party
      </h1>
      <LilyPhoto />
      <p className="message__text">
        During these unprecendented times, we have indefnitely suspended the
        birthday party for our little baby Lily.
      </p>
    </section>
  )
}

export default Message
