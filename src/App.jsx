import React from 'react'
import {Footer, Navbar} from './Components'
import { Cards, Hero } from './Containers'
const App = () => {
  return (
    <>
        <Navbar/>
        <Hero/>    
        <Cards />
        <Footer/>
  </>
  )
}

export default App