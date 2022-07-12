import React from "react";
import he from 'he'
import { nanoid } from "nanoid";

export default function Answers(props) {
  const { all_answers, questionId, setQuestionState, gameOver, isCorrect, correct_answer } = props

  const answers = all_answers.map(answer => {
    return {
      id: nanoid(),
      answer: answer,
      isPicked: false,
    }
  })

  const [answerState, setAnswerState] = React.useState(answers)


  function toggle(idAnswer, idQuestion, answer) {
    setAnswerState(answers => {
      return answers.map(answer => {
        return answer.id === idAnswer ?
          {
            ...answer,
            isPicked: !answer.isPicked,
          } :
          {
            ...answer,
            isPicked: false,
          }
      })
    })

    setQuestionState(questions => {
      return questions.map(question => {
        return question.id === idQuestion ?
          {
            ...question,
            playerAnswer: answer,
          } :
          {
            ...question,
          }
      })
    })
  }


  function stylize(item) {
    if (gameOver && item.isPicked && isCorrect) {
      return {
        background: "var(--answer-correct)",
        border: "2px solid var(--answer-correct)"
      }
    } else if (gameOver && item.isPicked && !isCorrect) {
      return {
        background: "var(--answer-wrong)",
        border: "2px solid var(--answer-wrong)"
      }
    } else if (item.isPicked && !gameOver) {
      return {
        background: "var(--answer-picked)",
        border: "2px solid var(--answer-picked)"
      }
    } else if (gameOver && item.answer === correct_answer) {
      return {
        background: "var(--answer-picked)",
        border: "2px solid var(--answer-picked)"
      }
    } else if (!item.isPicked && !gameOver) {
      return {
        background: "",
        border: ""
      }
    }
  }


  const answersHtml = answerState.map(item => {

    return (
      <button
        id={item.id}
        key={item.id}
        style={stylize(item)}
        className="answer-btn"
        onClick={() => toggle(item.id, questionId, item.answer)}
        disabled={gameOver ? true : false}
      >
        {he.decode(item.answer)}
      </button>
    )
  })


  return (
    <>
      {answersHtml}
    </>
  )
}


