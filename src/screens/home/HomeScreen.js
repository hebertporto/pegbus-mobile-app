import React, { Component } from 'react'

import { Home } from './components/Home'
import { NavBarStyle } from '../../constants'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Peg Bus',
    ...NavBarStyle
  }

  render() {
    return <Home />
  }
}

export { HomeScreen }
