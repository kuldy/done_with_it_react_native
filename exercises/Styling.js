import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import colors from '../app/config/colors'
import OsDependent from '../app/config/OsDependent'

const Styling = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}></View>
      <View style={styles.shadow}></View>
      <Text style={styles.text}>i love react native! Style inheritence does not work in react native.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: OsDependent.applyOsMargin(),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    width: 100,
    height: 100,
    backgroundColor: 'dodgerblue',
    borderWidth: 10,
    borderColor: 'royalblue',
    borderRadius: 50,
  },
  shadow: {
    width: 100,
    height: 100,
    backgroundColor: 'dodgerblue',
    elevation: 10,// android
    // shadowColor: 'grey', all applicable in IOS
    // shadowOpacity: { width: 10, height: 10 },
    // shadowOpacity: .8,
    // shadowRadius: 10,
  },
  text: {
    // fontFamily: 'roboto', //platform dependent
    fontSize: 30,
    fontWeight: '600',
    fontStyle: 'italic',
    color: 'tomato',
    textTransform: 'capitalize',
    textAlign: 'center',
    lineHeight: 40,
  }
})

export default Styling
