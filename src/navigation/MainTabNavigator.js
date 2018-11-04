import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../ui/TabBarIcon';

import HomeScreen from '../screens/home/HomeScreen';
import BookmarkScreen from '../screens/bookmark/BookmarkScreen';

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#2196F3',
  },
  headerTintColor: '#fff',
};

const HomeStack = createStackNavigator(
  {
  Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions
  }
);

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
  ),
};

const BookmarkStack = createStackNavigator(
  {
    Bookmark: BookmarkScreen,
  },
  {
    navigationOptions
  }
);

BookmarkStack.navigationOptions = {
  tabBarLabel: 'Bookmark',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
        ? `ios-link${focused ? '' : '-outline'}`
        : 'md-link'
      }
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  BookmarkStack
});
