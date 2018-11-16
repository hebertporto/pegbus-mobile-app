import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MapView } from 'expo';

export default class BookmarkScreen extends React.Component {
  static navigationOptions = {
    title: 'Bookmark',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.5 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 49.89699,
              longitude: -97.1386,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
        <View style={{ flex: 0.5, backgroundColor: 'blue' }}>
          <Text>Coming Soon</Text>
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
