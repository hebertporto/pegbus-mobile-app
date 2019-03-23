import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment-timezone'
import { Surface } from 'react-native-paper'

import { styles } from './styles/RouteInfo.style'
import { Map } from '../../../components/Map/'

getFilterStyle = ({ isFilterOpen }) => {
  if (isFilterOpen) {
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
  reload,
}) => {
  const { name, number, direction, geographic } = stopInfo
  return (
    <Surface style={styles.root}>
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
          <Text style={styles.textNumber}>{number}</Text>
          <Text style={styles.stopName}>{name}</Text>
          <Text>{direction}</Text>
        </View>
        <View style={styles.bottomWrapper}>
          <View style={styles.bleft}>
            <Text style={styles.dateTitle}>Updated at:</Text>
            <Text style={styles.date}>
              {moment(dateRequested)
                .tz('America/Winnipeg')
                .format('h:mm a')}
            </Text>
          </View>
          <View style={styles.bright}>
            {!isButtonDisable ? (
              <RkButton
                rkType="icon small"
                disabled={isButtonDisable}
                style={getFilterStyle({ isFilterOpen })}
                onPress={filterToogle}
              >
                <Ionicons name="md-funnel" size={20} color="white" />
              </RkButton>
            ) : null}
            <RkButton
              rkType="icon small"
              style={{ width: 40, marginLeft: 15 }}
              onPress={reload}
            >
              <Ionicons name="md-refresh" size={20} color="white" />
            </RkButton>
          </View>
        </View>
      </View>
    </Surface>
  )
}

RouteInfo.propTypes = {
  dateRequested: PropTypes.string.isRequired,
  stopInfo: PropTypes.shape({}).isRequired,
  isButtonDisable: PropTypes.bool.isRequired,
  isFilterOpen: PropTypes.bool.isRequired,
  filterToogle: PropTypes.func.isRequired,
  reload: PropTypes.func.isRequired,
}

export { RouteInfo }
