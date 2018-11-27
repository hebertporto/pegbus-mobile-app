import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, Keyboard } from 'react-native'
import { RkButton, RkTextInput } from 'react-native-ui-kitten'

import { styles } from './styles/InputSearchRow.style.js'

class InputSearchRow extends Component {
  state = {
    // value: '40318'10628
    value: '' // 10628
  }

  handleChangeText = value => this.setState({ value })

  handleSearch = () => {
    Keyboard.dismiss()
    this.props.searchHandler(this.state.value)
  }

  render() {
    const { value } = this.state
    const { root, inputContainer, input, button, buttonContainer } = styles
    return (
      <View style={root}>
        <View style={inputContainer}>
          <RkTextInput
            style={input}
            placeholder="Search by bus stop number"
            value={value}
            placeholderTextColor="black"
            underlineWidth={0}
            onChangeText={this.handleChangeText}
          />
          <Text>40318, 10628</Text>
        </View>
        <View style={buttonContainer}>
          <RkButton
            rkType="icon small"
            style={button}
            onPress={this.handleSearch}
          >
            Search
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
