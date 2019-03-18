import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { InputSearch } from '../../../components/InputSearch'
import { BookmarkList } from './BookmarkList'

class Home extends Component {
  navigate = stopNumber => this.props.navigateTo(stopNumber)

  render() {
    const { favourites } = this.props
    return (
      <View style={styles.root}>
        <View style={styles.inputWrapper}>
          <InputSearch searchHandler={this.navigate} />
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
  favourites: PropTypes.array.isRequired
}

export { Home }

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column'
  },
  inputWrapper: {
    flex: 0.15
  },
  listWrapper: {
    flex: 0.85
  }
})
