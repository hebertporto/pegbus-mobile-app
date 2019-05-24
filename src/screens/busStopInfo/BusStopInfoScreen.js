import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'
import { BusStopInfo } from './components/BusStopInfo'
import { NavBarStyle } from '../../constants'
import { trackView } from '../../config/analytics'
import { stopBusAndSchedule, stopBusRoutes } from '../../services/stopService'
import { HeaderStarButton } from '../../components/buttons/HeaderStartButton'
import { saveTempStop } from '../../services/tempStop'

class BusStopInfoScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      ...NavBarStyle,
      headerTitleStyle: {
        ...NavBarStyle.headerTitleStyle,
        paddingLeft: 50
      },
      headerLeft: () => {
        return (
          <RkButton
            rkType="outline icon small"
            style={{ width: 40, marginRight: 15, borderColor: 'transparent' }}
            onPress={() => navigation.navigate('Home')}
          >
            <Ionicons name={'md-arrow-back'} size={28} color="white" />
          </RkButton>
        )
      },
      headerRight: (
        <HeaderStarButton stopNumber={navigation.getParam('stopNumber')} />
      )
    }
  }

  componentDidMount() {
    const { stopNumber } = this.props.navigation.state.params
    this.props.navigation.setParams({ stopNumber })
    trackView(`${stopNumber}`)
  }

  getSchedule = async () => {
    const { stopNumber } = this.props.navigation.state.params
    const res = await stopBusAndSchedule({ stopNumber })
    await saveTempStop({ stopInfo: res.stopInfo })
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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#EBEBEB' }}>
        <BusStopInfo
          stopNumber={stopNumber}
          getBusesTime={this.getSchedule}
          getBusesNumber={this.getStopBusRoutes}
        />
      </SafeAreaView>
    )
  }
}

export { BusStopInfoScreen }
