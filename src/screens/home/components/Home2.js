import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { Colors } from '../../../constants'
import { Map } from '../../../components/Map'
import { Favourite } from './Favourite'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { RkTextInput } from 'react-native-ui-kitten'

class Home2 extends Component {
  navigate = stopNumber => this.props.navigateTo(stopNumber)

  render() {
    const { favourites } = this.props
    return (
      <View style={styles.root}>
        <View style={styles.sectionMap}>
          <Map longitude={-97.1333263} latitude={49.8958907} />
        </View>
        <View style={styles.sectionTop}>
          <ImageBackground
            source={require('../../../assets/images/peg-bg.png')}
            style={{
              width: '100%',
              height: '100%',
              opacity: 0.3,
              position: 'relative',
            }}
          />
          <View
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              top: 30,
              width: '75%',
              alignSelf: 'center',
            }}
          >
            <RkTextInput
              label={<Ionicons name={'ios-search'} />}
              inputStyle={{
                color: 'black',
                margin: 0,
                padding: 0,
              }}
            />
          </View>
        </View>
        <View style={styles.sectionFloatButton}>
          <TouchableOpacity onPress={() => console.log('Pressed Button')}>
            <MaterialIcons name="my-location" size={32} color="black" />
          </TouchableOpacity>
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
    height: '35%',
    width: '100%',
  },
  sectionFloatButton: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 30,
  },
})
