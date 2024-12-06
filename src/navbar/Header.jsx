import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from "../image/logo.png"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
          <div className="title"><img src={logo} alt="" /></div>
            <nav className="navbar">
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/consumer">Products</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/register">Signup</Link></li>
                   
                </ul>
                
                <div className="hamburger" onClick={toggleMenu}>
                
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
