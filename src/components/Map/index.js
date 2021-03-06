import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import { styles } from './styles'

class Map extends Component {
  state = {
    latitude: parseFloat(this.props.latitude),
    longitude: parseFloat(this.props.longitude),
    latitudeDelta: 0.00072026,
    longitudeDelta: 0.0014299,
  }

  render() {
    const { longitude, latitude, latitudeDelta, longitudeDelta } = this.state
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
          }}
        >
          <MapView.Marker coordinate={{ latitude, longitude }} />
        </MapView>
      </View>
    )
  }
}

export { Map }
