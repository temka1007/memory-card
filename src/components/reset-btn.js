import React, { useState, useMemo, useEffect, useRef } from "react"

const ResetBtn = ({ resetChosenCards, shuffleOnClick, handleRotate }) => {
  const handleClick = () => {
    handleRotate("180")
    resetChosenCards()
    setTimeout(() => {
      shuffleOnClick()
    }, 500)
    setTimeout(() => {
      handleRotate("0")
    }, 1000)
  }

  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "r" || "R") {
        handleClick()
      }
    }

    window.addEventListener("keypress", handleKeyPress)

    return () => {
      window.removeEventListener("keypress", handleKeyPress)
    }
  }, [])

  return (
    <button className="reset-button" onClick={handleClick}>
      <span className="material-symbols-outlined">restart_alt</span>&nbsp; Press{" "}
      <span className="R"> &nbsp;R &nbsp;</span> to reset
    </button>
  )
}

export default ResetBtn
