import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-navigation';

const HeaderWithSearchBar = ({ isSearchActive, navigation, propsHeader }) =>  {
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

export { HeaderWithSearchBar };
