import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import SVG_Blue from './components/SVG-blue'
import SVG_Yellow from './components/SVG-yellow'
import Intro from './components/Intro'
import Settings from './components/Settings'
import Questions from './components/Questions'

export default function App() {
  const [questionData, setQuestionData] = useState([]);
  const initialGameState = {
    pageView: 'index',
    isStarted: false,
    isOver: false,
    points: 0,
  }
  const [game, setGame] = useState(initialGameState)
  const [formData, setFormData] = useState(
    {
      category: "",
      difficulty: "",
    }
  )

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestionData(data.results.map(item => {
        const { question, correct_answer, incorrect_answers } = item
        return {
          id: nanoid(),
          question: question,
          correct_answer: correct_answer,
          answers: [...incorrect_answers, correct_answer],
        }
      })))
  }, [game.isStarted])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
    setGame(prevState => {
      return {
        ...prevState,
        isStarted: !prevState.isStarted,
      }
    })
  }

  return (
    <>
      <SVG_Yellow />
      {game.pageView === 'index' &&
        <Intro
          setGame={setGame}
        />}
      {game.pageView === 'settings' &&
        <Settings
          formData={formData}
          handleChange={handleChange}
          setGame={setGame}
        />}
      {game.pageView === 'questions' &&
        <Questions
          questions={questionData}
          game={game}
          setGame={setGame}
        />}
      <SVG_Blue />
    </>
  )
}
