import React from 'react'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { View, Text, StyleSheet } from 'react-native';

const Kull = () => {

  console.log(useDimensions())
  const { landscape } = useDeviceOrientation()

  if (!landscape) {
    return (
      <View style={styles.container1}>
        <Text style={styles.textColor}>Orientation Potrait</Text>
      </View>
    )
  } else {
    return (
      <View style={styles.container2}>
        <Text style={styles.textColor}>Orientation landscape</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    width: '100%',
    height: '30%',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    width: '100%',
    height: '100%',
  },
  textColor: {
    color: 'white',
  }
})

export default Kull
