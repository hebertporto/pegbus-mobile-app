import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles/BusStopHeader.style'

const Item = ({ number, onSelectRoute, selected }) => {
  return (
    <TouchableOpacity onPress={() => onSelectRoute(number)}>
      <View style={styles.itemFilter}>
        <Text style={selected ? styles.textSelected : null}>{number}</Text>
      </View>
    </TouchableOpacity>
  )
}

const BusStopHeader = ({
  stopInfo,
  routes,
  handleSelectRoute,
  filteredRoutes
}) => {
  const { name, number } = stopInfo

  const mockRoutes = [1, 11, 18, 44, 45, 47, 48, 55, 66, 80, 88]
  return true ? (
    <View style={styles.root}>
      <View style={styles.info}>
        <View style={styles.busNumber}>
          {routes.map(route => {
            return (
              <Item
                key={route}
                number={route}
                onSelectRoute={handleSelectRoute}
                selected={filteredRoutes.includes(route)}
              />
            )
          })}
        </View>
      </View>
    </View>
  ) : null
}

export { BusStopHeader }
