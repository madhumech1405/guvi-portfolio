import React from 'react'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Works from './component/Works'
import Resume from './component/Resume'
import Concat from './component/Concat'
import Footer from './component/Footer'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Hero />
      <About />
      <Works />
      <Resume />
      <Concat />
      <Footer />
    </div>
  )
}

export default App