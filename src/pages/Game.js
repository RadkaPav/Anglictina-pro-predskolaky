import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Questions from '../components/Questions'
import HomeIcon from '../components/HomeIcon'
import Arrow from '../components/Arrow'
import MenuItem from '../components/MenuItem'
import houseQuestions from '../data/house-questions'
import clothesQuestions from '../data/clothesQuestions'
import answers from '../data/answers'
import houseImage1 from "../questions/house/house.png"
import clothesImage1 from "../questions/clothes/clothes.png"
import clothesImage from '../img-sound/clothes.png'
import houseImage from '../img-sound/house.png'

const Game = () => {
  const [startGame, setStartGame] = useState(false)
  const [data, setData] = useState(houseQuestions)
  const [image, setImage] = useState()
  const [index, setIndex] = useState(0)

  const nextQuestion = (e) => {
    setIndex(index + 1)
  }

  const checkAnswer = (e, answer) => {
    setData(prevArray => (
      prevArray.map((question) => (
        (question.id === index + 1) ?
          { ...question, selectedAnswer: e.target.id } : question
      ))
    ))
    const yes = new Audio(answers[0].sound)
    const no = new Audio(answers[1].sound)
    if (answer === "yes") { yes.play() }
    else { no.play() }
  }

  const selectedAnswer = data[index].selectedAnswer
  const correctAnswer = data[index].answer

  return (
    <div className='h-screen flex justify-center items-center'>
      {
        !startGame ?
          <section className='h-screen flex flex-col space-y-5 items-center justify-center'>
            <ul className='w-[80vw] flex flex-col space-y-5 items-center justify-center
                             sm:flex-row sm:justify-evenly sm:space-y-0'>
              <li onClick={() => { setData(houseQuestions); setImage(houseImage1); setStartGame(true) }}>
                <MenuItem value="house" imageName={houseImage} item="House" />
              </li>
              <li onClick={() => { setData(clothesQuestions); setImage(clothesImage1); setStartGame(true) }}>
                <MenuItem value="clothes" imageName={clothesImage} item="Clothes" />
              </li>
            </ul>
            <div>
              <Link to="/"><HomeIcon /></Link>
            </div>
          </section> :
          <section className='h-screen flex flex-col justify-center items-center'>
            <Questions checkAnswer={checkAnswer} index={index} data={data} image={image} selectedAnswer={selectedAnswer} />
            {(index < data.length - 1) ?
              <Arrow nextQuestion={nextQuestion} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer}
              /> :
              <Link to="/"><HomeIcon /></Link>}
          </section>

      }
    </div>
  )
}

export default Game
