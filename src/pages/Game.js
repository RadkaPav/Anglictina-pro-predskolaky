import React, { useState } from 'react'
import Questions from '../components/Questions'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
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

const Game = () => {
  const [startGame, setStartGame] = useState(false)
  const [data, setData] = useState(houseQuestions)
  const [image, setImage] = useState()
  const [index, setIndex] = useState(0)
  const [play, setPlay] = useState(false)

  //VZBRÁNÍ TÉMATU A SPUŠTĚNÍ HRY
  const selectOption = (e) => {
    const option = e.target.attributes[0].value
    if (option === "house") {
      setData(houseQuestions)
      setImage(houseImage1)
    }
    if (option === "clothes") {
      setData(clothesQuestions)
      setImage(clothesImage1)
    }
    setStartGame(true)
  }
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
    <div className='page'>
      {
        !startGame ?
          <>
            {/* <Header /> */}
            <section>
              <ul className='h-[100vh] flex flex-col space-y-5 items-center justify-center'>
                <li value="house" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                  <img src={houseImage} alt='' className='w-24 h-24 mb-2' /> House
                </li>
                <li value="clothes" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                  <img src={clothesImage} alt='' className='w-24 h-24 mb-2' />Clothes
                </li>
                <li>
                  <Link to="/"><FaHome className='text-5xl text-green-600 animate-pulse' /></Link>
                </li>
              </ul>
            </section>
          </> :
          play ?
            <div>
              <Questions checkAnswer={checkAnswer} index={index} data={data} image={image} selectedAnswer={selectedAnswer} />
              {/* PO POSLEDNÍ OTÁZCE ZOBRAZÍ IKONU HOME */}
              {(index < data.length - 1) ?
                <Arrow nextQuestion={nextQuestion} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer}
                />
                : <Link to="/"><FaHome className='text-5xl text-green-600 animate-pulse' /></Link>}
            </div> :
            <div>
              <button onClick={() => setPlay(true)} className='play'>Play</button>
            </div>
      }
    </div>

  )
}

export default Game