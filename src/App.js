import React, { useState, useMemo, useEffect, useRef } from "react"
import Cards from "./Cards"
import Score from "./Score"
import ResetBtn from "./components/reset-btn"
import "./App.css"

function App() {
  return (
    <main>
      <div className="top-bar">
        <Score />
        <h1 className="title">TAROT MEMORY</h1>
      </div>
      <Cards />
      <ResetBtn />
    </main>
  )
}

export default App
