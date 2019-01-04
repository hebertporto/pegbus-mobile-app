import React, { Component } from 'react'

import { Home } from './components/Home'
import { NavBarStyle } from '../../constants'
import { trackView } from '../../config/analytics'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Peg Bus',
    ...NavBarStyle
  }
  componentDidMount() {
    trackView('Home')
  }
  render() {
    return <Home />
  }
}

export { HomeScreen }
