import React, { useState } from 'react';
import './Navbar.css'; // Don't forget to link its CSS!

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control hamburger menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggles the boolean value
  };

  // Close menu when a navigation link is clicked (improves mobile UX)
  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <> {/* React Fragment to return multiple top-level elements */}
      <nav id="desktop-nav">
        <div className="logo">Antony Hyson Seltran</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Antony Hyson Seltran</div>
        <div className="hamburger-menu">
          {/* `hamburger-icon` class depends on `isOpen` state */}
          <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* `menu-links` class depends on `isOpen` state */}
          <div className={`menu-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={handleNavLinkClick}>About</a></li>
            <li><a href="#experience" onClick={handleNavLinkClick}>Experience</a></li>
            <li><a href="#certifications" onClick={handleNavLinkClick}>Certifications</a></li>
            <li><a href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;