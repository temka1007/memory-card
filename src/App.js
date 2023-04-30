import React, { useState, useMemo, useEffect, useRef } from "react"
import Cards from "./Cards"
import Score from "./Score"
import ResetBtn from "./components/reset-btn"
import "./App.css"

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const [shadow, setShadow] = useState()
  const [hover, setHover] = useState("#ffffffad")

  const handleCurrentScore = score => {
    setCurrentScore(score)
  }

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore)
    }
  }, [currentScore])

  const loseShadowColor = () => {
    setShadow()
  }

  return (
    <main>
      <div className="top-bar">
        <Score currentScore={currentScore} bestScore={bestScore} />
        <h1 className="title">TAROT MEMORY</h1>
      </div>
      <Cards handleCurrentScore={handleCurrentScore} shadow={shadow} />
      <ResetBtn />
    </main>
  )
}

export default App
//  #ff0000b7
