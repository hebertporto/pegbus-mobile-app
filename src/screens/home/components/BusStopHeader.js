import React from 'react';
import { View, Text } from 'react-native';

import { styles as s } from './styles/BusStopHeader.style';

const BusStopHeader = ({ stopInfo, routes }) =>  {
  const { name, number } = stopInfo;

  return name ? (
    <View style={s.root}>
      <View style={s.map}>
        <Text>
          Mapa
        </Text>
      </View>
      <View style={s.info}>
        <View>
          <Text>
            #{number} | {name}
          </Text>
        </View>
        <View style={s.busNumber}>
          {routes.map((route) => {
            <Text>
              {route} |
            </Text>
          })}
        </View>
      </View>
    </View>
  ) : null;
}

export { BusStopHeader };