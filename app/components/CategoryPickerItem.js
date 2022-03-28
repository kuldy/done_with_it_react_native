import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import AppText from './AppText'

import Icon from './Icon'
import colors from '../config/colors'

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <View style={styles.container}> */}
      <Icon backgroundColor={item.backgroundColor} name={item.icon} size={60} />
      <AppText style={styles.label}>{item.label}</AppText>
      {/* </View> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
    color: colors.medium,
  }
})

export default CategoryPickerItem
