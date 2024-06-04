import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../components/HomeIcon'
import MenuItem from './MenuItem'

const Menu = ({ options, selectOption }) => {
 
  return (
    <section className='h-screen flex flex-col space-y-5 items-center justify-center'>
              <ul className='w-[80vw] flex flex-col space-y-5 items-center justify-center
                             sm:flex-row sm:justify-evenly sm:space-y-0'>
                {options.map((item) => {
                    return <li onClick={() => selectOption(item.item, item.questionsImage)} key={item.id}>
                    <MenuItem imageName={item.image} item={item.name}/>
                  </li>
                })}
              </ul>
                <div>
                  <Link to="/"><HomeIcon /></Link>
                </div>
            </section>
  )
}

export default Menu