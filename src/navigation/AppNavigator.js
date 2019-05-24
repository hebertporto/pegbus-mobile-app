import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation'

import { HomeScreen } from './../screens/home/HomeScreen'
import { BusStopInfoScreen } from './../screens/busStopInfo/BusStopInfoScreen'
import { NearbyStopsScreen } from './../screens/nearbyStops/NearbyStopsScreen'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    NearbyStops: NearbyStopsScreen,
  },
  { headerLayoutPreset: 'center' },
)

const BusStack = createStackNavigator(
  {
    BusStop: BusStopInfoScreen,
  },
  { headerLayoutPreset: 'center' },
)

const AppSwitchNavigator = createSwitchNavigator({
  MainStack: HomeStack,
  Welcome: BusStack,
})

export default createAppContainer(AppSwitchNavigator)
