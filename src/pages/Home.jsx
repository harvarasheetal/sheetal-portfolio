import React from 'react'
import Herosection from '../components/Herosection'
import Revealsection from '../components/Revealsection'
import Skilltech from '../components/Skilltech'
import Projectsection from '../components/Projectsection'
import ContactSection from '../components/ContactSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Revealsection/>
      <Skilltech/>
      <Projectsection/>
      <ContactSection/>
      {/* <Footer/> */}
      
    </div>
  )
}

export default Home
