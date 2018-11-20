import React from 'react'
import {
  StyleSheet,
  Animated,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

class Anima extends React.Component {
  state = {
    witdhAnimation: new Animated.Value(0),
    heightAnimation: new Animated.Value(1)
  }

  handlePress = () => {
    Animated.parallel([
      Animated.timing(this.state.witdhAnimation, {
        toValue: 400,
        duration: 500
      }),
      Animated.timing(this.state.heightAnimation, {
        toValue: 50,
        duration: 300
      })
    ]).start(() => {
      alert('completed')
    })
  }

  render() {
    const animatedStyles = {
      width: this.state.witdhAnimation,
      height: this.state.heightAnimation
    }
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.row2}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  row1: {
    flex: 0.5,
    backgroundColor: 'yellow'
  },
  row2: {
    flex: 0.5
  },
  icon: {
    backgroundColor: 'yellow'
  },
  box: {
    backgroundColor: 'tomato'
  }
})

export { Anima }
