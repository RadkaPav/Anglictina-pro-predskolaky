import React, { useState, useEffect } from 'react'
import image from "../img-sound/kids.png"

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsHidden(true)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <div className={`w-full bg-cover bg-center ${isHidden ? "hidden" : ""}`} >
      <img src={image} alt='' className='mx-auto h-[80vh]' />
    </div>

  )
}

export default Footer