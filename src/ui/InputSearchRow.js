import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Ionicons } from '@expo/vector-icons'

import { View, Text, Keyboard, TextInput } from 'react-native'
import { RkButton } from 'react-native-ui-kitten'

import { styles } from './styles/InputSearchRow.style.js'

class InputSearchRow extends Component {
  state = {
    value: ''
  }

  handleChangeText = value => this.setState({ value })

  handleSearch = () => {
    Keyboard.dismiss()
    this.props.searchHandler(this.state.value)
  }

  render() {
    const { value } = this.state
    return (
      <View style={styles.root}>
        <View style={styles.rowInput}>
          <View style={styles.inputWrapper}>
            <Text style={styles.labelInputText}>Bus Stop Number</Text>
            <TextInput
              style={styles.inputText}
              placeholder="e.g 10628"
              value={value}
              onChangeText={this.handleChangeText}
              underlineColorAndroid="transparent"
              keyboardType="numeric"
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
        </View>
      </View>
    )
  }
}

InputSearchRow.propTypes = {
  searchHandler: PropTypes.func.isRequired
}

export { InputSearchRow }
