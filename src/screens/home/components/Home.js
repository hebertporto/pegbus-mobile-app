import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import { InputSearchRow } from '../../../ui/InputSearchRow'
import { BusRoutesFilter } from './BusRoutesFilter'

import {
  stopBusAndSchedule,
  stopBusRoutes
} from '../../../services/stopService'

import { ScheduleTimeList } from './ScheduleTimeList'
import { ScheduleTimeListFooter } from './ScheduleTimeListFooter'
import { trackRouteSearch } from '../../../config/analytics'

const t = [
  {
    id: 'da3fd863-d724-457d-9256-082ed402ed24',
    name: 'to Downtown',
    number: 16,
    timeEstimated: '2018-12-21T10:14:24',
    timeScheduled: '2018-12-21T20:14:24'
  },
  {
    id: 'd7e8c677-4ea1-4179-a8ac-7086acf3d5b4',
    name: '& Leighton',
    number: 20,
    timeEstimated: '2018-12-21T00:14:53',
    timeScheduled: '2018-12-21T10:14:53'
  },
  {
    id: 'f221a942-63d7-4ab5-b504-ab77fc9dfffa',
    name: 'via London',
    number: 44,
    timeEstimated: '2018-12-21T20:15:01',
    timeScheduled: '2018-12-21T20:15:01'
  }
]
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
      trackRouteSearch(stopNumber)
      const { shedules, stopInfo, dateRequested } = await stopBusAndSchedule({
        stopNumber
      })
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

  renderLoading = () => {
    return (
      <View
        style={{ flex: 0.75, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    )
  }
  render() {
    const {
      stopInfo,
      routes,
      selectedRoutes,
      dataFiltered,
      showFilter,
      dateRequested,
      loading,
      error
    } = this.state
    console.log('stopInfo', stopInfo)
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.15 }}>
          <InputSearchRow
            searchHandler={this.getSchedule}
            isFilterOpen={showFilter}
            filterToogle={this.toogleFilter}
            dateRequested={dateRequested}
            isButtonDisable={routes.length <= 0}
          />
        </View>

        {loading ? (
          this.renderLoading()
        ) : (
          <View style={{ flex: 0.78 }}>
            <ScheduleTimeList
              data={dataFiltered}
              showFilter={showFilter}
              filter={
                <BusRoutesFilter
                  stopInfo={stopInfo}
                  routes={routes}
                  handleSelectRoute={this.handleSelectRoute}
                  filteredRoutes={selectedRoutes}
                />
              }
              notFound={error}
            />
          </View>
        )}

        {dateRequested.length ? (
          <View style={{ flex: 0.07 }}>
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
    flexDirection: 'column'
  }
})
