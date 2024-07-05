import React from 'react';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';
import "../Styles/Header.css"

const Header = () => {
    let nav = useNavigate()
    useScrollToTop();

    return (
        <header className="header">
            <div>
                <h3 className="logo" onClick={() => nav("/")}>JBM</h3>
            </div>

            <div className="button">
            <button onClick={() => nav('/home')}> Home</button>
                <button onClick={() => nav('/projects')}> Projects</button>
                <button onClick={() => nav('/resume')}>Resume</button>
            </div>
        </header>
    );
};

export default Header;