import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class BookmarkScreen extends React.Component {
  static navigationOptions = {
    title: 'Bookmark',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Bookmark</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});