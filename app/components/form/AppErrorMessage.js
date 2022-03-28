import React from "react";
import { StyleSheet } from "react-native";

import AppText from "../AppText";

const styles = StyleSheet.create({
  error: {
    color: "red",
    fontSize: 14,
    marginVertical: 10,
  },
});

const AppErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

export default AppErrorMessage;
