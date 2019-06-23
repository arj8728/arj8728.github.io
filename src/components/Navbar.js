import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">

          <a className="navbar-item" href="#skills"  >
        Tech Skills
          </a>

          <a className="navbar-item" href="#projects"  >
        Projects
          </a>

          <a className="navbar-item" href="#contact"  >
        Contact Me
          </a>

        </div>
      </div>

    </nav>
  )
}



export default Navbar
