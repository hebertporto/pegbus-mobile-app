import React, { Component } from 'react'
import { Image } from 'react-native'
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
    this.setState({ favourites })
  }

  render() {
    const { favourites } = this.state
    return (
      <Home
        navigateTo={stopNumber =>
          this.props.navigation.navigate('BusStop', { stopNumber })
        }
        goToNearbyStops={() => this.props.navigation.navigate('NearbyStops')}
        favourites={favourites}
      />
    )
  }
}

export { HomeScreen }
