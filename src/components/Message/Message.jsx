import React from "react"

import "./Message.css"
import LilyPhoto from "../LilyPhoto/LilyPhoto"

const Message = () => {
  return (
    <section className="message">
      <h1 className="message__heading">Good times come to those who wait</h1>
      <LilyPhoto />
      <p className="message__text">
        Dear Family and Friends,
        <br />
        <br />
        Regrettably due to the current COVID-19 pandemic, we have decided to
        postpone Lily's 1st Birthday party until further notice. As much as we
        wish we could all celebrate together, nothing is more important to us
        than the safety and health of our beloved friends and family. We look
        forward to the day when we can all celebrate together with peace of
        mind. We will resend invitations when we decide to reschedule Lily's
        celebration.
        <br />
        <br />
        With love, <br />
        Paul, Kristin, and Lily
      </p>
    </section>
  )
}

export default Message
