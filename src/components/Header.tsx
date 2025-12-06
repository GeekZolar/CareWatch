import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <h1>LTC Education Hub</h1>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/information-hub">Information Hub</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

