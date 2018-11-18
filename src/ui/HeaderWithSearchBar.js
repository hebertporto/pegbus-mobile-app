import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, withNavigation } from 'react-navigation';

class HeaderWithSearchBarContainer extends Component {
   render() {
    const { navigation, propsHeader } = this.props;
    const isSearchActive = navigation.getParam('isSearchActive', false);

    const onCancel = () => navigation.setParams({ isSearchActive: false })
    return (
      <View>
        {<Header  {...propsHeader} />}
        {isSearchActive && (
          <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'white', justifyContent: 'center', elevation: 8 }}>
            <TouchableOpacity onPress={onCancel}>
              <Text>{`${isSearchActive}`}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
   }
}
export const HeaderWithSearchBar = withNavigation(HeaderWithSearchBarContainer);
