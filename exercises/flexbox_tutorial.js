import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const flexbox_tutorial = () => {
  return (
    <View style={{
      backgroundColor: 'white',
      flex: 1,
      flexDirection: "row", // row will be main axis
      justifyContent: 'center', // main axis
      alignItems: 'center', // secondary axis
      // if there is multiple lines, align item property will determin the alignment of items across the secondary axis of each line.
      // flexWrap: 'wrap',
      // alignContent: 'center', // it puts all the items centered accross the secondry axis, aligncontent only works if we have wrapping.
    }}>
      <View style={{
        backgroundColor: 'dodgerblue',
        // flexBasis: 150, // it maps to height or width(maps along main axis)
        // flexGrow: 1, // width/height of element grows to fill the avialable space equivalent to flex:1
        // flexShrink: 1, // width/height shrinks to fill the avilable space equivalent to flex:-1
        height: 100,
        width: 100,
        // alignSelf: 'flex-start',
      }} />
      <View style={{
        backgroundColor: 'gold',
        height: 100,
        width: 100,
        //in react-native by default all elemnts positioned to relative
        top: 20,
        left: 20,
        position: 'absolute',
        //position absolute will put the element to its parent container. and layout around this elemnt will get effected 
      }} />
      <View style={{
        backgroundColor: 'tomato',
        height: 100,
        width: 100
      }} />
      {/* <View style={{
        backgroundColor: 'grey',
        height: 100,
        width: 100
      }} />
      <View style={{
        backgroundColor: 'brown',
        height: 100,
        width: 100
      }} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .5,
    backgroundColor: 'red',
  },
})

export default flexbox_tutorial
