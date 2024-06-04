import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../components/HomeIcon'
import TestWords from '../components/TestWords'
import Menu from '../components/Menu'
import options from '../data/options'
import house from '../data/house'

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

    const selectOption = (option) => {
        setData(option)
        setStartGame(true)
        newGame()
    }

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {
                !startGame ? <Menu options={options} selectOption={selectOption} /> :
                    <section className='flex flex-col justify-center items-center h-screen'>
                        <TestWords data={data} setData={setData} index={index} checkAnswer={checkAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} nextQuestion={nextQuestion} />
                        <Link to="/"><HomeIcon /></Link>
                    </section>
            }
        </div>
    )
}

export default Test
