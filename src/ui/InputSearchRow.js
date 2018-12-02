import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { View, Text, Keyboard } from 'react-native'
import { RkButton, RkTextInput } from 'react-native-ui-kitten'

import { styles } from './styles/InputSearchRow.style.js'

class InputSearchRow extends Component {
  state = {
    value: '' // 10628, 40318
  }

  handleChangeText = value => this.setState({ value })

  handleSearch = () => {
    Keyboard.dismiss()
    this.props.searchHandler(this.state.value)
  }

  render() {
    const { value } = this.state
    const {
      root,
      inputContainer,
      inputTextContainer,
      button,
      buttonContainer,
      buttonText
    } = styles
    return (
      <View style={root}>
        <View style={inputContainer}>
          <RkTextInput
            style={inputTextContainer}
            placeholder="Bus Stop number e.g: 40318, 10628"
            value={value}
            placeholderTextColor="black"
            onChangeText={this.handleChangeText}
          />
        </View>
        <View style={buttonContainer}>
          <RkButton
            rkType="icon small"
            style={button}
            onPress={this.handleSearch}
          >
            <Text style={buttonText}>Search</Text>
          </RkButton>
        </View>
      </View>
    )
  }
}

InputSearchRow.propTypes = {
  searchHandler: PropTypes.func.isRequired
}

export default InputSearchRow
