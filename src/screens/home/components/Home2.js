import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { Colors } from '../../../constants'
import { MapWithLocations } from '../../../components/MapWithLocations'
import { Favourite } from './Favourite'
import { MaterialIcons } from '@expo/vector-icons'
import { Input } from 'react-native-ui-kitten'
import { nearbyStops } from '../../../services/stopService'

class Home2 extends Component {
  state = {
    locations: [],
    latitude: 49.895,
    longitude: -97.138,
  }

  updateCoordenates = ({ latitude, longitude }) =>
    this.setState({ latitude, longitude })

  searchNearByBusStop = async () => {
    const { latitude, longitude } = this.state
    console.log('latitude, longitude: ', latitude, longitude)
    try {
      const locations = await nearbyStops({
        latitude,
        longitude,
        distance: 600,
      })
      this.setState({ locations })
    } catch (e) {
      console.log('ERROR: searchNearByBusStop', e)
    }
  }

  navigate = stopNumber => this.props.navigateTo(stopNumber)

  render() {
    const { favourites } = this.props
    const { locations, longitude, latitude } = this.state
    return (
      <View style={styles.root}>
        <View style={styles.sectionMap}>
          <MapWithLocations
            locations={locations}
            longitude={longitude}
            latitude={latitude}
            updateCoordenates={this.updateCoordenates}
          />
        </View>
        <View style={styles.sectionTop}>
          <View
            style={{
              position: 'absolute',
              top: 30,
              width: '80%',
              alignSelf: 'center',
            }}
          >
            <Input
              placeholder="Placeholder"
              icon={() => (
                <TouchableOpacity onPress={() => console.log('press Search')}>
                  <MaterialIcons name="search" size={32} color="black" />
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.sectionFloatButton}>
          <TouchableOpacity onPress={this.searchNearByBusStop}>
            <MaterialIcons name="my-location" size={32} color="black" />
          </TouchableOpacity>
        </View>
        <Favourite favourites={favourites} navigate={this.navigate} />
      </View>
    )
  }
}

Home2.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  goToNearbyStops: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
}

export { Home2 }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    zIndex: 0,
  },
  sectionMap: {
    flex: 1,
  },
  sectionTop: {
    position: 'absolute',
    top: 0,
    backgroundColor: Colors.NAV_BAR.background,
    height: '18%',
    width: '100%',
  },
  sectionFloatButton: {
    position: 'absolute',
    top: '22%',
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 30,
  },
})
