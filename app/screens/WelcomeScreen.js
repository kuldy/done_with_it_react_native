import React from 'react'
import { ImageBackground, Image, View, StyleSheet, Text } from 'react-native'

import AppButton from '../components/AppButton'

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        // blurRadius={3}
        style={styles.background}
        source={require("../assets/bedroom.jpg")}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo3.png")} style={styles.logo}></Image>
          <Text style={styles.text}>Welcom to the site, sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title='Login' onPress={() => navigation.navigate("Login")} />
          <AppButton title='Register' color="secondary" onPress={() => navigation.navigate("Register")} />
        </View>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    paddingHorizontal: 10,
    width: '100%',
  },
  logoContainer: {
    // display: 'flex',
    // width: '100%',
    // height: 120,
    top: 70,
    position: 'absolute',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
    color: 'tomato'
  }
})