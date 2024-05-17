import { FaArrowAltCircleRight } from "react-icons/fa"

import React from 'react'

const Arrow = ({ nextQuestion, selectedAnswer, correctAnswer }) => {
  return (
    <div>
      <FaArrowAltCircleRight
        className={selectedAnswer === correctAnswer ? 'text-green-600 text-4xl cursor-pointer my-3' : "text-slate-600 text-4xl cursor-pointer my-3 disabled"}
        onClick={selectedAnswer === correctAnswer ? () => nextQuestion() : null} />
    </div>
  )
}

export default Arrow