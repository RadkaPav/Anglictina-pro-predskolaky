import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import TestWords from '../components/TestWords'
import Arrow from '../components/Arrow'
import house from '../data/house'
import clothes from '../data/clothes'
import winter from '../data/winter'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Test = () => {

    const [startGame, setStartGame] = useState(false)
    const [data, setData] = useState(house)
    const [index, setIndex] = useState(0)
    const [play, setPlay] = useState(false)

    const selectOption = (e) => {
        const option = e.target.attributes[0].value
        switch (option) {
            case "house": setData(house)
                break
            case "clothes": setData(clothes)
                break
            case "winter": setData(winter)
                break
            default: setData()
        }
        setStartGame(true)
    }

    const newGame = () => {
        setPlay(true)
        setData(prevArray => (
            prevArray.map((oneWord) => (
                {
                    ...oneWord,
                    allAnswers: [oneWord, data.filter(word => {
                        return word.id !== oneWord.id   //vrátí slova odlišná od prvního
                    })[Math.floor(Math.random() * (data.length - 1))]].sort(function () { return Math.random() - 0.5 }) 
                }
            ))
        ))
         
    }
    
    const checkAnswer = (title, index) => {
        setData(prevArray => (
            prevArray.map((question) => (
                (question.id === index + 1) ? { ...question, selectedAnswer: title } : question
            ))
        ))
    }
  
    const nextQuestion = () => {
        setIndex(index + 1)
    }

    const selectedAnswer = data[index].selectedAnswer
    const correctAnswer = data[index].title

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
                                <li value="winter" onClick={selectOption}>Winter</li>
                            </ul>
                            <Link to="/"><FaHome className='home' /></Link>
                        </section>
                        <Footer /> </> :
                    play ?
                        <section>
                            <div className='container'>
                                <TestWords data={data} setData={setData} index={index} checkAnswer={checkAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} />
                                {(index < data.length - 1) ? <Arrow nextQuestion={nextQuestion} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} /> : <div></div>
                                }
                            </div>
                            <Link to="/"><FaHome className='home' /></Link>
                        </section> :
                        <div>
                            <button onClick={newGame} className='play'>Play</button>
                        </div>
            }
        </div>
    )
}

export default Test
