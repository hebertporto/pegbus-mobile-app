import React, { Component } from 'react'
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  ScrollView
} from 'react-native'
import { ModalScrollView } from '../../../ui/ModalScrollView'
import { Map } from './../../../ui/Map'
import { StopRow } from './StopRow'

class NearbyStops extends Component {
  renderLoading = () => {
    return (
      <View
        style={{ flex: 0.75, justifyContent: 'center', alignItems: 'center' }}
      >
        <ActivityIndicator size="large" color="#2196F3" />
      </View>
    )
  }

  renderStops = () => {
    const { stops } = this.props
    return (
      <FlatList
        data={stops}
        renderItem={({ item }) => (
          <StopRow
            number={item.number}
            name={item.name}
            distance={item.distance}
          />
        )}
        keyExtractor={item => `${item.number}`}
      />
    )
  }

  render() {
    const { isLoading } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ModalScrollView
            backgroundView={() => (
              <Map longitude={-97.1333263} latitude={49.8958907} />
            )}
          >
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
              scrollEnabled={true}
            >
              <View
                style={{
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  padding: 10
                }}
              >
                {isLoading ? this.renderLoading() : this.renderStops()}
              </View>
            </ScrollView>
          </ModalScrollView>
        </View>
      </View>
    )
  }
}

export { NearbyStops }
//import { Constants, Location, Permissions } from 'expo';
