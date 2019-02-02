import React, { Component } from 'react'

import { Home } from './components/Home'
import { NavBarStyle } from '../../constants'
import { trackView } from '../../config/analytics'
import { getBookmarkList } from '../../services/bookmarkService'
import { removeTemp } from '../../services/tempStop'

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
    removeTemp()
    this.getFavourites()
  }

  getFavourites = async () => {
    const favourites = await getBookmarkList()
    console.log('favourites: ', favourites)

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
