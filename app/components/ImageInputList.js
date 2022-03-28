import React, { useRef } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import ImageInput from './ImageInput'

const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }) => {

  const scrollView = useRef()

  return (
    <View>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map(uri => (
            <ImageInput uri={uri} key={uri} onChangeImage={() => onRemoveImage(uri)} />
          ))
          }
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>

  )

}

export default ImageInputList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
  }
})
