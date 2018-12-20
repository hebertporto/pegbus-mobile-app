import React, { Component } from 'react'

import { Home } from './components/Home'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Peg Bus'
  }

  render() {
    return <Home />
  }
}

export { HomeScreen }
