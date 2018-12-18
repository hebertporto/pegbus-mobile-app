import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    return (
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <RkTextInput
            style={styles.inputTextContainer}
            placeholder="Bus Stop number e.g: 40318, 10628"
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
            <Text style={styles.buttonText}>Search</Text>
          </RkButton>
        </View>

        <View style={styles.iconContainer}>
          <Text style={{ color: 'black' }}>Filter</Text>
        </View>
      </View>
    )
  }
}

InputSearchRow.propTypes = {
  searchHandler: PropTypes.func.isRequired
}

export default InputSearchRow
