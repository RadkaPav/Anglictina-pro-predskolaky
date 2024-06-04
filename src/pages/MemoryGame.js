import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import HomeIcon from '../components/HomeIcon';
import GameBoard from '../components/GameBoard';
import Menu from '../components/Menu';
import animalsImage from '../memory-game/animals.png'
import transportsImage from '../memory-game/transports.png'
import animalsMemory from "../memory-game/data/animals-game"
import transportsMemory from '../memory-game/data/transports-game'

const MemoryGame = () => {
    const [startGame, setStartGame] = useState(false)
    const [data, setData] = useState()
  
    const options = [
        {
            id: 1,
            name: "Animals",
            image: animalsImage,
            item: animalsMemory
          },
          {
            id: 2,
            name: "Transports",
            image: transportsImage,
            item: transportsMemory
          }
    ]
    const selectOption = (option) => {
      setData(option)
      setStartGame(true)
    }
   
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        {
          !startGame ? <Menu options={options} selectOption={selectOption} /> :
          <section className='h-screen flex flex-col justify-center items-center'>
              <GameBoard data={data} /> 
              <Link to="/"><HomeIcon /></Link>      
        </section>
        }
      </div>
    )
  }

export default MemoryGame