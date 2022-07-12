import React from "react"
import shuffleArray from "shuffle-array"
import he from 'he'
import Answers from "./Answers"

export default function Questions(props) {
  const { gamePoints, setGamePoints, gameOver, setGameOver } = props

  const data = props.questions.map(question => {
    return {
      id: question.id,
      question: question.question,
      correct_answer: question.correct_answer,
      answers: shuffleArray(question.answers),
      playerAnswer: "",
      isCorrect: "no data",
    }
  })

  const [questionState, setQuestionState] = React.useState(data)


  const questions = questionState.map(item => {

    return (
      <div key={item.id} id={item.id} className="container-question">
        <h2 className="question-title">{he.decode(item.question)}</h2>

        <Answers
          gameOver={gameOver}
          questionId={item.id}
          all_answers={item.answers}
          correct_answer={item.correct_answer}
          setQuestionState={setQuestionState}
          isCorrect={item.isCorrect}
        />

      </div>
    )
  })

  function checkAnswers() {
    setGameOver(true)
    questionState.map(question => {
      if (question.correct_answer === question.playerAnswer) {
        setGamePoints(prev => prev + 1)
        question.isCorrect = true
      } else {
        question.isCorrect = false
      }
    })
  }

  function refresh() {
    window.location.reload();
  }


  return (
    <>
      <h1>Quizzical</h1>
      <div className="container-quizz">
        {questions}
        {gameOver ? <p className="points">Correct answers: {gamePoints} / 10</p> : ""}
        <button className="check-btn" onClick={gameOver ? refresh : checkAnswers}>{gameOver ? "New Game" : "Check answers"}</button>
      </div>
    </>
  )
}
