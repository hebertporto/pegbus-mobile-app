import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class BookmarkScreen extends React.Component {
  static navigationOptions = {
    title: 'Bookmark',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Coming Soon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
