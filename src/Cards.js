import React, { useState, useMemo, useEffect, useRef } from "react"
import Card from "./components/Card"

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

const Cards = ({ handleCurrentScore }) => {
  const [cards, setCards] = useState(cardData)
  const [chosenCards, setChosenCards] = useState([])

  const shuffleOnClick = () => {
    const shuffledCards = shuffle(cards)
    setCards(shuffledCards)
  }

  const compare = newCard => {
    if (chosenCards.includes(newCard)) {
      alert("GAME OVER")
      handleCurrentScore(0)
      setChosenCards([])
    } else {
      const newArr = [...chosenCards, newCard]
      setChosenCards(newArr)
      handleCurrentScore(newArr.length)
    }
  }

  console.log(chosenCards)

  return (
    <div className="card-container">
      {cards.map(data => (
        <Card
          src={data.src}
          key={data.id}
          id={data.id}
          shuffleOnClick={shuffleOnClick}
          compare={compare}
        />
      ))}
    </div>
  )
}

export default Cards
