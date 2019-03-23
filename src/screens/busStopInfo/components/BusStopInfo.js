import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { RouteInfo } from './RouteInfo'
import { BusRoutesFilter } from './BusRoutesFilter'

import { ScheduleTimeList } from './ScheduleTimeList'
import { ScheduleTimeListFooter } from './ScheduleTimeListFooter'

import { routes, dateRequested, stopInfo, shedules } from './../../../domain'
import { LoaderAnimated } from '../../../components/LoaderAnimated'

const defaultState = {
  data: [],
  dataFiltered: [],
  dateRequested: '',
  selectedRoutes: [],
  routes: [],
  stopInfo: {},
  error: false,
  showFilter: false,
  loading: false,
  reloadLoading: false,
}

class BusStopInfo extends Component {
  state = defaultState

  componentDidMount() {
    this.getSchedule()
  }

  devData = () => {
    this.setState({
      data: shedules,
      dataFiltered: shedules,
      routes,
      dateRequested,
      stopInfo,
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
    this.setState({ reloadLoading: true })
    try {
      const { shedules, dateRequested } = await this.props.getBusesTime()
      await this.setState({
        data: shedules,
        dataFiltered: shedules,
        error: false,
        reloadLoading: false,
        dateRequested,
      })
      this.filterSchedule()
    } catch (e) {
      this.setState({
        error: true,
        reloadLoading: false,
      })
    }
  }

  getSchedule = async () => {
    this.setState({ loading: true })
    try {
      const {
        shedules,
        stopInfo,
        dateRequested,
      } = await this.props.getBusesTime()

      const routes = await this.props.getBusesNumber()

      this.setState({
        routes,
        stopInfo,
        data: shedules,
        dataFiltered: shedules,
        error: false,
        loading: false,
        dateRequested,
      })
    } catch (e) {
      console.log('ERROR', e)
      this.setState({
        ...defaultState,
        error: true,
        loading: false,
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
        <LoaderAnimated />
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
      reloadLoading,
      error,
    } = this.state
    return loading ? (
      this.renderLoading()
    ) : error ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, fontWeight: '700' }}>
          Sorry, Stop Bus Number Not Found.
        </Text>
      </View>
    ) : (
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
        <View style={{ flex: 0.68 }}>
          {reloadLoading ? (
            this.renderLoading()
          ) : (
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
          )}
        </View>
        <View style={{ flex: 0.07 }}>
          <ScheduleTimeListFooter />
        </View>
      </View>
    )
  }
}

export { BusStopInfo }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
})
