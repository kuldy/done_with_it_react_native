import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

import AppText from './AppText'

const styles = StyleSheet.create({
  container: {
    padding: 15,
    // alignItems: 'center'
  }
})

const PickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText >{item.label}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem
