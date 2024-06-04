import React, { useState } from 'react'
import Word from "../components/Word"
import Menu from '../components/Menu'
import options from '../data/options'

const Words = () => {
  const [startGame, setStartGame] = useState(false)
  const [data, setData] = useState()

  const selectOption = (option) => {
    setData(option)
    setStartGame(true)
  }
 
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {
        startGame ? <Word data={data} /> : <Menu options={options} selectOption={selectOption} />       
      }
    </div>
  )
}

export default Words
