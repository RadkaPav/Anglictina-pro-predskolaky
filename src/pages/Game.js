import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Questions from '../components/Questions'
import HomeIcon from '../components/HomeIcon'
import Arrow from '../components/Arrow'
import Menu from '../components/Menu'
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

  const options = [
    {
      id: 1,
      name: "House",
      image: houseImage,
      item: houseQuestions, 
      questionsImage: houseImage1
    },
    {
      id: 2,
      name: "Clothes",
      image: clothesImage,
      item: clothesQuestions,
      questionsImage: clothesImage1
    }
  ]

  const selectOption = (option, image) => {
    setData(option)
    setImage(image)
    setStartGame(true)
  }

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
        !startGame ? <Menu selectOption={selectOption} options={options}/> :
          <section className='h-screen flex flex-col justify-center items-center'>
            <Questions checkAnswer={checkAnswer} index={index} data={data} image={image} selectedAnswer={selectedAnswer} />
            {(index < data.length - 1) &&
              <Arrow nextQuestion={nextQuestion} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} />
            }
            <Link to="/"><HomeIcon /></Link>
          </section>
      }
    </div>
  )
}

export default Game
