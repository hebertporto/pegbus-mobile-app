import React, { Component } from 'react'
import { View } from 'react-native'
import { LoaderAnimated } from '../../ui/LoaderAnimated'

class TesteScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <LoaderAnimated />
      </View>
    )
  }
}

export { TesteScreen }

// import React from 'react'
// import { StyleSheet, View } from 'react-native'
// import { DangerZone } from 'expo'
// const { Lottie } = DangerZone

// const animaLocation = require('../../assets/animations/location.json')

// class TesteScreen extends React.Component {
//   componentDidMount() {
//     this.playAnimation()
//   }

//   playAnimation = () => {
//     this.animation.reset()
//     this.animation.play()
//   }

//   render() {
//     return (
//       <View style={styles.animationContainer}>
//         <Lottie
//           ref={animation => {
//             this.animation = animation
//           }}
//           style={{
//             width: 150,
//             height: 150,
//             backgroundColor: 'transparent'
//           }}
//           source={animaLocation}
//         />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   animationContainer: {
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1
//   },
//   buttonContainer: {
//     paddingTop: 20
//   }
// })

// export { TesteScreen }
