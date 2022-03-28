import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Alert } from 'react-native'

const CustomeInput = ({ number, onChangeEvent }) => {
  const handlePress = () => {
    console.log('hadle press called')
    if (!number)
      onChangeEvent(num())
    if (number)
      Alert.alert('delete', 'are u sure', [{ text: "YES", onPress: () => onChangeEvent(null) }, { text: "No" }])
  }
  const num = () => {
    return Math.floor(Math.random() * 6) + 1
  }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {number && <Text>{number}</Text>}
        {!number && <Text>Click Me</Text>}
      </View>
    </TouchableWithoutFeedback>

  )
}

export default CustomeInput

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
  }
})
