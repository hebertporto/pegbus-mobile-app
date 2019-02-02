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

class StarButton extends Component {
  state = {
    favorito: false,
    stopInfo: {},
    stopNumber: 0
  }

  componentDidMount() {
    this.checkBookmark()
  }

  checkBookmark = async () => {
    const { stopNumber } = this.props
    const favorito = await getBookmarkStored(stopNumber)
    this.setState({ favorito, stopNumber })
  }

  toggleStar = async () => {
    const { favorito, stopNumber } = this.state
    const stopInfo = await getTempItem()

    favorito
      ? await deleteBookmark({ stopNumber })
      : await saveBookmark({ stopInfo })
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
