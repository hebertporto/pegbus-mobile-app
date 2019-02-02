import React from 'react'

import { RkButton } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'

const BackHomeButton = ({ navigateTo }) => {
  return (
    <RkButton
      rkType="outline icon small"
      style={{ width: 40, marginRight: 15, borderColor: 'transparent' }}
      onPress={navigateTo}
    >
      <Ionicons name={'md-star-outline'} size={28} color="white" />
    </RkButton>
  )
}

export { BackHomeButton }
