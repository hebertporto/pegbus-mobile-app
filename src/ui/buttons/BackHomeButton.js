import React from 'react'
import { withNavigation } from 'react-navigation'

import { RkButton } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'

const BackHomeButtonContainer = ({ navigation }) => {
  return (
    <RkButton
      rkType="outline icon small"
      style={{ width: 40, marginRight: 15, borderColor: 'transparent' }}
      onPress={() => navigation.push('Home')}
    >
      <Ionicons name={'md-star-outline'} size={28} color="white" />
    </RkButton>
  )
}
const BackHomeButton = withNavigation(BackHomeButtonContainer)

export { BackHomeButton }
