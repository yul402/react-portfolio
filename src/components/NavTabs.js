import React from 'react';

// Set up navigation bar
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="navbar-text">Ying Li<span className="navbar-subtext">'s Portfolio</span></li>
        <li className="nav-item">
          <a
            href="#about-me"
            onClick={() => handlePageChange('AboutMe')}
            // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          >
            AboutMe
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portofolio"
            onClick={() => handlePageChange('Portofolio')}
            // Check to see if the currentPage is `Portofolio'
            className={currentPage === 'Portofolio' ? 'nav-link active' : 'nav-link'}
          >
            Portofolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
  </nav>
  )
}

export default NavTabs;
