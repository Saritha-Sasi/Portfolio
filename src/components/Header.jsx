import React, { useState, useEffect } from 'react';

const Header = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [navTogglerOpen, setNavTogglerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active section

  const toggleAsideSection = () => {
    setAsideOpen(!asideOpen);
    setNavTogglerOpen(!navTogglerOpen);
  };

  useEffect(() => {
    // Handle navigation links click and section visibility
    const navLinks = document.querySelectorAll('.nav a');
    const sections = document.querySelectorAll('.section');
    
    const handleSectionVisibility = (e) => {
      e.preventDefault();
      const targetSection = e.target.getAttribute('href').split('#')[1];

      // Remove active class from all sections
      sections.forEach((section) => {
        section.classList.remove('active');
        section.classList.remove('back-section');
      });

      // Add active class to the clicked section
      const targetElement = document.getElementById(targetSection);
      if (targetElement) {
        targetElement.classList.add('active');
      }

      // Update the navigation highlight
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      e.target.classList.add('active');

      // Close the toggle bar in mobile view
      if (window.innerWidth < 1200) {
        setNavTogglerOpen(false);
        setAsideOpen(false);
      }
    };

    // Add event listeners to all nav links
    navLinks.forEach((link) => {
      link.addEventListener('click', handleSectionVisibility);
    });

    return () => {
      // Cleanup event listeners on unmount
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleSectionVisibility);
      });
    };
  }, []);

  return (
    <div className={`aside ${asideOpen ? 'open' : ''}`}>
      <div className="logo">
        <a href="#">
          <span>S</span>aritha
        </a>
      </div>
      <div
        className={`nav-toggler ${navTogglerOpen ? 'open' : ''}`}
        onClick={toggleAsideSection}
      >
        <span></span>
      </div>
      <ul className="nav">
        <li>
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
            <i className="fa fa-home"></i> Home
          </a>
        </li>
        <li>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
            <i className="fa fa-user"></i> About
          </a>
        </li>
        <li>
          <a href="#services" className={activeSection === 'services' ? 'active' : ''}>
            <i className="fa fa-list"></i> Services
          </a>
        </li>
        <li>
          <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
            <i className="fa fa-briefcase"></i> Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
            <i className="fa fa-comments"></i> Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;