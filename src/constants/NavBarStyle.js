import React from 'react'
import { Colors } from './Colors'
import { Image } from 'react-native'

export const NavBarStyle = {
  headerTitle: (
    <Image
      source={require('../assets/images/header.png')}
      style={{
        resizeMode: 'contain',
        height: 34
      }}
    />
  ),
  headerStyle: {
    backgroundColor: Colors.NAV_BAR.background
  },
  headerTitleStyle: {
    textAlign: 'center',
    flexGrow: 1
  },
  headerTintColor: Colors.NAV_BAR.tint
}
