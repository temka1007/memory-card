import React, { useState, useMemo, useEffect, useRef } from "react"

const Card = ({ src, id, shuffleOnClick, compare }) => {
  const handleClick = e => {
    shuffleOnClick()
    compare(e.target.getAttribute("data-id"))
    console.log(e.target.getAttribute("data-id"))
  }

  return (
    <div
      style={{
        background: `url(${require(`../${src}`)}) no-repeat center/cover`,
      }}
      onClick={handleClick}
      data-id={id}
    ></div>
  )
}

export default Card
