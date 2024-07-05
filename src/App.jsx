
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Landing from './Pages/Landing';
function App() {

   return (
      <>
         <Router>
            <Header />

            <Routes>
               <Route path="/" element={<Landing />} />
               <Route path="/home" element={<Home />} />
               <Route path="/resume" element={<Resume />} />
               <Route path="/projects" element={<Projects />} />
            </Routes>

            <Footer />

         </Router>
      </>
   )
}

export default App
