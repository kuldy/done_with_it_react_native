import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, Switch } from 'react-native'

const styles = StyleSheet.create({
  container: {

  },
  input: {
    margin: 10,
    padding: 10,
    backgroundColor: '#ddd',
  }
})

export const TutorialInput = () => {
  const [text, setText] = useState('')
  return (
    <>
      <Text>{text}</Text>
      <TextInput
        style={styles.input}
        placeholder="Write something"
        onChangeText={text => setText(text)}
        // maxLength={5}
        // keyboardType="numeric"
        // clearButtonMode="always" // works in ios
        secureTextEntry={true}
      />
    </>
  )
}

export const TutorialSwitch = () => {
  const [value, setValue] = useState(false)
  return (
    <Switch value={value} onValueChange={value => setValue(value)} />
  )
}

