import React from 'react'
import { Text, StyleSheet, Platform } from 'react-native'

import colors from '../config/colors'

const AppText = ({ children, style, ...others }) => {
  return (
    <Text
      style={[styles.text, style]}
      {...others}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    // fontFamily: Platform.OS === 'android' ? 'Robot' : 'Avenir',
    fontSize: 18,
    color: colors.black,
  }
})

export default AppText
