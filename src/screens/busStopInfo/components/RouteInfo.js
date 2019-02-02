import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment-timezone'

import { styles } from './styles/RouteInfo.style'
import { Map } from '../../../ui/Map'

getFilterStyle = ({ isButtonDisable, isFilterOpen }) => {
  if (isButtonDisable) {
    return { ...styles.buttonFilter, backgroundColor: 'grey' }
  } else if (isFilterOpen) {
    return { ...styles.buttonFilter, backgroundColor: 'green' }
  } else {
    return styles.buttonFilter
  }
}

const RouteInfo = ({
  stopInfo,
  dateRequested,
  isButtonDisable,
  isFilterOpen,
  filterToogle,
  reload
}) => {
  const { name, number, direction, geographic } = stopInfo
  return (
    <View style={styles.root}>
      <View style={styles.mapContainer}>
        {geographic ? (
          <Map
            longitude={geographic.longitude}
            latitude={geographic.latitude}
          />
        ) : null}
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.stopWrapper}>
          <Text>{number}</Text>
          <Text>{name}</Text>
          <Text>{direction}</Text>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={styles.bleft}>
            <Text style={styles.date}>Updated at:</Text>
            <Text style={styles.date}>
              {moment(dateRequested)
                .tz('America/Winnipeg')
                .format('h:mm a')}
            </Text>
          </View>
          <View style={styles.bright}>
            <RkButton
              rkType="icon small"
              disabled={isButtonDisable}
              style={{ width: 40 }}
              onPress={reload}
            >
              <Ionicons name="md-refresh" size={20} color="white" />
            </RkButton>
            <RkButton
              rkType="icon small"
              disabled={isButtonDisable}
              // style={getFilterStyle({ isButtonDisable, isFilterOpen })}
              style={{ width: 40, marginLeft: 10 }}
              onPress={filterToogle}
            >
              <Ionicons name="md-funnel" size={20} color="white" />
            </RkButton>
          </View>
        </View>
      </View>
    </View>
  )
}

RouteInfo.propTypes = {
  dateRequested: PropTypes.string.isRequired,
  stopInfo: PropTypes.shape({}).isRequired,
  isButtonDisable: PropTypes.bool.isRequired,
  isFilterOpen: PropTypes.bool.isRequired,
  filterToogle: PropTypes.func.isRequired,
  reload: PropTypes.func.isRequired
}

export { RouteInfo }
