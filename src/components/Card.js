import React, { useState, useMemo, useEffect, useRef } from "react"

const Card = ({
  src,
  id,
  shuffleOnClick,
  compare,
  handleRotate,
  deg,
  lose,
}) => {
  const handleClick = e => {
    compare(e.target.getAttribute("data-id"))
    setTimeout(() => {
      shuffleOnClick()
    }, 500)
    setTimeout(() => {
      handleRotate("0")
    }, 1000)
  }

  return (
    <div className="main-container">
      <div
        className="card"
        style={{ transform: `rotateY(${deg}deg)` }}
        onClick={() => {
          handleRotate("180")
        }}
      >
        <div
          className={lose}
          style={{
            background: `url(${require(`../${src}`)}) no-repeat center/cover`,
          }}
          onClick={handleClick}
          data-id={id}
        ></div>
        <div
          className="the-back"
          style={{
            background: `url(${require("../assets/back.png")}) no-repeat center/cover`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default Card
