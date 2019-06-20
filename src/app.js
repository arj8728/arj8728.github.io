import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router } from 'react-router-dom'
import 'bulma'
import './style.scss'


import Hero from './components/Hero'
import Profile from './components/Profile'



class App extends React.Component {


  render() {
    return (
      <Router>
        <main>
          <Hero />
          <Profile />

        </main>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
