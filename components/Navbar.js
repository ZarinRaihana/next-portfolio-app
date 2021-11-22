import React from 'react'


const Navbar = () => {
    return (
        <div>
          <nav className="navbar">
            <div className="name">
              <h4>Zarin</h4>
            </div>

            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skils">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#github">git </a></li>
              <li><a href="#linkedin">linkedin</a></li>
            </ul>
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>
        </div>
    )
}

export default Navbar
