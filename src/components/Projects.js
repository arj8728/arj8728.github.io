import React from 'react'
import 'bulma'

const Projects = () => {
  return(

    <section id="projects">
      <div className="container">
        <h2 className="title is-3 is-centered">Projects</h2>
        <p className="title is-5 is-centered">These are the projects I have completed at GA, hover over the images to find out more!</p>
        <div className="columns is-multiline has-text-centered is-centered">

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project4.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/architech">  Project Four Github Link </a></h2>
              <h3 className="title"><a href="https://architech-hero.herokuapp.com/">  Architech Link </a></h3>
            </figure>
          </div>

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project3.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/SEI-Project-3-NerdCrate"> Project Three Github Link </a></h2>
              <h3 className="title"><a href="https://nerdcrate.herokuapp.com/">  NerdCrate Link </a></h3>
            </figure>
          </div>

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project2.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/SEI-Project-2-React-Hackathon"> Project Two Github Link </a></h2>
              <h3 className="title"><a href="https://arj8728.github.io/SEI-Project-2-React-Hackathon/#/">  Cycle In London Link </a></h3>
            </figure>
          </div>

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project1.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/SEI-Project-01-Snake-Game"> Project One Github Link </a></h2>
              <h3 className="title"><a href="https://arj8728.github.io/SEI-Project-01-Snake-Game/">  Super Mario Snake Link </a></h3>

            </figure>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects
