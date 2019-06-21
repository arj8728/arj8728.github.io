import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router } from 'react-router-dom'
import 'bulma'
import './style.scss'


import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'



class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
