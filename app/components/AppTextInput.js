import React from 'react'
import { TextInput, View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: colors.light2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  icon: {
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    color: colors.dark,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    borderRadius: 5,
  }
})

const AppTextInput = ({ icon, width = "100%", ...others }) => {
  return (
    <View style={[styles.container, { width }]}>
      <MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
      <TextInput
        style={styles.textInput}
        placeholderTextColor={colors.medium}
        {...others} />
    </View>
  )
}

export default AppTextInput
