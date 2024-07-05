import React from 'react';
import About from '../Components/About';
import Skills from '../Components/Skills';
import '../Styles/Home.css'
const Home = () => {
    return (
        <div className="home">
            <About />
            <Skills />
        </div>
    );
};

export default Home;