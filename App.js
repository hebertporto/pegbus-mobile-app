import React from 'react'
import { AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './src/navigation/AppNavigator'

import './src/config'

export default class App extends React.Component {
  state = {
    isReady: false
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./src/assets/images/robot-dev.png'),
        require('./src/assets/images/robot-prod.png')
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf'),
        archivo: require('./src/assets/fonts/Archivo-Regular.ttf'),
        'archivo-semibold': require('./src/assets/fonts/Archivo-SemiBold.ttf'),
        cabin: require('./src/assets/fonts/Cabin-Regular.ttf'),
        'cabin-bold': require('./src/assets/fonts/Cabin-Bold.ttf')
      })
    ])
  }

  handleLoadingError = error => {
    console.warn(error)
  }

  handleFinishLoading = () => {
    this.setState({ isReady: true })
  }

  render() {
    if (this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      )
    }
    return <AppNavigator />
  }
}
