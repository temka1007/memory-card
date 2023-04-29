import React, { useState, useMemo, useEffect, useRef } from "react"

const Score = () => {
  return (
    <div className="score-container">
      <div className="current-score">
        <div>Score</div>
        <div>10</div>
      </div>
      <div className="best-score">
        <div>7</div>
        <div>Best Score</div>
      </div>
    </div>
  )
}

export default Score
