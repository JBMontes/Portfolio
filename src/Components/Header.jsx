import React from 'react';
import { Link,  useNavigate } from 'react-router-dom';
import "../Styles/Header.css"

const Header = () => {
    let nav = useNavigate()
    return (
        <header className="header">
            <div>
                <h3 className="logo" onClick={()=> nav("/")}>JBM</h3>
            </div>
            <div className="button">

            <button onClick={()=> nav('/projects')}> Projects</button>
            <button onClick={() => nav('/resume')}>Resume</button>

            </div>

       
        </header>
    );
};

export default Header;