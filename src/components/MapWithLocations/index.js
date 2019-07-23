import React, { Component } from 'react'
import { View } from 'react-native'
import MapView from 'react-native-maps'
import { styles } from './styles'

class MapWithLocations extends Component {
  state = {
    latitude: parseFloat(this.props.latitude),
    longitude: parseFloat(this.props.longitude),
    latitudeDelta: 0.00072026,
    longitudeDelta: 0.0014299,
  }

  render() {
    const { longitude, latitude, latitudeDelta, longitudeDelta } = this.state
    const { locations, updateCoordenates } = this.props
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
          zoomEnabled={false}
          onRegionChangeComplete={region =>
            updateCoordenates({
              latitude: parseFloat(region.latitude),
              longitude: parseFloat(region.longitude),
            })
          }
        >
          {locations.map(marker => {
            const { number, latitude, longitude, name } = marker
            return (
              <MapView.Marker
                onPress={() => console.log('clicked', number)}
                key={number}
                coordinate={{
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                }}
                title={number.toString()}
                description={name}
              />
            )
          })}
        </MapView>
      </View>
    )
  }
}

export { MapWithLocations }
