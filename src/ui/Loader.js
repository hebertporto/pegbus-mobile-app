import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { styles } from './styles/loader.style'

const Loader = ({ loading, children }) => {
  return (
    <View>
      {loading ? (
        <View style={styles.root}>
          <ActivityIndicator size="large" color="#2196F3" />
        </View>
      ) : (
        { ...children }
      )}
    </View>
  )
}

export { Loader }
