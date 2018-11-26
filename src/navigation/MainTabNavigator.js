import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../ui/TabBarIcon'

import { HomeScreen } from '../screens/home/HomeScreen'
import BookmarkScreen from '../screens/bookmark/BookmarkScreen'

import { COLORS } from '../constants/Colors'

const navigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.NAV_BAR.background
  },
  headerTitleStyle: {
    textAlign: 'center',
    flexGrow: 1
  },
  headerTintColor: COLORS.NAV_BAR.tint
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions
  }
)

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
}

const BookmarkStack = createStackNavigator(
  {
    Bookmark: BookmarkScreen
  },
  {
    initialRouteName: 'Bookmark',
    navigationOptions
  }
)

BookmarkStack.navigationOptions = {
  tabBarLabel: 'Bookmark',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-link${focused ? '' : '-outline'}`
          : 'md-link'
      }
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  BookmarkStack
})
