import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MapView } from 'expo';

class Map extends Component {
  state = {
    latitude: 49.89699,
    longitude: -97.1386,
    latitudeDelta: 0.00072026,
    longitudeDelta: 0.0014299,
  }
  onRegionChange = (info) => {
    const { latitude, latitudeDelta, longitude, longitudeDelta } = info;
    this.setState({ latitude, latitudeDelta, longitude, longitudeDelta });
  }

  render() {
    const { latitude, latitudeDelta, longitude, longitudeDelta } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 49.89699,
              longitude: -97.1386,
              latitudeDelta: 0.00072026,
              longitudeDelta: 0.0014299,
            }}
            onRegionChange={this.onRegionChange}
          />
        </View>
        <View style={{ flex: 0.5 }}>
          <Text>latitude: {latitude}</Text>
          <Text>latitudeDelta: {latitudeDelta}</Text>
          <Text>longitude: {longitude}</Text>
          <Text>longitudeDelta: {longitudeDelta}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export { Map };
