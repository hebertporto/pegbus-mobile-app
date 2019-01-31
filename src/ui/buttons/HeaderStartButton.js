import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'

import { RkButton } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'

import {
  saveBookmark,
  getBookmarkStored,
  deleteBookmark
} from '../../services/bookmarkService'
import { getTempItem } from '../../services/tempStop'

// const info = {
//   name: 'Northbound Main at McDermot',
//   number: 10628,
//   direction: 'Northbound',
//   geographic: {
//     latitude: '49.89699',
//     longitude: '-97.1386'
//   }
// }

// TODO: withNavigation, retirar a stopNumber do navigation e usar como parametro

class StarButton extends Component {
  state = {
    favorito: false,
    stopInfo: {}
  }

  componentDidMount() {
    console.log('CHECK START')
    this.checkBookmark()
  }

  checkBookmark = async () => {
    const stopInfo = await getTempItem()
    const favorito = await getBookmarkStored(stopInfo.number)
    this.setState({ favorito, stopInfo })
  }

  toggleStar = async () => {
    const { favorito, stopInfo } = this.state
    favorito
      ? await deleteBookmark(stopInfo.number)
      : await saveBookmark(stopInfo)
    this.setState(prevState => ({ favorito: !prevState.favorito }))
  }

  render() {
    const { favorito } = this.state
    return (
      <RkButton
        rkType="outline icon small"
        style={{ width: 40, marginRight: 15, borderColor: 'transparent' }}
        onPress={this.toggleStar}
      >
        <Ionicons
          name={favorito ? 'md-star' : 'md-star-outline'}
          size={28}
          color="white"
        />
      </RkButton>
    )
  }
}

const HeaderStarButton = withNavigation(StarButton)

export { HeaderStarButton }
