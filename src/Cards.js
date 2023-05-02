import React, { useState, useMemo, useEffect, useRef } from "react"
import Card from "./components/Card"
import Tilt from "react-parallax-tilt"
import ResetBtn from "./components/reset-btn"

const cardData = [
  {
    id: "astaroth",
    src: "assets/astaroth.png",
  },
  {
    id: "binah",
    src: "assets/binah.png",
  },
  {
    id: "hod",
    src: "assets/hod.png",
  },
  {
    id: "chagidiel",
    src: "assets/chagidiel.png",
  },
  {
    id: "chesed",
    src: "assets/chesed.png",
  },
  {
    id: "chokmah",
    src: "assets/chokmah.png",
  },
  {
    id: "geburah",
    src: "assets/geburah.png",
  },
  {
    id: "golab",
    src: "assets/golab.png",
  },
  {
    id: "netzach",
    src: "assets/netzach.png",
  },
  {
    id: "samael",
    src: "assets/samael.png",
  },
  {
    id: "thaumiel",
    src: "assets/thaumiel.png",
  },
  {
    id: "sathariel",
    src: "assets/sathariel.png",
  },
]

const shuffle = arr => {
  return [...arr].sort(() => Math.random() - 0.5)
}

const Cards = ({ handleCurrentScore, shadow }) => {
  const [cards, setCards] = useState(cardData)
  const [chosenCards, setChosenCards] = useState([])
  const [deg, setDeg] = useState("0")
  const [lose, setLose] = useState("the-front")

  const shuffleOnClick = () => {
    const shuffledCards = shuffle(cards)
    setCards(shuffledCards)
  }

  const resetChosenCards = () => {
    handleCurrentScore(0)
    setChosenCards([])
  }

  const compare = newCard => {
    if (chosenCards.includes(newCard)) {
      setLose("lose")
      setTimeout(() => {
        alert("GAME OVER")
        handleCurrentScore(0)
        setChosenCards([])
        setLose("the-front")
      }, 1000)
    } else {
      const newArr = [...chosenCards, newCard]
      setChosenCards(newArr)
      handleCurrentScore(newArr.length)
      if (newArr.length === 12) {
        alert("YOU WIN")
        handleCurrentScore(12)
        handleRotate("180")
        resetChosenCards()
        setTimeout(() => {
          shuffleOnClick()
        }, 500)
        setTimeout(() => {
          handleRotate("0")
        }, 1000)
      }
    }
  }

  const handleRotate = value => {
    setDeg(value)
  }

  return (
    <>
      <div className="card-container">
        {cards.map(data => (
          <Tilt key={data.id}>
            <Card
              src={data.src}
              key={data.id}
              id={data.id}
              shuffleOnClick={shuffleOnClick}
              compare={compare}
              handleRotate={handleRotate}
              deg={deg}
              lose={lose}
            />
          </Tilt>
        ))}
      </div>
      <ResetBtn
        resetChosenCards={resetChosenCards}
        shuffleOnClick={shuffleOnClick}
        handleRotate={handleRotate}
      />
    </>
  )
}

export default Cards
