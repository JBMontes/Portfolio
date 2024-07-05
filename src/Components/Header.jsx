import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';
import "../Styles/Header.css"

const Header = () => {
    const [pageKey, setPageKey] = useState("/");
    let nav = useNavigate()
    useScrollToTop();

    const handlePageChange = (e) => {
        const selectedPage = e.target.value;
        setPageKey(selectedPage);
        nav(selectedPage); 
    }

    const handleLogoChange = (e) => {
        const selectedPage = "/";
        setPageKey(selectedPage);
        nav(selectedPage); 
    }

    return (
        <header className="header">
            <div>
                <h3 className="logo" onClick={handleLogoChange}>JBM</h3>
            </div>

            <div className="headerButton">

<select value={pageKey} onChange={handlePageChange}>
          <option value="/">Welcome</option>
          <option value="/home">Home</option>
          <option value="/projects">Projects</option>
          <option value="/resume">Resume</option>
        </select>
            </div>
        </header>
    );
};

export default Header;