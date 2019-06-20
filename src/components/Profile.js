import React from 'react'
import 'bulma'

const Profile = () => {
  return(

    <section className="section">
      <div className="container">

        <h2 className="title is-1 is-centered">Portfolio</h2>

        <p>I am a Junior Web Developer and this is my portfolio of projects</p>
        <nav>
          <ul>
            <li><a href="#intro">Profile</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

      </div>
    </section>
  )
}

export default Profile

//<img src="./assets/heroedit.jpg" alt="mountain" />
