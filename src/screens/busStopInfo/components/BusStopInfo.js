import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

import { RouteInfo } from './RouteInfo'
import { BusRoutesFilter } from './BusRoutesFilter'

import { ScheduleTimeList } from './ScheduleTimeList'
import { ScheduleTimeListFooter } from './ScheduleTimeListFooter'

import { routes, dateRequested, stopInfo, shedules } from './../../../domain'

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

class BusStopInfo extends Component {
  state = defaultState

  componentDidMount() {
    // this.devData()
    this.getSchedule()
  }

  devData = () => {
    this.setState({
      data: shedules,
      dataFiltered: shedules,
      routes,
      dateRequested,
      stopInfo
    })
  }

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

  reloadSchedule = async () => {
    this.setState({ loading: true })
    try {
      const { shedules, dateRequested } = await this.props.getBusesTime()
      await this.setState({
        data: shedules,
        dataFiltered: shedules,
        error: false,
        loading: false,
        dateRequested
      })
      this.filterSchedule()
    } catch (e) {
      this.setState({
        error: true,
        loading: false
      })
    }
  }

  getSchedule = async () => {
    this.setState({ loading: true })
    try {
      const {
        shedules,
        stopInfo,
        dateRequested
      } = await this.props.getBusesTime()

      const routes = await this.props.getBusesNumber()

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
      console.log('ERROR', e)
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
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.25 }}>
          <RouteInfo
            stopInfo={stopInfo}
            dateRequested={dateRequested}
            isButtonDisable={routes.length <= 2}
            isFilterOpen={showFilter}
            filterToogle={this.toogleFilter}
            reload={this.reloadSchedule}
          />
        </View>

        {loading ? (
          this.renderLoading()
        ) : (
          <View style={{ flex: 0.68 }}>
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

export { BusStopInfo }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  }
})
