import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import SVG_Blue from './components/SVG-blue'
import SVG_Yellow from './components/SVG-yellow'
import Intro from './components/Intro'
import Settings from './components/Settings'
import Questions from './components/Questions'

export default function App() {

  const [questionData, setQuestionData] = useState([])

  const [game, setGame] = useState({
    pageView: 'index',
    isOver: false,
    points: 0,
  })

  const [formData, setFormData] = useState({
    category: "",
    difficulty: "",
  })

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
  }, [formData])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function displaySettings() {
    setGame(prevState => {
      return {
        ...prevState,
        pageView: 'settings',
      }
    })
  }

  function displayQuestions() {
    setGame(prevState => {
      return {
        ...prevState,
        pageView: 'questions',
      }
    })
  }

  function endGame() {
    setGame(prevState => {
      return {
        ...prevState,
        isOver: true,
      }
    })
  }

  function countPoints() {
    setGame(prevState => {
      return {
        ...prevState,
        points: prevState.points + 1,
      }
    })
  }

  function clearState() {
    setGame(prevState => prevState = {
      pageView: 'index',
      isOver: false,
      points: 0,
    })
    setFormData(prevState => prevState = {
      category: "",
      difficulty: "",
    })
    setQuestionData([])
  }

  return (
    <>
      <SVG_Yellow />
      {game.pageView === 'index' &&
        <Intro
          displaySettings={displaySettings}
        />}
      {game.pageView === 'settings' &&
        <Settings
          formData={formData}
          handleChange={handleChange}
          displayQuestions={displayQuestions}
        />}
      {game.pageView === 'questions' &&
        <Questions
          game={game}
          questions={questionData}
          endGame={endGame}
          countPoints={countPoints}
          clearState={clearState}
        />}
      <SVG_Blue />
    </>
  )
}
