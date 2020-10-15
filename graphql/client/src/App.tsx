import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import ApolloMain from './apollo/Main'
// import RelayMain from './relay/Main'
import Home from './Home'

import './App.css'

const App = () => {
  return (
    <Router>
      <>
        <Route exact path="/apollo" component={ApolloMain} />
        {/* <Route exact path="/relay" component={RelayMain} /> */}
        <Route exact path="/" component={Home} />
      </>
    </Router>
  )
}

export default App
