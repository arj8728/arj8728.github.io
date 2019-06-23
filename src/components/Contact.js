import React from 'react'
import 'bulma'

const Contact = () => {
  return(

    <section id="contact">
      <div className="container">
        <h2 className="title is-3 is-centered">Contact</h2>

        <div className="column is-three-quarters-desktop">
          <p>Please contact me below</p>

          <div className="column is-full-desktop is-two-fifths">
            <img  className="icon" src="./assets/gmail.png"/>
            <a href="mailto:mrarjunmodi@gmail.com" className="contactlink">mrarjunmodi@gmail.com</a>
          </div>

          <div className="column is-full-desktop ">
            <img  className="icon" src="./assets/github2.png"/>
            <a href="https://github.com/arj8728/" target="_blank" rel="noopener noreferrer" className="contactlink">  Arjun Modi Github  </a>
          </div>

          <div className="column is-full-desktop ">
            <img  className="icon" src="./assets/linkedin.png"/>
            <a href="https://www.linkedin.com/in/arjun-n-modi/" target="_blank" rel="noopener noreferrer" className="contactlink">  Arjun Modi LinkedIn  </a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact

//<img src="./assets/heroedit.jpg" alt="mountain" />
