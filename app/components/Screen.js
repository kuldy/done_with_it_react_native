import React from "react";
import {
  View,
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
} from "react-native";
import Constants from "expo-constants";

//install expo constants using -- expo install expo-constants

import colors from "../config/colors";
function Screen({ children, style }) {
  const platform = Platform.OS === "android" ? true : false;
  // console.log(Constants)
  if (platform) {
    return (
      <View style={[styles.container]}>
        <View style={[styles.view, style]}>{children}</View>
      </View>
    );
  } else {
    return (
      <SafeAreaView style={styles.container1}>
        <View style={[styles.view, style]}>{children}</View>
      </SafeAreaView>
    );
  }
}

export default Screen;
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    paddingBottom: 0,
    // backgroundColor: colors.light1,
    backgroundColor: "#fff",
    // flexDirection: 'row'
  },
  container1: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.light1,
  },
  view: {
    flex: 1,
  },
});
