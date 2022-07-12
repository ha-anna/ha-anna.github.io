import React from 'react'
import { nanoid } from 'nanoid'
import SVG_Blue from './components/SVG-blue'
import SVG_Yellow from './components/SVG-yellow'
import Intro from './components/Intro'
import Settings from './components/Settings'
import Questions from './components/Questions'

export default function App() {
  const [displaySettings, setDisplaySettings] = React.useState(false)
  const [displayQuestions, setDisplayQuestions] = React.useState(false)
  const [gameStart, setGameStart] = React.useState(false)
  const [questionData, setQuestionData] = React.useState([]);
  const [gamePoints, setGamePoints] = React.useState(0)
  const [gameOver, setGameOver] = React.useState(false)
  const [formData, setFormData] = React.useState(
    {
      category: "",
      difficulty: "",
    }
  )

  React.useEffect(() => {
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
  }, [gameStart])



  function handleChange(event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
    setGameStart(true)
  }


  return (
    <>
      <SVG_Yellow />

      {!displaySettings &&
        <Intro
          state={displaySettings}
          setState={setDisplaySettings}
        />}

      {displaySettings &&
        !displayQuestions &&
        <Settings
          formData={formData}
          handleChange={handleChange}
          setState={setDisplayQuestions}
        />}

      {displaySettings &&
        displayQuestions &&
        <Questions
          questions={questionData}
          gamePoints={gamePoints}
          setGamePoints={setGamePoints}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />}

      <SVG_Blue />
    </>
  )
}
