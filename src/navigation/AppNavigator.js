import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { HomeScreen } from './../screens/home/HomeScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
