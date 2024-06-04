import React, { useState } from 'react';
import GameBoard from '../components/GameBoard';
import Menu from '../components/Menu';
import animalsImage from '../memory-game/animals.png'
import transportsImage from '../memory-game/transports.png'

const MemoryGame = () => {
    const [startGame, setStartGame] = useState(false)
    const [data, setData] = useState()
  
    const options = [
        {
            id: 1,
            name: "Animals",
            image: animalsImage,
            // item: animalsMemory
          },
          {
            id: 2,
            name: "Transports",
            image: transportsImage,
            // item: transportsMemory
          }
    ]
    const selectOption = (option) => {
      setData(option)
      setStartGame(true)
    }
   
    return (
      <div className='flex flex-col justify-center items-center h-screen'>
        {
          startGame ? <GameBoard data={data} /> : <Menu options={options} selectOption={selectOption} />       
        }
      </div>
    )
  }

export default MemoryGame