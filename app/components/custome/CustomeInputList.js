import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CustomeInput from './CustomeInput'
const CustomeInputList = ({ numbers, onAdd, onRemove }) => {
  return (
    <View style={styles.container}>

      {
        numbers.map(num => <CustomeInput key={num} number={num} onChangeEvent={() => onRemove(num)} />)
      }
      <CustomeInput onChangeEvent={(b) => onAdd(b)} />
    </View>
  )
}

export default CustomeInputList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }
})
