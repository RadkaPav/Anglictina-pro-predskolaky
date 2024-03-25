import house from '../data/house'
import clothes from '../data/clothes'
import winter from '../data/winter'
import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaHome } from "react-icons/fa"
import { Link } from 'react-router-dom'

const Word = ({ option }) => {
    const [index, setIndex] = useState(0)
    let data = null
    switch (option) {
        case "house": data = house
            break
        case "clothes": data = clothes
            break
        case "winter": data = winter
            break
        default: data = null
            break
    }

    const { img, sound } = data[index]

    const checkIndex = (wordIndex) => {
        if (wordIndex > data.length - 1) {
            return 0
        } else return wordIndex
    }

    const nextWord = () => {
        setIndex(checkIndex(index + 1))
    }

    return (
        <div>
            <div className='container'>
                <img src={img} alt='' className='image-word' />
                <audio src={sound} controls className='audio' />
                <FaArrowAltCircleRight className='arrow' onClick={nextWord} />
            </div>
            <Link to="/"><FaHome className='home' /></Link>
        </div>
    )
}

export default Word
