import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles/BusStopHeader.style'

const Item = ({ number, onSelectRoute, selected }) => {
  return (
    <TouchableOpacity onPress={() => onSelectRoute(number)}>
      <View style={styles.itemFilter}>
        <Text style={selected ? styles.textSelected : styles.textUnselected}>
          {number}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const BusRoutesFilter = ({ routes, handleSelectRoute, filteredRoutes }) => {
  return true ? (
    <View style={styles.root}>
      <View style={styles.labelWrapper}>
        <Text style={styles.label}>Filter by bus number</Text>
      </View>
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

export { BusRoutesFilter }
