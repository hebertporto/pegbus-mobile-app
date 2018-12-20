import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'
import moment from 'moment-timezone'

import { View, Text, Keyboard } from 'react-native'
import { RkButton, RkTextInput } from 'react-native-ui-kitten'

import { styles } from './styles/InputSearchRow.style.js'

class InputSearchRow extends Component {
  state = {
    value: '10628'
  }

  handleChangeText = value => this.setState({ value })

  handleSearch = () => {
    Keyboard.dismiss()
    this.props.searchHandler(this.state.value)
  }

  render() {
    const { value } = this.state
    const { filterToogle, isFilterOpen, dateRequested } = this.props
    return (
      <View style={styles.root}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.inputContainer}>
            <RkTextInput
              style={styles.inputTextContainer}
              placeholder="e.g: 40318, 10628"
              value={value}
              placeholderTextColor="black"
              onChangeText={this.handleChangeText}
            />
          </View>

          <View style={styles.buttonContainer}>
            <RkButton
              rkType="icon small"
              style={styles.button}
              onPress={this.handleSearch}
            >
              <Ionicons name="md-search" size={22} color="white" />
            </RkButton>
          </View>

          <View style={styles.iconContainer}>
            <RkButton
              style={
                isFilterOpen
                  ? { ...styles.buttonFilter, backgroundColor: 'green' }
                  : styles.buttonFilter
              }
              onPress={filterToogle}
            >
              <Ionicons name="md-funnel" size={22} color="white" />
            </RkButton>
          </View>
        </View>
        {dateRequested ? (
          <View>
            <Text>Consulted {' '}
              {moment(dateRequested)
                .tz('America/Winnipeg')
                .format('MMMM Do YYYY, h:mm a')}
            </Text>
          </View>
        ) : null}
      </View>
    )
  }
}

InputSearchRow.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  filterToogle: PropTypes.func.isRequired,
  isFilterOpen: PropTypes.bool.isRequired,
  dateRequested: PropTypes.string.isRequired
}

export { InputSearchRow }
