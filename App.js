import React from 'react'
import { StatusBar } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/navigation/AppNavigator'

import './src/config'
import { LocalProvider } from './src/context/LocalContext'

export default class App extends React.Component {
  state = {
    isReady: false
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./src/assets/images/header.png')]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        archivo: require('./src/assets/fonts/Archivo-Regular.ttf'),
        'archivo-semibold': require('./src/assets/fonts/Archivo-SemiBold.ttf'),
        cabin: require('./src/assets/fonts/Cabin-Regular.ttf'),
        'cabin-bold': require('./src/assets/fonts/Cabin-Bold.ttf')
      })
    ])
  }

  handleLoadingError = error => console.warn(error)

  handleFinishLoading = () => this.setState({ isReady: true })

  render() {
    const { isReady } = this.state

    return isReady ? (
      <PaperProvider>
        <LocalProvider>
          <StatusBar barStyle="light-content" />
          <AppNavigator />
        </LocalProvider>
      </PaperProvider>
    ) : (
      <AppLoading
        startAsync={this.loadResourcesAsync}
        onError={this.handleLoadingError}
        onFinish={this.handleFinishLoading}
      />
    )
  }
}
