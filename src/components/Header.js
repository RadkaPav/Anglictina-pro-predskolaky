import React from 'react'
import { useState, useEffect } from 'react'

const Header = () => {

  const [isHidden, setIsHidden] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsHidden(true)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <div>
      <h1 className={`text-3xl text-[#FE86A4] font-bold uppercase pt-10 text-center ${isHidden ? "hidden" : ""}`}>English for preschoolers</h1>
    </div>
  )
}

export default Header