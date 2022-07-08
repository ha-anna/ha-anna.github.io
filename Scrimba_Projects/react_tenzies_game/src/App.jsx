import React from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import Die from './Die'
import Stopwatch from './Stopwatch'

export default function App() {
  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [rollNum, setRollNum] = React.useState(0)

  React.useEffect(function () {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
      setTenzies(true)
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }
  }

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice
  }


  const diceElements = dice.map(die => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ))

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
      return die.isHeld ?
        die :
        generateNewDie()
    }))
    setRollNum(oldRollNum => oldRollNum + 1)
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ?
        { ...die, isHeld: !die.isHeld } :
        die
    }))
  }

  function newGame() {
    setDice(allNewDice())
    setTenzies(false)
    setRollNum(0)
  }

  return (
    <>
      <div className='card'>
        {tenzies && <Confetti />}
        <h1>Tenzies</h1>
        <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dices">
          {diceElements}
        </div>
        <button className="roll-btn" type="button" onClick={tenzies ? () => newGame() : () => rollDice()}>{tenzies ? "New Game" : "Roll"}</button>
        <p className="stats">Rolled: {rollNum} times</p>
        <div>
          <p className="stopwatch">Time: {<Stopwatch />}</p>
        </div>
      </div>
      <p className="credit">Made with 💜 by <a href="https://www.haanna.com" target="_blank">Ha Anna</a></p>
    </>
  )
}