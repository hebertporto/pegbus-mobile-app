import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native'

import { InputSearchRow } from '../../../ui/InputSearchRow'
import { BusStopHeader } from './BusStopHeader'
import { ScheduleTimeItem } from './ScheduleTimeItem'

import {
  stopBusAndSchedule,
  stopBusRoutes
} from '../../../services/stopService'

import { ScheduleTimeList } from './ScheduleTimeList'
import { ScheduleTimeListFooter } from './ScheduleTimeListFooter'

const defaultState = {
  data: [],
  dataFiltered: [],
  dateRequested: '',
  selectedRoutes: [],
  routes: [],
  stopInfo: {},
  error: false,
  showFilter: false,
  loading: false
}

class Home extends Component {
  state = defaultState

  handleSelectRoute = route => {
    const { selectedRoutes } = this.state
    let newSelected
    if (selectedRoutes.includes(route)) {
      newSelected = selectedRoutes.filter(r => r !== route)
    } else {
      newSelected = [route].concat(selectedRoutes)
    }
    this.setState({ selectedRoutes: newSelected }, this.filterSchedule)
  }

  filterSchedule = () => {
    const { data, selectedRoutes } = this.state
    const dataFiltered = selectedRoutes.length
      ? data.filter(busSchedule => {
          return selectedRoutes.includes(busSchedule.number)
        })
      : data
    this.setState({ dataFiltered })
  }

  getSchedule = async stopNumber => {
    this.setState({ ...defaultState, loading: true })
    try {
      const { shedules, stopInfo, dateRequested } = await stopBusAndSchedule({
        stopNumber
      })
      // console.log('shedules: ', shedules)
      const routes = await stopBusRoutes({ stopNumber })
      this.setState({
        routes,
        stopInfo,
        data: shedules,
        dataFiltered: shedules,
        error: false,
        loading: false,
        dateRequested
      })
    } catch (e) {
      this.setState({
        ...defaultState,
        error: true,
        loading: false
      })
    }
  }

  toogleFilter = () =>
    this.setState(prevState => ({ showFilter: !prevState.showFilter }))

  render() {
    const {
      stopInfo,
      routes,
      selectedRoutes,
      dataFiltered,
      showFilter,
      dateRequested,
      loading
    } = this.state
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.2 }}>
          <InputSearchRow
            searchHandler={this.getSchedule}
            isFilterOpen={showFilter}
            filterToogle={this.toogleFilter}
            dateRequested={dateRequested}
          />
        </View>

        {/* <ScrollView
          style={{ flex: 0.8 }}
          stickyHeaderIndices={showFilter ? [0] : null}
          contentContainerStyle={styles.contentContainer}
        >
          {loading && <ActivityIndicator size="large" color="#0000ff" />}
          {this.state.error && (
            <View>
              <Text>Bus Stop Not Found</Text>
            </View>
          )}
        </ScrollView> */}
        <View style={{ flex: 0.7 }}>
          <ScheduleTimeList
            data={dataFiltered}
            showFilter={showFilter}
            filter={
              <BusStopHeader
                stopInfo={stopInfo}
                routes={routes}
                handleSelectRoute={this.handleSelectRoute}
                filteredRoutes={selectedRoutes}
              />
            }
          />
        </View>
        {dateRequested.length ? (
          <View style={{ flex: 0.1 }}>
            <ScheduleTimeListFooter />
          </View>
        ) : null}
      </View>
    )
  }
}

export { Home }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginHorizontal: 10
  }
})
