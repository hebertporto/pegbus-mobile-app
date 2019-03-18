import React from 'react'
import { View } from 'react-native'
import { DangerZone } from 'expo'
import { styles } from './styles'

const { Lottie } = DangerZone
const animaLocation = require('../../assets/animations/location.json')

class LoaderAnimated extends React.Component {
  componentDidMount() {
    this.playAnimation()
  }

  playAnimation = () => {
    this.animation.reset()
    this.animation.play()
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <Lottie
          ref={animation => {
            this.animation = animation
          }}
          style={styles.lottie}
          source={animaLocation}
        />
      </View>
    )
  }
}

export { LoaderAnimated }
