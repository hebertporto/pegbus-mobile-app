import React from 'react'
import { View, Text } from 'react-native'

const shortWord = direction => {
  switch (direction.toLowerCase()) {
    case 'northbound':
      return { name: 'NB', bgColor: 'blue' }
    case 'southbound':
      return { name: 'SB', bgColor: 'green' }
    case 'eastbound':
      return { name: 'EB', bgColor: 'yellow' }
    case 'westbound':
      return { name: 'WB', bgColor: 'red' }
    default:
      return { name: '', bgColor: '#ffffff' }
  }
}

const SquareIndicator = ({ direction }) => {
  const { name, bgColor } = shortWord(direction)
  return (
    <View
      style={{
        width: 25,
        height: 25,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontWeight: '600', color: 'white', fontSize: 14 }}>
        {name}
      </Text>
    </View>
  )
}

export { SquareIndicator }
