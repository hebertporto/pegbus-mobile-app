import React, { Component, Fragment } from 'react'
import {
  NativeModules,
  Animated,
  Dimensions,
  ScrollView,
  View,
  Text,
  ViewPropTypes,
  PanResponder
} from 'react-native'
import { Header } from 'react-navigation'
import styles from './styles/modalScrollView.style'
import PropTypes from 'prop-types'

const window = Dimensions.get('window')

class ModalScrollView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pan: new Animated.ValueXY({ x: 0, y: 700 }),
      scale: new Animated.Value(1),
      viewWidth: window.width,
      viewHeight: window.height
    }
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log('onStartShouldSetPanResponder')
        return true
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        console.log('onStartShouldSetPanResponderCapture')
        return true
      },
      onMoveShouldSetResponderCapture: () => {
        console.log('onMoveShouldSetResponderCapture')
        return true
      },
      onMoveShouldSetPanResponderCapture: () => {
        console.log('onMoveShouldSetPanResponderCapture')
        const [translateX, translateY] = [
          this.state.pan.x._value,
          this.state.pan.y._value
        ]
        const limit = -window.height / 4
        // console.log(
        //   'limit',
        //   limit,
        //   'translateY',
        //   translateY,
        // )
        return true
        // return translateY > limit
      },
      onPanResponderGrant: (e, gestureState) => {
        console.log('onPanResponderGrant')
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

      onPanResponderRelease: (e, gestureState) => {
        // Flatten the offset to avoid erratic behavior
        this.state.pan.flattenOffset()
        //console.log(gestureState.moveY, window.height)
        const { StatusBarManager } = NativeModules
        const posY = gestureState.moveY
        StatusBarManager.getHeight(({ height }) => {
          const navHeight = height + Header.HEIGHT
          const stepSize = window.height / 4
          console.log('posY:', posY)
          // console.log('status bar height', height)
          // console.log('navbar height: ', Header.HEIGHT)
          console.log('stepSize:', stepSize)
          console.log('navHeight:', navHeight)

          if (posY > 0 && posY < stepSize + navHeight) {
            console.log(this.state.pan)
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: -(stepSize + navHeight) },
              // tension: 200,
              friction: 5
              // speed: 1
            }).start()
          } else if (
            posY > stepSize + navHeight &&
            posY < stepSize * 2 + navHeight
          ) {
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: 0 },
              friction: 5
            }).start()
          } else if (
            posY > stepSize * 2 + navHeight &&
            posY < stepSize * 3 + navHeight
          ) {
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: stepSize },
              friction: 5
            }).start()
          } else {
            Animated.spring(this.state.pan, {
              toValue: { x: 0, y: stepSize + navHeight + 15 },
              friction: 5
            }).start()
          }
        })
      }
    })

    Animated.spring(this.state.pan, {
      toValue: { x: 0, y: 0 },
      tension: 2,
      friction: 5
    }).start(e => {
      console.log('finished', e.finished)
      // this.setState({ animationFinished: true })
    })
  }

  render() {
    const { children, backgroundView } = this.props
    const { pan, scale, viewWidth, viewHeight } = this.state
    const [translateX, translateY] = [pan.x, pan.y]
    console.log('translateX', translateX, 'translateY', translateY)
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
          <View style={styles.container}>
            <View
              style={styles.handlerContainer}
              // {...this._panResponder.panHandlers}
            >
              <View style={styles.handler} />
            </View>
            <ScrollView
              style={{ flex: 1, padding: 7 }}
              contentContainerStyle={{ flexGrow: 1 }}
              scrollEnabled={true}
              scrollEventThrottle={5}
              onScroll={e => {
                //console.log('onScroll', e.nativeEvent.contentOffset)
                console.log('onScroll')
                this.state.pan.setValue({
                  x: 0,
                  y: -e.nativeEvent.contentOffset.y
                })
                // e.preventDefault()
                // e.stopPropagation()
              }}
              onScrollBeginDrag={e => {
                console.log('onScrollBeginDrag')
                // e.preventDefault()
                // e.stopPropagation()
              }}
              onScrollEndDrag={e => {
                console.log('onScrollEndDrag')
              }}
            >
              {children}
            </ScrollView>
          </View>
        </Animated.View>
      </Fragment>
    )
  }
}

export { ModalScrollView }
