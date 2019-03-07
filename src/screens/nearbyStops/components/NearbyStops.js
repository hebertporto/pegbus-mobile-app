import React, { Component } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { ModalScrollView } from '../../../ui/ModalScrollView'
import { Map } from './../../../ui/Map'

class NearbyStops extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ModalScrollView
            backgroundView={() => (
              <Map longitude={-97.1333263} latitude={49.8958907} />
            )}
          >
            <View style={{ height: 100 }}>
              <Text>Scroll me</Text>
            </View>
          </ModalScrollView>
        </View>
      </View>
    )
  }
}

export { NearbyStops }
//import { Constants, Location, Permissions } from 'expo';
