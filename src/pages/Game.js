import React, { useState } from 'react'
import Questions from '../components/Questions'
import { Link } from 'react-router-dom'
import HomeIcon from '../components/HomeIcon'
import Arrow from '../components/Arrow'
import houseQuestions from '../data/house-questions'
import clothesQuestions from '../data/clothesQuestions'
import houseImage1 from "../questions/house/house.png"
import clothesImage1 from "../questions/clothes/clothes.png"
import Header from '../components/Header'
import Footer from '../components/Footer'
import answers from '../data/answers'
import clothesImage from '../img-sound/clothes.png'
import houseImage from '../img-sound/house.png'
import MenuItem from '../components/MenuItem'

const Game = () => {
  const [startGame, setStartGame] = useState(false)
  const [data, setData] = useState(houseQuestions)
  const [image, setImage] = useState()
  const [index, setIndex] = useState(0)

  //DALŠÍ OTÁZKA
  const nextQuestion = (e) => {
    setIndex(index + 1)
  }

  const checkAnswer = (e, answer) => {
    //ZVOLENOU MOŽNOST ULOŽÍ DO SELECTEDANSWER
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
    <div className='flex justify-center items-center h-screen'>
      {
        !startGame ?
          <>
            {/* <Header /> */}
            <section>
              <ul className='h-[100vh] flex flex-col space-y-5 items-center justify-center'>
                <li onClick={() => { setData(houseQuestions); setImage(houseImage1); setStartGame(true) }}>
                  <MenuItem value="house" imageName={houseImage} item="House" />
                </li>
                <li onClick={() => { setData(clothesQuestions); setImage(clothesImage1); setStartGame(true) }}>
                  <MenuItem value="clothes" imageName={clothesImage} item="Clothes" />
                </li>
                <li>
                  <Link to="/"><HomeIcon /></Link>
                </li>
              </ul>
            </section>
          </> :
          <section  className='flex flex-col justify-center items-center'>
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