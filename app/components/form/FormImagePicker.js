import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'

import ImageInputList from '../ImageInputList'
import AppErrorMessage from './AppErrorMessage'

const FormImagePicker = ({ name }) => {
  const { setFieldValue, values, setFieldTouched, errors, touched } = useFormikContext()

  const imageUris = values[name]

  const handleAddImage = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  }
  const handleRemoveImage = (uri) => {
    const arr = imageUris.filter(el => el !== uri)
    setFieldValue(name, arr)
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default FormImagePicker

const styles = StyleSheet.create({})
