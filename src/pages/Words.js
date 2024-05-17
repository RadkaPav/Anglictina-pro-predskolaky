import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../components/HomeIcon'
import Word from "../components/Word"
import Header from '../components/Header'
import Footer from '../components/Footer'
import houseImage from '../img-sound/house.png'
import clothesImage from '../img-sound/clothes.png'
import winterImage from '../img-sound/winter.png'
import MenuItem from '../components/MenuItem'
import house from '../data/house'
import clothes from '../data/clothes'
import winter from '../data/winter'

const Words = () => {
  const [startGame, setStartGame] = useState(false)
  const [data, setData] = useState()
 
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {
        startGame ? <Word data={data} /> :
          <>
            <section className='h-screen flex flex-col space-y-5 items-center justify-center'>
              <ul className='w-[80vw] flex flex-col space-y-5 items-center justify-center
                             sm:flex-row sm:justify-evenly sm:space-y-0'>
                <li onClick={() => {setData(house); setStartGame(true)}}>
                  <MenuItem value="house" imageName={houseImage} item="House" />
                </li>
                <li onClick={() => {setData(clothes); setStartGame(true)}}>
                  <MenuItem value="clothes" imageName={clothesImage} item="Clothes" />
                </li>
                <li onClick={() => {setData(winter); setStartGame(true)}}>
                  <MenuItem value="winter" imageName={winterImage} item="Winter" />
                </li>
              </ul>
                <div>
                  <Link to="/"><HomeIcon /></Link>
                </div>
            </section>
          </>
      }
    </div>
  )
}

export default Words