import React from 'react'

const Skills = () => {
  return(
    <section id="skills">
      <div className="container">
        <h2 className="title is-3 is-centered">Tech Stack</h2>
        <p>I am a Junior Software Engineer, below are my skills! I used to work as a scientist but developed an interest in software and computing. This led me to a software engineering course at General Assembly (GA). After I completed my course at GA I started  learning Java and Ruby on Codecademy. </p>
      </div>

      <div className="container">

        <h2 className="title is-3 is-centered techtitle">My Tech stack:</h2>
        <div className="logos">
          <img className="logo" src="./assets/html5.png" />
          <img className="logo" src="./assets/css3.png" />
          <img className="logo" src="./assets/javascript.png" />
          <img className="logo" src="./assets/react.png" />
          <img className="logo" src="./assets/nodejs.png" />
          <img className="logo" src="./assets/mongodb.png" />
          <img className="logo" src="./assets/python.png" />
          <img className="logo" src="./assets/postgresql.png" />
          <img className="logo" src="./assets/npm.png" />
          <img className="logo" src="./assets/git.png" />
          <img className="logo" src="./assets/github.png" />
          <img className="logo" src="./assets/heroku.png" />
          <img className="logo" src="./assets/mysql.png" />
          <img className="logo" src="./assets/jquery.png" />
        </div>


        <h2 className="title is-3 is-centered techtitle">Currently learning:</h2>
        <div className="logos">
          <img className="logo" src="./assets/java.png" />
          <img className="logo" src="./assets/ruby.png" />
          <img className="logo" src="./assets/bootstrap.png" />
        </div>

        <div className="logos">
          <h2 className="title is-3 is-centered techtitle"> Post GA Learning platform:</h2>
          <img className="logo" src="./assets/codecad.jpg" />
        </div>


      </div>
    </section>
  )
}

export default Skills

//<img src="./assets/heroedit.jpg" alt="mountain" />
