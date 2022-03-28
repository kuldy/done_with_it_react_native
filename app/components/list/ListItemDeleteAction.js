import React from 'react'
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../../config/colors'

const ListItemDeleteAction = ({ onPress }) => {
  return (

    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can-outline" size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  }
})

export default ListItemDeleteAction
