import React, { useState, useMemo, useEffect, useRef } from "react"

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="score-container">
      <div className="current-score">
        <div>SCORE</div>
        <div className="icon-current">{currentScore}</div>
      </div>
      <div className="best-score">
        <div className="icon-best">{bestScore}</div>
        <div>BEST SCORE</div>
      </div>
    </div>
  )
}

export default Score
