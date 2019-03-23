import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'

import { HomeScreen } from './../screens/home/HomeScreen'
import { BusStopInfoScreen } from './../screens/busStopInfo/BusStopInfoScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

const BusStack = createStackNavigator({
  BusStop: BusStopInfoScreen,
})

const AppSwitchNavigator = createSwitchNavigator({
  MainStack: HomeStack,
  Welcome: BusStack,
})

export default createAppContainer(AppSwitchNavigator)
