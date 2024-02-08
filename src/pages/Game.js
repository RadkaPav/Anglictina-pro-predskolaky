import React, { useState } from 'react'
import Questions from '../components/Questions'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import Arrow from '../components/Arrow'
import houseQuestions from '../data/house-questions'
import clothesQuestions from '../data/clothesQuestions'
import houseImage from "../questions/house/house.png"
import clothesImage from "../questions/clothes/clothes.png"
import Header from '../components/Header'
import Footer from '../components/Footer'
import answers from '../data/answers'

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
      setImage(houseImage)
    }
    if (option === "clothes") {
      setData(clothesQuestions)
      setImage(clothesImage)
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
            <Header />
            <section>
              <ul className='menu'>
                <li value="house" onClick={selectOption}>House</li>
                <li value="clothes" onClick={selectOption}>Clothes</li>
              </ul>
              <Link to="/"><FaHome className='home' /></Link>
            </section>
            <Footer />
          </> :
          play ?
            <div>
              <Questions checkAnswer={checkAnswer} index={index} data={data} image={image} selectedAnswer={selectedAnswer} />
              {/* PO POSLEDNÍ OTÁZCE ZOBRAZÍ IKONU HOME */}
              {(index < data.length - 1) ?
                <Arrow nextQuestion={nextQuestion} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer}
                />
                : <Link to="/"><FaHome className='home' /></Link>}
            </div> :
            <div>
              <button onClick={() => setPlay(true)} className='play'>Play</button>
            </div>
      }
    </div>

  )
}

export default Game