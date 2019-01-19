import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Text } from 'react-native'

import { InputSearchRow } from '../../../ui/InputSearchRow'
import { Loader } from '../../../ui/Loader'
import { BookmarkList } from './BookmarkList'

const defaultState = {
  error: false,
  loading: false
}

class Home extends Component {
  state = defaultState

  navigate = stopNumber => this.props.navigateTo(stopNumber)

  render() {
    const { loading, error } = this.state
    const { favourites } = this.props
    return (
      <View style={styles.root}>
        <View style={{ flex: 0.15 }}>
          <InputSearchRow searchHandler={this.navigate} />
        </View>

        <View style={styles.mainWrapper}>
          <Loader loading={loading}>
            <BookmarkList data={favourites} />
          </Loader>
        </View>
      </View>
    )
  }
}

Home.propTypes = {
  navigateTo: PropTypes.func.isRequired,
  favourites: PropTypes.array.isRequired
}

export { Home }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column'
  },
  mainWrapper: {
    flex: 0.78
  }
})
