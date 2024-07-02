import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header'
// import About from './Components/About'
// import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
function App() {

  return (
    <>
       <Router>
    <Header/>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        </Routes>
    <Footer />

       </Router>
    </>
  )
}

export default App
