import React, { useState, useEffect } from 'react'
import image from "../img-sound/kids.png"

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <div className={`w-full bg-cover bg-center ${isHidden ? "hidden" : ""}`} >
      <img src={image} alt='' className='mx-auto h-[75vh]' />
    </div>
  )
}

export default Footer