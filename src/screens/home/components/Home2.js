import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { Colors } from '../../../helpers'
import { Map } from '../../../components/Map'
import { Favourite } from './Favourite'

class Home2 extends Component {
  navigate = stopNumber => this.props.navigateTo(stopNumber)

  render() {
    const { favourites } = this.props
    return (
      <View style={styles.root}>
        <View style={styles.sectionMap}>
          <Map longitude={-97.1333263} latitude={49.8958907} />
        </View>
        <View style={styles.sectionTop} />
        <View style={styles.sectionFloatButton}>
          <Text>Buuu222222</Text>
        </View>
        <Favourite favourites={favourites} navigate={this.navigate} />
      </View>
    )
  }
}

Home2.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  goToNearbyStops: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
}

export { Home2 }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    zIndex: 0,
  },
  sectionMap: {
    flex: 1,
    backgroundColor: 'green',
  },
  sectionTop: {
    position: 'absolute',
    top: 0,
    backgroundColor: Colors.NAV_BAR.background,
    height: '20%',
    width: '100%',
  },
  sectionFloatButton: {
    position: 'absolute',
    top: '25%',
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 30,
  },
})
