import React from 'react'
import { useState } from 'react'

const Header = () => {

  const [isHidden, setIsHidden] = useState(false)

  return (
    <div>
      <h1 className={`text-3xl text-[#FE86A4] font-bold uppercase pt-6 text-center ${isHidden ? "hidden" : ""}`}>English for preschoolers</h1>
    </div>
  )
}

export default Header