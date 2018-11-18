import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export class HeaderWithSearchBar extends Component {
  render() {
    const { isActive, onCancel, render } = this.props
    return (
      <View>
        {render()}
        {isActive && (
          <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white', justifyContent: 'center', elevation: 8 }}>
            <TouchableOpacity onPress={onCancel}>
              <Text>{`${isActive}`}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}
