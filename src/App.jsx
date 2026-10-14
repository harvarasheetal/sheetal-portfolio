import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Herosection from './components/Herosection'
import Revealsection from './components/Revealsection'
import Skilltech from './components/Skilltech'
import Projectsection from './components/Projectsection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'








function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
       
    
      
    <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
         <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Project' element={<Project/>}/>
           <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Blog' element={<Blog/>}/>
      </Routes>
      
    </main>
  
      <Footer/>

    </div>
    </BrowserRouter>
      
  )
}

export default App
