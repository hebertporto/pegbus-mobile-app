import React from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';

import styles from './styles/banner.style';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ flex: 0.7 }}>
          <Text> blah blah </Text>
        </View>
        <View style={{ flex: 0.3 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 49.89699,
              longitude: -97.1386,
              latitudeDelta: 633682,
              longitudeDelta: 5528839
            }}
          />
        </View>
      </View>
    );
  }
}

// latitude: '49.89699',
// longitude: '-97.1386'