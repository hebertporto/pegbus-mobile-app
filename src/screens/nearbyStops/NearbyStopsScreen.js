import React, { Component } from 'react'
import { NavBarStyle } from '../../constants'
import { NearbyStops } from './components/NearbyStops'
import { Constants, Location, Permissions } from 'expo'
import { ModalCard } from '../../ui/ModalCard'

class NearbyStopsScreen extends Component {
  static navigationOptions = () => {
    return {
      title: 'Peg Bus',
      ...NavBarStyle
    }
  }

  componentDidMount() {
    this.checkLocationPermission()
  }

  checkLocationPermission = async () => {
    const enabled = await this.hasLocationPermission()
    console.log('enabled', enabled)
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

    let location = await Location.getCurrentPositionAsync({})
    this.setState({ location })
  }

  render() {
    // return (
    //   <ModalCard
    //     title={'Edit Card'}
    //     question={'Potato?'}
    //     answer={'yes'}
    //     onCancel={() => {}}
    //     onFinish={(question, answer) => {}}
    //   />
    // )
    return <NearbyStops />
  }
}

export { NearbyStopsScreen }
