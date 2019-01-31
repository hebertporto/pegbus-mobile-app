import React, { Component } from 'react'

import { BusStopInfo } from './components/BusStopInfo'
import { NavBarStyle } from '../../constants'
import { trackView } from '../../config/analytics'
import { stopBusAndSchedule, stopBusRoutes } from '../../services/stopService'
import { HeaderStarButton } from '../../ui/buttons/HeaderStartButton'
import { saveTempStop } from '../../services/tempStop'

class BusStopInfoScreen extends Component {
  static navigationOptions = {
    ...NavBarStyle,
    headerTitleStyle: {
      ...NavBarStyle.headerTitleStyle,
      paddingLeft: 50
    },
    headerRight: <HeaderStarButton />
  }

  componentDidMount() {
    const { stopNumber } = this.props.navigation.state.params
    trackView(`${stopNumber}`)
  }

  getSchedule = async () => {
    const { stopNumber } = this.props.navigation.state.params
    const res = await stopBusAndSchedule({ stopNumber })
    await saveTempStop(res.stopInfo)
    return res
  }

  getStopBusRoutes = async () => {
    const { stopNumber } = this.props.navigation.state.params
    const res = await stopBusRoutes({ stopNumber })
    return res
  }

  render() {
    const { stopNumber } = this.props.navigation.state.params
    return (
      <BusStopInfo
        stopNumber={stopNumber}
        getBusesTime={this.getSchedule}
        getBusesNumber={this.getStopBusRoutes}
      />
    )
  }
}

export { BusStopInfoScreen }
