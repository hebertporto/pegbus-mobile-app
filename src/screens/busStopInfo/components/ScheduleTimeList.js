import React from 'react'
import { View, FlatList } from 'react-native'
import { ScheduleTimeItem } from './ScheduleTimeItem'

const keyExtractor = item => item.id

const ScheduleTimeList = ({ data, showFilter, filter }) => {
  return (
    <View style={{ flex: 1 }}>
      {showFilter ? <View style={{ flex: 0.35 }}>{filter}</View> : null}
      <View style={showFilter ? { flex: 0.65 } : { flex: 1 }}>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={ScheduleTimeItem}
        />
      </View>
    </View>
  )
}

export { ScheduleTimeList }
