import React from 'react'
import 'bulma'

const Projects = () => {
  return(

    <section id="projects">
      <div className="container">
        <h2 className="title is-3 is-centered">Projects</h2>
        <p className="title is-5 is-centered">These are the projects I have completed at GA</p>
        <div className="columns is-multiline has-text-centered is-centered">

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project4.jpg" />
              <h2 className="title">Project Four</h2>
            </figure>
          </div>


          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project3.jpg" />
              <h2 className="title">Project Three</h2>
            </figure>
          </div>

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project2.jpg" />
              <h2 className="title">Project Two</h2>
            </figure>
          </div>

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project1.jpg" />
              <h2 className="title">Project One</h2>
            </figure>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects
