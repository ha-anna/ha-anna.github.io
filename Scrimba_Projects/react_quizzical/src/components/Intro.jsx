import React from "react";

export default function Intro(props) {
  const { state, setState } = props

  function displaySettings() {
    setState(prevState => !prevState)
  }

  return (
    <div className="container-intro">
      <h1>Quizzical</h1>
      <p className="description">Test your knowledge, if you dare!</p>
      <button type="button" className="start-btn" onClick={displaySettings}>Start Quizz</button>
    </div>
  )
}