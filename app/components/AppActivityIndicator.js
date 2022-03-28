import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const AppActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader4.json")}
      />
    </View>
  );
};
export default AppActivityIndicator;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    opacity: 0.7,
    zIndex: 1,
  },
  contentContainer: {
    padding: 10,
  },
});
