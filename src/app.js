import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'


import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'


class App extends React.Component {
  render() {
    return (

      <main>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
