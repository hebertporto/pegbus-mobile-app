import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'
import { BookmarkList } from './BookmarkList'
import { InputSearch } from '../../../components/InputSearch'

class Home extends Component {
  navigate = stopNumber => this.props.navigateTo(stopNumber)

  render() {
    const { favourites } = this.props
    return (
      <View style={styles.root}>
        <View style={styles.inputWrapper}>
          <InputSearch searchHandler={this.navigate} />
        </View>

        <View style={styles.inputWrapper}>
          <RkButton
            rkType="icon small"
            style={styles.buttonSearch}
            onPress={this.props.goToNearbyStops}
          >
            <Text>Nearby</Text>
          </RkButton>
        </View>

        <View style={styles.listWrapper}>
          <BookmarkList data={favourites} navigate={this.navigate} />
        </View>
      </View>
    )
  }
}

Home.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  goToNearbyStops: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired,
}

export { Home }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  inputWrapper: {
    flex: 0.15,
  },
  listWrapper: {
    flex: 0.85,
  },
})
