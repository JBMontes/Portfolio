import React from 'react';
import '../Styles/Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <h4>Thanks for visiting!</h4>
            <h4>Jeremy B. Montes</h4>

            <div className="footerButton">
            <a href="https://github.com/JBMontes">
               <img className="github" src='github3.svg' alt='github_link'/>
            </a>
            
            <a href="https://linkedin.com/in/jeremy-b-montes">
               <img className="linkedin" src='linkedin.svg' alt='linkedin_link'/>
            </a>

            </div>
            
        </footer>
    );
};

export default Footer;