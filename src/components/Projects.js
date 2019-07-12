import React from 'react'
import 'bulma'

const Projects = () => {
  return(

    <section id="projects">
      <div className="container">
        <br/>

        <h2 className="title is-3 is-centered">Projects</h2>
        <p className="title is-5 is-centered"></p>
        <div className="columns is-multiline has-text-centered is-centered">

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project4.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/architech" target="_blank" rel="noopener noreferrer"> Architech Github </a></h2>
              <h3 className="title"><a href="https://architech-hero.herokuapp.com/" target="_blank" rel="noopener noreferrer">  Architech Link </a></h3>
            </figure>
            <div className="nameproject"><p>Project 4: Architech, A London based architechture app built using ReactJS, JavaScript and Python. Users can register, login and add a building of their choice to a map of London. They can edit the buildings and select categories such as style and constuction. Users can also upload multiple images of the building and find the directions from their location via Google Maps and Citymapper.</p></div>
          </div>

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project3.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/SEI-Project-3-NerdCrate" target="_blank" rel="noopener noreferrer"> NerdCrate Github</a></h2>
              <h3 className="title"><a href="https://nerdcrate.herokuapp.com/" target="_blank" rel="noopener noreferrer">  NerdCrate Link </a></h3>
            </figure>
            <div className="nameproject"><p>Project 3: Nerdcrate, A lootcrate site built using ReactJS, NodeJS, Express and MongoDB. A subscriber is able to create an account, add a subscription box, modify this box, select multiple products to add into a shopping basket. The user is able to check their basket out and make an artificial purchase.</p> </div>
          </div>


          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project2.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/SEI-Project-2-React-Hackathon" target="_blank" rel="noopener noreferrer"> Cycle In London App Github </a></h2>
              <h3 className="title"><a href="https://arj8728.github.io/SEI-Project-2-React-Hackathon/#/" target="_blank" rel="noopener noreferrer">  Cycle In London App Link </a></h3>
            </figure>
            <div className="nameproject"><p> Project 2: Cycle in London, A cycle app built using ReactJS and various APIs. This one page app allows cyclists to quickly assess the weather, air pollution levels and bike docks available within a local radius. The cyclist is able is to see these docks on a local map that is set to their location.</p> </div>
          </div>

          <div className="column is-two-fifths">
            <figure className="image textBlur">
              <img className="snapshot" src="./assets/project1.jpg" />
              <h2 className="title"><a href="https://github.com/arj8728/SEI-Project-01-Snake-Game" target="_blank" rel="noopener noreferrer"> Super Mario Snake Github </a></h2>
              <h3 className="title"><a href="https://arj8728.github.io/SEI-Project-01-Snake-Game/" target="_blank" rel="noopener noreferrer">  Super Mario Snake Link </a></h3>
            </figure>
            <div className="nameproject"><p>Project 1: Super Mario Snake app, A project built using vanilla JavaScript. The player is able to play the classic snake game with a Mario twist. The Mario characters collect the coins to grow longer and the game speed increases. The score increases and the Mario Game Over tune plays if the snake crashes into the wall or its tail.</p> </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects
