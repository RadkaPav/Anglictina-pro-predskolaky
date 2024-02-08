import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import Word from "../components/Word"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Words = () => {
  //UČENÍ SLOVÍČEK, VÝBĚR TÉMATU A SPUŠTĚNÍ HRY
  const [startGame, setStartGame] = useState(false)
  const [option, setOption] = useState()

  const chooseTheme = (e) => {
    setOption(e.target.attributes[0].value)
    setStartGame(true)
  }
  return (
    <div className='page'>
      {
        startGame ? <Word option={option} /> :
          <>
            <Header />
            <section>
              <ul className='menu'>
                <li value="house" onClick={chooseTheme}>House</li>
                <li value="clothes" onClick={chooseTheme}>Clothes</li>
                <li value="winter" onClick={chooseTheme}>Winter</li>
              </ul>
              <Link to="/"><FaHome className='home' /></Link>
            </section>
            <Footer />
          </>
      }
    </div>


  )
}

export default Words