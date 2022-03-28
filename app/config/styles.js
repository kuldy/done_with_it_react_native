import React from 'react'
import { Platform, StyleSheet } from 'react-native'

import colors from './colors'


export default {
  colors,
  text: {

  },
  inputText: {
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
  }
}