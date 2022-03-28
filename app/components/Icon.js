import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Icon = (props) => {
  const { name, size = 50, iconColor = "#fff", backgroundColor = "#000" } = props
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Icon
