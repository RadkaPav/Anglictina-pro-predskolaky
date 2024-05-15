import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import Word from "../components/Word"
import Header from '../components/Header'
import Footer from '../components/Footer'
import houseImage from '../img-sound/house.png'
import clothesImage from '../img-sound/clothes.png'
import winterImage from '../img-sound/winter.png'

const Words = () => {
  //UČENÍ SLOVÍČEK, VÝBĚR TÉMATU A SPUŠTĚNÍ HRY
  const [startGame, setStartGame] = useState(false)
  const [option, setOption] = useState()

  const selectOption = (e) => {
    setOption(e.target.attributes[0].value)
    setStartGame(true)
  }
  return (
    <div>
      {
        startGame ? <Word option={option} /> :
          <>
            <section>
              <ul className='h-[100vh] flex flex-col space-y-5 items-center justify-center'>
                <li value="house" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                  <div>
                  <img src={houseImage} alt='' className='w-24 h-24 mb-2' />House

                  </div>
                </li>
                <li value="clothes" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                  <img src={clothesImage} alt='' className='w-24 h-24 mb-2' />Clothes
                </li>
                <li value="winter" onClick={selectOption} className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'>
                  <img src={winterImage} alt='' className='w-24 h-24 mb-2' />Winter</li>
                <li>
                  <Link to="/"><FaHome className='text-5xl text-green-600 animate-pulse' /></Link>
                </li>
              </ul>
            </section>         
          </>
      }
    </div>
  )
}

export default Words