import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { RkButton, RkTextInput } from 'react-native-ui-kitten';

import { styles } from './styles/InputSearchRow.style.js';

class InputSearchRow extends Component {
  state = {
    value: ''
  }


  render() {
    return (
      <View style={styles.root}>
        <View style={styles.inputContainer}>
          <RkTextInput
            style={styles.input}
            placeholder='Search by street, landmark or stop number'
            value={this.state.value}
            placeholderTextColor='green'
            underlineWidth={0}
            onChangeText={value => this.setState({ value })}
          />
        </View>
        <View style={styles.buttonContainer}>
          <RkButton
            rkType='icon small'
            style={styles.button}
            onPress={this.props.searchHandler}>
            44
          </RkButton>
        </View>
      </View>
    );
  }
};

InputSearchRow.propTypes = {
  searchHandler: PropTypes.func.isRequired
};

export default InputSearchRow;