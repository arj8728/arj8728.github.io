import React from 'react'

const Skills = () => {
  return(
    <section id="skills">
      <div className="container">
        <h2 className="title is-3 is-centered">Tech Stack</h2>
        <p>I am a Junior Software Engineer, below are my skills! I used to work as a scientist but developed an interest in software and computing. This led me to a software engineering course at General Assembly (GA). After I completed my course at GA I started  learning Java and Ruby on Codecademy. </p>
      </div>

      <div className="container">

        <div className="column is-full-mobile is-half-desktop">
          <h2 className="title is-3 is-centered techtitle">My Tech stack:</h2>

          <div className="columns is-multiline is-mobile">
            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/html5.png" />
              <div className="name">HTML5</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/css3.png" />
              <div className="name">CSS3</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/javascript.png" />
              <div className="name">JavaScript</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/react.png" />
              <div className="name">ReactJS</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/nodejs.png" />
              <div className="name">Node.js</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/mongodb.png" />
              <div className="name">MongoDB</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/python.png" />
              <div className="name">Python</div>
            </div>


            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/postgresql.png" />
              <div className="name">Node.js</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/npm.png" />
              <div className="name">npm</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/git.png" />
              <div className="name">Git</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/github.png" />
              <div className="name">GitHub</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/heroku.png" />
              <div className="name">Heroku</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/mysql.png" />
              <div className="name">MySQL</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/jquery.png" />
              <div className="name">jQuery</div>
            </div>
          </div>


          <h2 className="title is-3 is-centered techtitle">Currently learning:</h2>
          <div className="columns is-multiline  is-mobile">
            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/java.png" />
              <div className="name">Java</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/ruby.png" />
              <div className="name">Ruby</div>
            </div>

            <div className="column is-one-third-mobile is-one-fifth-desktop">
              <img className="logo" src="./assets/bootstrap.png" />
              <div className="name">Bootstrap</div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills

//<img src="./assets/heroedit.jpg" alt="mountain" />
