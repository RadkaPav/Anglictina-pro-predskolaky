import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import flashcardsImage from '../img-sound/flashcards.png'
import quizImage from '../img-sound/quiz.png'
import questionMarkImage from '../img-sound/question-mark.png'


const Home = () => {
  const [isBlock, setIsBlock] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsBlock(true)
  //   }, 2000)

  //   return () => clearTimeout(timer)
  // }, [])
  return (
    <div className='h-screen relative'>
      <Header />
      <Footer />

      <div className='w-screen'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-black mx-auto animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </div>

      <section className={` ${isBlock ? "block" : "hidden"}`}>
        <ul className='h-[100vh] flex flex-col space-y-5 items-center justify-center'>
          <Link to="/words">
            <li className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3  text-center cursor-pointer'><img src={flashcardsImage} alt='' className='w-24 h-24 mb-2' /> Flashcards</li>
          </Link>
          <Link to="/test">
            <li className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3  text-center cursor-pointer'><img src={quizImage} alt='' className='w-24 h-24 mb-2' /> Quiz</li>
          </Link>
          <Link to="/game">
            <li className='text-xl border-solid border-2 border-black inline-block rounded-lg p-3 text-center cursor-pointer'><img src={questionMarkImage} alt='' className='w-24 h-24 mb-2' /> Questions</li>
          </Link>
        </ul>
      </section>

    </div >
  )
}

export default Home