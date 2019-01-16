import React, { Component } from 'react'

import { BusStopInfo } from './components/BusStopInfo'
import { NavBarStyle } from '../../constants'
import { trackView } from '../../config/analytics'
import { stopBusAndSchedule, stopBusRoutes } from '../../services/stopService'

class BusStopInfoScreen extends Component {
  static navigationOptions = {
    ...NavBarStyle
  }

  componentDidMount() {
    trackView('Result Screen')
  }

  getSchedule = async () => {
    // const { routeNumber } = this.props.navigation.state.params
    const stopNumber = 10628
    const res = await stopBusAndSchedule({ stopNumber })
    console.log('getSchedule ', res)
    return res
  }

  getStopBusRoutes = async () => {
    // const { routeNumber } = this.props.navigation.state.params
    const stopNumber = 10628
    const res = await stopBusRoutes({ stopNumber })
    console.log('getRoute: ', res)
    return res
  }

  render() {
    // const { routeNumber } = this.props.navigation.state.params
    return (
      <BusStopInfo
        stopNumber={123}
        getBusesTime={this.getSchedule}
        getBusesNumber={this.getStopBusRoutes}
      />
    )
  }
}

export { BusStopInfoScreen }
