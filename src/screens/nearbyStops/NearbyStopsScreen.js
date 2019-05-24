import React, { Component } from 'react'
import { NavBarStyle } from '../../constants'
import { NearbyStops } from './components/NearbyStops'
import { Constants, Location, Permissions } from 'expo'
import { ModalCard } from '../../ui/ModalCard'
import { nearbyStops } from '../../services/stopService'

class NearbyStopsScreen extends Component {
  static navigationOptions = () => {
    return {
      title: 'Peg Bus',
      ...NavBarStyle
    }
  }

  state = {
    isLoading: true,
    stops: []
  }

  componentDidMount() {
    this.checkLocationPermission()
  }

  checkLocationPermission = async () => {
    const enabled = await this.hasLocationPermission()
    console.log('enabled', enabled)
    if (enabled) {
      const { latitude, longitude } = await this.getLocationAsync()
      const distance = 500
      const stops = await nearbyStops({ latitude, longitude, distance })
      this.setState({ stops, isLoading: false })
    }
  }

  hasLocationPermission = async () => {
    try {
      await Location.getCurrentPositionAsync({})
      return true
    } catch (e) {
      return false
    }
  }

  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      })
    }

    const location = await Location.getCurrentPositionAsync({})
    const { latitude, longitude } = location.coords
    return { latitude, longitude }
    // console.log(location)
    // this.setState({ latitude, longitude })
  }

  render() {
    const { stops, isLoading } = this.state
    return <NearbyStops stops={stops} isLoading={isLoading} />
    // return stops.length ?  : this.renderLoading()
    // return (
    //   <ModalCard
    //     title={'Edit Card'}
    //     question={'Potato?'}
    //     answer={'yes'}
    //     onCancel={() => {}}
    //     onFinish={(question, answer) => {}}
    //   />
    // )
  }
}

export { NearbyStopsScreen }
