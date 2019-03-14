import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation'

import { HomeScreen } from './../screens/home/HomeScreen'
import { TesteScreen } from './../screens/home/TesteScreen'
import { BusStopInfoScreen } from './../screens/busStopInfo/BusStopInfoScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Teste: TesteScreen
})

const BusStack = createStackNavigator({
  BusStop: BusStopInfoScreen
})

const AppSwitchNavigator = createSwitchNavigator({
  MainStack: HomeStack,
  Welcome: BusStack
})

export default createAppContainer(AppSwitchNavigator)
