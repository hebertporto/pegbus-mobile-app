import React from 'react'
import { StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import * as Icon from '@expo/vector-icons'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApplicationProvider, Layout } from 'react-native-ui-kitten'
import AppNavigator from './src/navigation/AppNavigator'
import { mapping, light as lightTheme } from '@eva-design/eva'
import './src/config'

export default class App extends React.Component {
  state = {
    isReady: false,
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([require('./src/assets/images/header.png')]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        archivo: require('./src/assets/fonts/Archivo-Regular.ttf'),
        'archivo-semibold': require('./src/assets/fonts/Archivo-SemiBold.ttf'),
        cabin: require('./src/assets/fonts/Cabin-Regular.ttf'),
        'cabin-bold': require('./src/assets/fonts/Cabin-Bold.ttf'),
        'praktika-bold': require('./src/assets/fonts/Praktika-Bold.otf'),
        'praktika-light': require('./src/assets/fonts/Praktika-Light.otf'),
        'praktika-medium': require('./src/assets/fonts/Praktika-Medium.otf'),
        'praktika-regular': require('./src/assets/fonts/Praktika-Regular.otf'),
      }),
    ])
  }

  handleLoadingError = error => console.warn(error)

  handleFinishLoading = () => this.setState({ isReady: true })

  render() {
    const { isReady } = this.state

    return isReady ? (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Layout style={{ flex: 1 }}>
          <PaperProvider>
            <StatusBar barStyle="light-content" />
            <AppNavigator />
          </PaperProvider>
        </Layout>
      </ApplicationProvider>
    ) : (
      <AppLoading
        startAsync={this.loadResourcesAsync}
        onError={this.handleLoadingError}
        onFinish={this.handleFinishLoading}
      />
    )
  }
}
