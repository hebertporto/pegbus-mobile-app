import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
} from 'react-native'
import { BookmarkList } from './BookmarkList'

const fullWidth = Dimensions.get('window').width
const fullHeight = Dimensions.get('window').height - 100
const initialWidth = fullWidth * 0.7
const initialHeight = fullHeight * 0.08

class Favourite extends React.Component {
  state = {
    width: new Animated.Value(initialWidth),
    height: new Animated.Value(initialHeight),
    opacity: new Animated.Value(0),
    openView: false,
  }

  startAnimation = () => {
    const { openView } = this.state
    Animated.parallel([
      Animated.timing(this.state.width, {
        toValue: openView ? initialWidth : fullWidth,
        duration: 300,
      }),
      Animated.timing(this.state.height, {
        toValue: openView ? initialHeight : fullHeight,
        duration: 300,
      }),
      Animated.timing(this.state.opacity, {
        toValue: openView ? 0 : 1,
        duration: 300,
      }),
    ]).start(() => {
      this.setState(prevState => ({ openView: !prevState.openView }))
    })
  }

  render() {
    const { width, height, opacity } = this.state
    const animatedStyles = {
      width,
      height,
    }
    const animatedStylesList = {
      opacity,
    }
    return (
      <Animated.View style={[styles.root, animatedStyles]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.headerText}>FAVOURITES</Text>
          <TouchableWithoutFeedback onPress={this.startAnimation}>
            <Text>#</Text>
          </TouchableWithoutFeedback>
        </View>
        <Animated.View style={[styles.sectionBusList, animatedStylesList]}>
          <Text>Lista de saved bus stop</Text>
          <BookmarkList
            data={this.props.favourites}
            navigate={this.props.navigate}
          />
        </Animated.View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F1F2F6',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'praktika-bold',
    letterSpacing: 1.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionBusList: {
    flex: 1,
    flexDirection: 'column',
  },
})

export { Favourite }
