import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, Button, Alert, Platform, Dimensions } from 'react-native';

const Starting = () => {
  const handlePress = () => { console.log('text pressed') }

  console.log('Starting component executed')
  // console.log(StatusBar.currentHeight)
  // let x
  // x.toString()
  // console.log(Dimensions.get('screen'))
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} onPress={handlePress}>hello World Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nulla dignissimos quidem ratione inventore possimus officiis, qui sit atque illo quisquam iusto soluta expedita mollitia nam? </Text>
      {/* <Image source={require("./app/assets/favicon.png")} /> */}
      <Image source={require("../app/assets/favicon.png")} />
      <TouchableHighlight onPress={() => console.log('image tapped')}>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: 'https://picsum.photos/200/300',
          }} />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View style={{ width: 200, height: 50, backgroundColor: 'dodgerblue', marginTop: 20, marginBottom: 20 }}>
        </View>
      </TouchableNativeFeedback>
      <Button title="click me" color="#FF5733" onPress={() => alert('Button Tapped')} />
      <View style={styles.space}>
        <Button title="Alert" color="#FF5733" onPress={() => Alert.alert('title of alert', 'msg of alert', [{ text: 'Yes', onPress: () => console.log('YES') }, { text: 'NO', onPress: () => console.log('NO') }])} />
      </View>
      <Text style={[styles.firstStyle], styles.space}>Hello</Text>
      <View style={{ backgroundColor: 'dodgerblue', width: '50%', height: 30, marginBottom: 10 }}></View>
    </View>
  )
}

export default Starting


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: Platform.OS === "android" ? 30 : 20,
  },
  space: {
    marginTop: 20,
    marginBottom: 20,
    color: 'blue'
  },
  firstStyle: {
    color: 'red',
  }
});
