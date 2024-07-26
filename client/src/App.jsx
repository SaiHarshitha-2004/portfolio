import react , { useState } from 'react'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Education from './Components/Education'
import NavBar from './Components/NavBar.jsx'
import Profiles from './Components/Profiles.jsx'

function App() {

  return (
    <>
    <div className=" w-full bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col justify-center py-20 bg-black bg-opacity-80 ">
      <NavBar />
      <Hero />
      <Features />
      <Projects />
      <Skills />
      <Education />
      <Profiles />

      
      </div>
    </div>    
    </>
  )
}

export default App ;
