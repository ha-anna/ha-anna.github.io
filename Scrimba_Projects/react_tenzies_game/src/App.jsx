import React from 'react'
import Die from './Die'

export default function App() {

  function allNewDice() {
    const dice = Array.from({ length: 10 }, () => Math.floor(Math.random() * 6 + 1));
    console.log(dice)
  }
  allNewDice()

  return (
    <>
      <div className='card'>
        <h1>Tenzies</h1>
        <p className="description">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dices">
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
          <Die value="1" />
        </div>
        <button type="button">Roll</button>
      </div>
      <p className="credit">Made with 🤍 by <a href="https://www.haanna.com" target="_blank">Ha Anna</a></p>
    </>
  )
}