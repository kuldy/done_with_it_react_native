import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import UploadScreen from './UploadScreen'

//this was not working

const CustomeUploadScreen = () => {

  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleModal = () => {
    setVisible(true)
    setProgress(0)
  }
  return (
    <>
      <UploadScreen progress={progress} setProgress={setProgress} visible={visible} setVisible={setVisible} />
      <View>
        <View style={styles.btnModal}>
          <Button
            onPress={handleModal}
            title="Show Model"
          />
        </View>
      </View>
    </>
  )
}

export default CustomeUploadScreen

const styles = StyleSheet.create({
  btnProgress: {
    margin: 20,
  },
  btnModal: {
    margin: 20,
  }
})
