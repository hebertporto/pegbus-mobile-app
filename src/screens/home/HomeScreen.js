import React, { Component } from 'react'
import { Home2 } from './components/Home2'
import { NavBarStyle } from '../../helpers'
import { trackView } from '../../config/analytics'
import { getBookmarkList } from '../../services/bookmarkService'
import { removeTemp } from '../../services/tempStop'

class HomeScreen extends Component {
  state = {
    favourites: [],
  }

  static navigationOptions = () => {
    return {
      ...NavBarStyle,
      headerStyle: {
        ...NavBarStyle.headerStyle,
        elevation: 0,
      },
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
      <Home2
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
