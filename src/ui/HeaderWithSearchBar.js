import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import { Header, withNavigation } from 'react-navigation'
import { RkTextInput } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles/HeaderWithSearchBar.style'

class HeaderWithSearchBarContainer extends Component {
  state = {
    witdhAnimation: new Animated.Value(0)
  }

  startAnimation = () => {
    if (this.state.witdhAnimation === 0) {
      Animated.parallel([
        Animated.timing(this.state.witdhAnimation, {
          toValue: 250,
          duration: 2500
        })
      ]).start(() => alert('acabou'))
    }
  }

  render() {
    const { navigation, propsHeader } = this.props
    const isSearchActive = navigation.getParam('isSearchActive', false)
    const animatedStyle = {
      width: 100
    }
    return (
      <View>
        {<Header {...propsHeader} />}
        {isSearchActive && (
          <View style={styles.root}>
            <Animated.View style={[styles.inputContainer, animatedStyle]}>
              <RkTextInput
                rkType="rounded"
                label={<Ionicons name={'md-search'} />}
                labelStyle={{
                  paddingVertical: 10,
                  paddingLeft: 10,
                  fontSize: 28,
                  color: 'black'
                }}
              />
            </Animated.View>
          </View>
        )}
      </View>
    )
  }
}
export const HeaderWithSearchBar = withNavigation(HeaderWithSearchBarContainer)
