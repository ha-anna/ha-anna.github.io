import React, { useState } from 'react'
import shuffleArray from 'shuffle-array'
import { decode } from 'html-entities'
import Answers from './Answers'

export default function Questions({ game, questions, endGame, countPoints, clearState }) {

  const data = questions.map((question) => {
    return {
      number: questions.indexOf(question) + 1,
      id: question.id,
      question: question.question,
      correct_answer: question.correct_answer,
      answers: shuffleArray(question.answers),
      playerAnswer: "",
      isCorrect: "no data",
    }
  })

  const [questionState, setQuestionState] = useState(data)

  const questionsHtml = questionState.map(item => {
    return (
      <div key={item.id} id={item.id} className="container-question">
        <h2 className="question-title">{item.number}. {decode(item.question)}</h2>
        <Answers
          isGameOver={game.isOver}
          questionId={item.id}
          all_answers={item.answers}
          correct_answer={item.correct_answer}
          savePickedAnswers={savePickedAnswers}
          isCorrect={item.isCorrect}
        />
      </div>
    )
  })

  function savePickedAnswers(idQuestion, answer) {
    setQuestionState(questions => {
      return questions.map(question => {
        return question.id === idQuestion ?
          {
            ...question,
            playerAnswer: answer,
          } :
          question
      })
    })
  }

  function checkAnswers() {
    endGame()
    questionState.map(question => {
      if (question.correct_answer === question.playerAnswer) {
        countPoints()
        question.isCorrect = true
      } else {
        question.isCorrect = false
      }
    })
  }

  return (
    <>
      <h1>Quizzical</h1>
      <div className="container-quiz">
        <p className="quiz-description">Out of 10 questions, how many will you get right? Let's find out!</p>
        {questionsHtml}
        {game.isOver ? <p className="points">Correct answers: {game.points} / 10</p> : ""}
        <button className="check-btn" onClick={game.isOver ? clearState : checkAnswers}>{game.isOver ? "New Game" : "Check answers"}</button>
      </div>
    </>
  )
}
