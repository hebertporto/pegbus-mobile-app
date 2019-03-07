import React, { Component, Fragment } from 'react'
import {
  Animated,
  Dimensions,
  ScrollView,
  View,
  Text,
  ViewPropTypes,
  PanResponder
} from 'react-native'
import styles from './styles/modalScrollView.style'
import PropTypes from 'prop-types'
const window = Dimensions.get('window')
class ModalScrollView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY(),
      scale: new Animated.Value(1),
      viewWidth: window.width,
      viewHeight: window.height
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (e, gestureState) => {
        // Set the initial value to the current state
        this.state.pan.setOffset({
          x: this.state.pan.x._value,
          y: this.state.pan.y._value
        })
        this.state.pan.setValue({ x: 0, y: 0 })
        Animated.spring(this.state.scale, {
          toValue: 1.01,
          friction: 1
        }).start()
      },

      // When we drag/pan the object, set the delate to the states pan position
      onPanResponderMove: Animated.event([
        null,
        {
          // dx: this.state.pan.x,
          dy: this.state.pan.y
        }
      ]),

      onPanResponderRelease: (e, { vx, vy }) => {
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset()
        Animated.spring(this.state.scale, { toValue: 1, friction: 1 }).start()
      }
    })
  }

  render() {
    const { children, backgroundView } = this.props
    const { pan, scale, viewWidth, viewHeight } = this.state
    const [translateX, translateY] = [pan.x, pan.y]
    const rotate = '0deg'
    return (
      <Fragment>
        <View
          style={[
            { width: viewWidth, height: viewHeight },
            styles.backgroundContainer
          ]}
        >
          {backgroundView()}
        </View>
        <Animated.View
          style={[
            {
              width: viewWidth,
              height: viewHeight / 2,
              transform: [{ translateX }, { translateY }, { rotate }, { scale }]
            },
            styles.scrollView
          ]}
          {...this._panResponder.panHandlers}
        >
          <View style={styles.container}>{children}</View>
        </Animated.View>
      </Fragment>
    )
  }
}

export { ModalScrollView }
