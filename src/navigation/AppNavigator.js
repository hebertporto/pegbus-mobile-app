// import React from 'react'
// import { createSwitchNavigator } from 'react-navigation'

// import MainTabNavigator from './MainTabNavigator'

// export default createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator
// })

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
