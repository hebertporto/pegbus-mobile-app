import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {
  stopBusAndSchedule,
  stopBusRoutes
} from '../../../services/stopService'
import InputSearchRow from '../../../ui/InputSearchRow'
import Banner from '../../../ui/Banner'

import { BusStopHeader } from './BusStopHeader'
import { ScheduleTimeItem } from './ScheduleTimeItem'

const mockData = [
  { id: 1, number: 11, name: 'Aaaaa @ BBBBB' },
  { id: 2, number: 22, name: 'Ccccc @ ggggg' },
  { id: 3, number: 33, name: 'Dddddd @ Fffff' },
  { id: 4, number: 44, name: 'GGGGGG @ fffff' }
]

const defaultState = {
  data: [],
  dataFiltered: [],
  selectedRoutes: [],
  routes: [],
  stopInfo: {},
  error: false
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
    this.setState(defaultState)
    try {
      const { shedules, stopInfo } = await stopBusAndSchedule({ stopNumber })
      console.log('shedules: ', shedules)
      const routes = await stopBusRoutes({ stopNumber })
      console.log('routes', routes)
      this.setState({
        routes,
        stopInfo,
        data: shedules,
        dataFiltered: shedules,
        error: false
      })
    } catch (e) {
      this.setState({
        data: [],
        dataFiltered: [],
        routes: [],
        stopInfo: {},
        error: true
      })
    }
  }

  render() {
    const { stopInfo, routes, selectedRoutes, data } = this.state
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.15 }}>
          <InputSearchRow searchHandler={this.getSchedule} />
        </View>

        <ScrollView
          style={{ flex: 0.4 }}
          stickyHeaderIndices={[0]}
          contentContainerStyle={styles.contentContainer}
        >
          {data.length ? (
            <BusStopHeader
              stopInfo={stopInfo}
              routes={routes}
              handleSelectRoute={this.handleSelectRoute}
              filteredRoutes={selectedRoutes}
            />
          ) : null}
          {this.state.error && (
            <View>
              <Text>Bus Stop Not Found</Text>
            </View>
          )}
          {this.state.dataFiltered.map(item => {
            return <ScheduleTimeItem key={item.id} item={item} />
          })}
        </ScrollView>

        <View style={{ flex: 0.15 }}>
          <Banner />
        </View>
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
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    marginTop: 0
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  }
})
