import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import colors from "../config/colors";
import { Constants } from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();
  // console.log(netInfo);
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.notice}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  notice: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 40,
    position: "absolute",
    zIndex: 1,
    top: 40,
    width: "100%",
    borderRadius: 5,
    opacity: 0.7,
  },
  text: {
    color: colors.white,
  },
});
