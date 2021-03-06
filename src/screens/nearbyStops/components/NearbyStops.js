import React, { Component } from 'react'
import {
  FlatList,
  ActivityIndicator,
  View,
  Text,
  ScrollView,
} from 'react-native'
import { ModalScrollView } from '../../../components/ModalScrollView'
import { Map } from './../../../components/Map'
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
            <View
              style={{
                flexGrow: 1,
                justifyContent: 'space-between',
              }}
            >
              {isLoading ? this.renderLoading() : this.renderStops()}
            </View>
          </ModalScrollView>
        </View>
      </View>
    )
  }
}

export { NearbyStops }
