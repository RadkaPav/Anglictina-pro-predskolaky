import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='page'>
      <Header />
      <section>
        <ul className='menu'>
          <Link to="/words"><li>Words</li></Link>
          <Link to="/test"><li>Test</li></Link>
          <Link to="/game"><li>There is, there is not</li></Link>
        </ul>
      </section>
      <Footer />
    </div>
  )
}

export default Home