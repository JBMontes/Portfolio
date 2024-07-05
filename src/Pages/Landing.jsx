import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Landing.css'

const Landing = () => {
    return (
        <div className="landingBody">
            <div className="logoAndButton">
            <img src={"/jmLogo.png"} alt="Jeremy Montes Logo" />
            <Link to="/home"><button>Enter</button></Link>
            </div>
        </div>
    );
};

export default Landing;