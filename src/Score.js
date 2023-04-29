import React, { useState, useMemo, useEffect, useRef } from "react"

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="score-container">
      <div className="current-score">
        <div>Score</div>
        <div>{currentScore}</div>
      </div>
      <div className="best-score">
        <div>{bestScore}</div>
        <div>Best Score</div>
      </div>
    </div>
  )
}

export default Score
