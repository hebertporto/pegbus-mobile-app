import React, { Component } from 'react'

import { Home } from './components/Home'
import { NavBarStyle } from '../../constants'
import { trackView } from '../../config/analytics'
import { getBookmarkList } from '../../services/bookmarkService'

class HomeScreen extends Component {
  state = {
    favourites: []
  }

  static navigationOptions = () => {
    return {
      title: 'Peg Bus',
      ...NavBarStyle
    }
  }

  componentDidMount() {
    trackView('Home')
    this.getFavourites()
  }

  getFavourites = async () => {
    const favourites = await getBookmarkList()
    this.setState({ favourites })
  }

  render() {
    const { favourites } = this.state
    return (
      <Home
        navigateTo={stopNumber =>
          this.props.navigation.navigate('BusStop', { stopNumber })
        }
        favourites={favourites}
      />
    )
  }
}

export { HomeScreen }
