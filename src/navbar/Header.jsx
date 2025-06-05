import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from "../image/logo1.png"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="title">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="navbar">
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#product" >Products</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>
                
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
