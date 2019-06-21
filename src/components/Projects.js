import React from 'react'
import 'bulma'

const Projects = () => {
  return(

    <section id="projects">
      <div className="container">
        <h2 className="title is-3 is-centered">Projects</h2>
        <p className="title is-5 is-centered">These are the projects I have completed at GA</p>
        <div className="columns is-multiline has-text-centered is-centered">

          <h2 title is-5 is-centered>Project Four</h2>
          <div className="column is-two-fifths">
            <img className="snapshot" src="./assets/project4.jpg" />
          </div>

          <h2>Project Three</h2>
          <div className="column is-two-fifths">
            <img className="snapshot" src="./assets/project3.jpg" />
          </div>

          <h2>Project Two</h2>
          <div className="column is-two-fifths">
            <img className="snapshot" src="./assets/project2.jpg" />
          </div>

          <h2>Project One</h2>
          <div className="column is-two-fifths">
            <img className="snapshot" src="./assets/project1.jpg" />


          </div>

        </div>



      </div>

    </section>
  )
}

export default Projects
