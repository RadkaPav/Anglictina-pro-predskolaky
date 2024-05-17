import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../components/HomeIcon'
import TestWords from '../components/TestWords'
import MenuItem from '../components/MenuItem'
import house from '../data/house'
import clothes from '../data/clothes'
import winter from '../data/winter'
import houseImage from '../img-sound/house.png'
import clothesImage from '../img-sound/clothes.png'
import winterImage from '../img-sound/winter.png'

const Test = () => {
    const [startGame, setStartGame] = useState(false)
    const [data, setData] = useState(house)
    const [index, setIndex] = useState(0)

    const selectedAnswer = data[index].selectedAnswer
    const correctAnswer = data[index].title

    const newGame = () => {
        setData(prevArray => (
            prevArray.map((oneWord) => (
                {
                    ...oneWord,
                    allAnswers: [oneWord, data.filter(word => {
                        return word.id !== oneWord.id   
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

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {
                !startGame ?
                    <>
                        <section className='h-screen flex flex-col space-y-5 items-center justify-center'>
                            <ul className='w-[80vw] flex flex-col space-y-5 items-center justify-center
                                           sm:flex-row sm:justify-evenly sm:space-y-0'>
                                <li onClick={() => { setData(house); setStartGame(true); newGame() }}>
                                    <MenuItem value="house" imageName={houseImage} item="House" />
                                </li>
                                <li onClick={() => { setData(clothes); setStartGame(true); newGame() }}>
                                    <MenuItem value="clothes" imageName={clothesImage} item="Clothes" />
                                </li>
                                <li onClick={() => { setData(winter); setStartGame(true); newGame() }}>
                                    <MenuItem value="winter" imageName={winterImage} item="Winter" />
                                </li>
                            </ul>
                                <div>
                                    <Link to="/"><HomeIcon /></Link>
                                </div>
                        </section>
                    </> :
                    <section className='flex flex-col justify-center items-center h-screen'>
                        <TestWords data={data} setData={setData} index={index} checkAnswer={checkAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} nextQuestion={nextQuestion} />
                        <Link to="/"><HomeIcon /></Link>
                    </section>
            }
        </div>
    )
}

export default Test
