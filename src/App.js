import React, { useState, useMemo, useEffect, useRef } from "react"
import Cards from "./Cards"
import Score from "./Score"
import "./App.css"

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [shadow, setShadow] = useState()

  const handleCurrentScore = score => {
    setCurrentScore(score)
  }

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  }, [currentScore])

  return (
    <main>
      <div className="top-bar">
        <Score currentScore={currentScore} bestScore={bestScore} />
        <h1 className="title">TAROT MEMORY</h1>
      </div>
      <Cards handleCurrentScore={handleCurrentScore} shadow={shadow} />
    </main>
  )
}

export default App
