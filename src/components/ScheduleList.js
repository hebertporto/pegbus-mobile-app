import React from 'react'
import { FlatList } from 'react-native'
import ScheduleItem from './ScheduleItem'

const keyExtractor = item => item.id

export default (ScheduleList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={ScheduleItem}
    />
  )
})
