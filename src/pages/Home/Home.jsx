import React from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Converter from '../../components/Converter/Converter'

const Home = () => {
  return (
    <div>
      <Header />
      <Converter />
    </div>
  )
}

export default Home