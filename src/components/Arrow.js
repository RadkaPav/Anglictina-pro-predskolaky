import { FaArrowAltCircleRight } from "react-icons/fa"

import React from 'react'

const Arrow = ({ nextQuestion, selectedAnswer, correctAnswer }) => {
  return (
    <div>
      <FaArrowAltCircleRight
        className={selectedAnswer === correctAnswer ? 'arrow' : "arrow disabled"}
        onClick={() => nextQuestion()} />
    </div>
  )
}

export default Arrow