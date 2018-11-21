import React from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { withNavigation } from 'react-navigation'
import { styles } from './styles/SearchNavButton.style'

class SearchNavButtonContainer extends React.Component {
  showSearhInput = () => {
    const { navigation } = this.props
    return navigation.setParams({ isSearchActive: true })
  }

  render() {
    return (
      <View style={styles.root}>
        <TouchableWithoutFeedback onPress={this.showSearhInput}>
          <Ionicons name="md-search" size={26} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export const SearchNavButton = withNavigation(SearchNavButtonContainer)
