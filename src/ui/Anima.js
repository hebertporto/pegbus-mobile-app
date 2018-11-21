import React from 'react'
import {
  StyleSheet,
  Animated,
  View,
  TouchableWithoutFeedback
} from 'react-native'
import { RkTextInput } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'

class Anima extends React.Component {
  state = {
    witdhAnimation: new Animated.Value(50)
  }

  handlePress = () => {
    Animated.parallel([
      Animated.timing(this.state.witdhAnimation, {
        toValue: 250,
        duration: 500
      })
    ]).start()
  }

  render() {
    const animatedStyles = {
      width: this.state.witdhAnimation
    }
    return (
      <View style={styles.container}>
        <View style={styles.row1}>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.row2}>
          <Animated.View style={[styles.box, animatedStyles]}>
            <TouchableWithoutFeedback onPress={this.handlePress}>
              <Ionicons name="md-search" size={26} />
            </TouchableWithoutFeedback>
            <RkTextInput label={<Ionicons name={'md-search'} size={26} />} />
          </Animated.View>
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
    height: 50
  }
})

export { Anima }
