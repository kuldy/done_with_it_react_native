import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={28} color="white" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" size={28} color="white" />
      </View>
      <View style={styles.upContainer}></View>
      <Image resizeMode="contain" style={styles.image} source={require('../assets/lighthouse.jpg')} />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 30,
  },
  closeIcon: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: 'absolute',
    top: 50,
    right: 30,
  }
})

export default ViewImageScreen
