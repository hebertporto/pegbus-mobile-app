import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

class SearchNavButtonContainer extends React.Component {
  showSearhInput = () => {
    const { navigation } = this.props
    return navigation.setParams({ isSearchActive: true })
  }

  render() {
    const { navigation } = this.props
    const isSearchActive = navigation.getParam('isSearchActive', false)
    return (
      <TouchableOpacity onPress={this.showSearhInput}>
        <Text>{`${isSearchActive}`}</Text>
      </TouchableOpacity>
    )
  }
}

export const SearchNavButton = withNavigation(SearchNavButtonContainer)
