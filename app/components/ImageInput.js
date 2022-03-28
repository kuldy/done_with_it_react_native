import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Button, View, Alert, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppButton from './AppButton'
import colors from '../config/colors'

const ImageInput = ({ uri, onChangeImage }) => {

  useEffect(() => {
    requestPermission()
  }, [])

  const requestPermission = async () => {
    // const request = await Permissions.askAsync(Permissions.CONTACTS)
    // if (!request.granted)
    //   alert('enable contacts permissions')
    const { granted } = await ImagePicker.getCameraPermissionsAsync()
    if (!granted)
      alert('you need to enable Camra permissions')
  }

  const handlePress = () => {
    if (!uri) selectImage()
    if (uri) {
      Alert.alert("Delete", "Are you sure", [{ text: 'Yes', onPress: () => onChangeImage(null) }, { text: 'No' }])
    }
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (!result.cancelled) {
        onChangeImage(result.uri)
      }
    } catch (error) {
      console.log('error oprning image library', error)
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {!uri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40} />}
          {uri && <Image source={{ uri: uri }} style={styles.image} />}
        </View>
      </TouchableWithoutFeedback>

    </>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 5,
  },
  image: {
    width: 100,
    height: 100,
  }

})


