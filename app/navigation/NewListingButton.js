import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={30} color={colors.white} />
      </View>
    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    bottom: 1,
    borderColor: colors.medium,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
