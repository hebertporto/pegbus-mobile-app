import React, { Component } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { ModalScrollView } from '../../../ui/ModalScrollView'

class NearbyStops extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <ModalScrollView
            style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
            backgroundColor="transparent"
            contentBackgroundColor="pink"
            renderFixedHeader={() => (
              <Image
                source={{
                  uri: `https://placekitten.com/414/350`,
                  width: window.width,
                  height: 350
                }}
              />
            )}
            stickyHeaderHeight={100}
            parallaxHeaderHeight={300}
            // renderFixedHeader={() => (
            //   <Text
            //     style={{
            //       textAlign: 'right',
            //       color: 'white',
            //       padding: 5,
            //       fontSize: 20
            //     }}
            //   >
            //     Hello
            //   </Text>
            // )}
          >
            <View style={{ height: 2000 }}>
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
