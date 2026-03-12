import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            {/* <h1>LTC Education Hub</h1> */}
            <span><img src="/assets/img/logo3.png" alt="LTC Education Hub" /></span>
          </Link>
        </div>
        <button
          type="button"
          className="nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav id="primary-navigation" className={isMenuOpen ? 'is-open' : ''}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/information-hub" onClick={closeMenu}>Information Hub</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/contact" className="nav-cta" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

