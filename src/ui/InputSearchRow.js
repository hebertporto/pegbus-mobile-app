import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import moment from 'moment-timezone'

import { View, Text, Keyboard, TextInput } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'

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
        <View style={styles.rowInput}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputText}
              placeholder="e.g: 40318, 10628"
              value={value}
              onChangeText={this.handleChangeText}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.buttonSearchWrapper}>
            <RkButton
              rkType="icon small"
              style={styles.buttonSearch}
              onPress={this.handleSearch}
            >
              <Ionicons name="md-search" size={22} color="white" />
            </RkButton>
          </View>

          <View style={styles.filterButtonWrapper}>
            <RkButton
              rkType="icon small"
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
          <View style={styles.rowInfo}>
            <MaterialCommunityIcons
              name="clock-outline"
              size={14}
              color="#6A6F78"
            />
            <Text style={styles.labelTime}>
              {moment(new Date())
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
