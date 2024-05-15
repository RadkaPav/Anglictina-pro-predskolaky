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
import houseImage from '../img-sound/house.png'
import clothesImage from '../img-sound/clothes.png'
import winterImage from '../img-sound/winter.png'

const Test = () => {

    const [startGame, setStartGame] = useState(false)
    const [data, setData] = useState(house)
    const [index, setIndex] = useState(0)
    const [play, setPlay] = useState(false)


    const selectOption = (e) => {
        //zachycení vybrané možnosti
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
        //vytvoření pole dvojic nestejných slov v allAnswers
        setData(prevArray => (
            prevArray.map((oneWord) => (
                {
                    ...oneWord,
                    allAnswers: [oneWord, data.filter(word => {
                        return word.id !== oneWord.id   //vrátí slova odlišná od prvního
                    })[Math.floor(Math.random() * (data.length - 1))]].sort(function () { return Math.random() - 0.5 }) //náhodné namíchání pole
                }
            ))
        ))
    }
    //zachycení kliknutí na obrázek
    const checkAnswer = (title, index) => {
        setData(prevArray => (
            prevArray.map((question) => (
                (question.id === index + 1) ? { ...question, selectedAnswer: title } : question
            ))
        ))
    }

    //další otázka    
    const nextQuestion = () => {
        setIndex(index + 1)
    }

    //vybraná a správná odpověď
    const selectedAnswer = data[index].selectedAnswer
    const correctAnswer = data[index].title

    return (
        <div>
            {
                !startGame ?
                    <>
                        <section>
                            <ul className='h-[100vh] flex flex-col space-y-5 items-center justify-center'>
                                <li value="house" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                                    <img src={houseImage} alt='' className='w-24 h-24 mb-2' /> House
                                </li>
                                <li value="clothes" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                                    <img src={clothesImage} alt='' className='w-24 h-24 mb-2' />Clothes
                                </li>
                                <li value="winter" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                                    <img src={winterImage} alt='' className='w-24 h-24 mb-2' />
                                    Winter</li>
                                <li>
                                    <Link to="/"><FaHome className='text-5xl text-green-600 animate-pulse' /></Link>
                                </li>
                            </ul>
                        </section>
                    </> :
                    play ?
                        <section>
                            <div className='container'>
                                <TestWords data={data} setData={setData} index={index} checkAnswer={checkAnswer} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} />
                                {(index < data.length - 1) ? <Arrow nextQuestion={nextQuestion} selectedAnswer={selectedAnswer} correctAnswer={correctAnswer} /> : <div></div>
                                }
                            </div>
                            <Link to="/"><FaHome className='text-5xl text-green-600 animate-pulse' /></Link>
                        </section> :
                        <div>
                            <button onClick={newGame} className='play'>Play</button>
                        </div>
            }
        </div>
    )
}

export default Test