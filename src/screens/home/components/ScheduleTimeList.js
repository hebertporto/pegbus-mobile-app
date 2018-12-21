import React from 'react'
import { FlatList } from 'react-native'
import { ScheduleTimeItem } from './ScheduleTimeItem'

const keyExtractor = item => item.id

const ScheduleTimeList = ({ data, showFilter, filter }) => {
  return (
    <FlatList
      ListHeaderComponent={showFilter ? filter : null}
      data={data}
      keyExtractor={keyExtractor}
      renderItem={ScheduleTimeItem}
    />
  )
}

export { ScheduleTimeList }
