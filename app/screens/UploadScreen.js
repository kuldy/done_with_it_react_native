import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Modal } from "react-native";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress"; // this on is not working

import colors from "../config/colors";

const UploadScreen = (props) => {
  const { onDone, progress = 0, visible = false } = props;

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
};
export default UploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  animation: {
    width: 80,
  },
});
