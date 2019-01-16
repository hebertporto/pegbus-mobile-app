import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import { HomeScreen } from './../screens/home/HomeScreen'
import { BusStopInfoScreen } from './../screens/busStopInfo/BusStopInfoScreen'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    BusStop: BusStopInfoScreen
  },
  {
    initialRouteName: 'BusStop'
  }
)

export default createAppContainer(AppNavigator)
