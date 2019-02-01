import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'

import { HomeScreen } from './../screens/home/HomeScreen'
import { BusStopInfoScreen } from './../screens/busStopInfo/BusStopInfoScreen'
import { TestScreen } from '../screens/TestScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Play: TestScreen
})

const BusStack = createStackNavigator({
  BusStop: BusStopInfoScreen
})

const AppSwitchNavigator = createSwitchNavigator({
  MainStack: HomeStack,
  Welcome: BusStack
})

export default createAppContainer(AppSwitchNavigator)
