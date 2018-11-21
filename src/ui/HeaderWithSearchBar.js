import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated } from 'react-native'
import { Header, withNavigation } from 'react-navigation'
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
    if (isSearchActive) {
      this.startAnimation()
    }
    const onCancel = () => navigation.setParams({ isSearchActive: false })
    const animatedStyle = {
      width: this.state.witdhAnimation
    }
    return (
      <View>
        {<Header {...propsHeader} />}
        {isSearchActive && (
          <View style={styles.root}>
            <Animated.View style={[styles.inputContainer, animatedStyle]}>
              <TouchableOpacity onPress={onCancel}>
                <Text>Lupa</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        )}
      </View>
    )
  }
}
export const HeaderWithSearchBar = withNavigation(HeaderWithSearchBarContainer)
