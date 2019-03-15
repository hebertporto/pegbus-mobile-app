import React, { Component } from 'react'
import {
  StyleSheet,
  Animated,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

const ANIMATION_DURATION = 250
const ROW_HEIGHT = 70

// https://goshakkk.name/react-native-animated-appearance-disappearance/
// https://hackernoon.com/how-to-animate-the-items-of-a-react-native-flatlist-32c8cbf7ea3d
class StopRow extends Component {
  constructor(props) {
    super(props)
    this._animated = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this._animated, {
      toValue: 1,
      duration: ANIMATION_DURATION
    }).start()
  }

  render() {
    const { number, name, distance } = this.props
    const rowStyles = [
      styles.row,
      {
        height: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, ROW_HEIGHT],
          extrapolate: 'clamp'
        })
      },
      {
        opacity: this._animated.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1]
        })
      },
      {
        transform: [
          {
            scale: this._animated.interpolate({
              inputRange: [0, 1],
              outputRange: [1.1, 1]
            })
          }
        ]
      }
    ]
    return (
      <TouchableOpacity>
        <Animated.View style={rowStyles}>
          <Text style={styles.name}>{name}</Text>
          <Text>#{number}</Text>
          <Text>{distance}m away</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    height: ROW_HEIGHT,
    backgroundColor: '#EBEBEB',
    marginBottom: 5,
    padding: 5,
    borderRadius: 10
  },
  name: {
    fontSize: 18,
    fontWeight: '500'
  }
})

export { StopRow }
