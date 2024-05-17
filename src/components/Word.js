import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Arrow from './Arrow'
import HomeIcon from './HomeIcon'

const Word = ({ data }) => {
    const [index, setIndex] = useState(0)
    const { img, sound } = data[index]

    const checkIndex = (wordIndex) => {
        if (wordIndex > data.length - 1) {
            return 0
        } else return wordIndex
    }

    const nextWord = () => {
        setIndex(checkIndex(index + 1))
    }

    let correctAnswer
    const selectedAnswer = correctAnswer

    return (
        <section className='flex flex-col justify-center items-center h-[90vh]'>
            <div className='flex flex-col justify-center items-center border-2 border-solid border-black rounded-xl bg-white p-2 mb-5 max-w-[90vw] max-h-[80vh]'>
                <img src={img} alt='' className='max-w-[90%] max-h-[80%]' />
                <audio src={sound} controls className='w-[60%] h-7 mb-2' />
                <Arrow correctAnswer={correctAnswer} selectedAnswer={selectedAnswer} nextQuestion={nextWord} />
            </div>
            <Link to="/"><HomeIcon /></Link>
        </section>
    )
}

export default Word
