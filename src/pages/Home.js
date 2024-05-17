import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import flashcardsImage from '../img-sound/flashcards.png'
import quizImage from '../img-sound/quiz.png'
import questionMarkImage from '../img-sound/question-mark.png'
import MenuItem from '../components/MenuItem'

const Home = () => {
  const menu = useRef(null)

  const scrollToMenu = () => {
    menu.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className=''>
      <section className='h-screen relative'>
        <Header />
        <Footer />
        <div className='w-screen absolute bottom-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-black mx-auto animate-bounce" onClick={scrollToMenu}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
          </svg>
        </div>
      </section>

      <section className='flex justify-center' id='menu' ref={menu}>
        <ul className='h-screen w-[80vw] flex flex-col space-y-5 items-center justify-center 
                       sm:flex-row sm:justify-evenly sm:space-y-0'>
          <Link to="/words">
            <MenuItem imageName={flashcardsImage} item="Flashcards" />
          </Link>
          <Link to="/test">
            <MenuItem imageName={quizImage} item="Quiz" />
          </Link>
          <Link to="/game">
            <MenuItem imageName={questionMarkImage} item="Questions" />
          </Link>
        </ul>
      </section>

    </ main>
  )
}

export default Home