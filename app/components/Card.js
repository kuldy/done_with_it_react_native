import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import colors from "../config/colors";
import AppText from "./AppText";
const Card = ({ title, subTitle, imageUrl, imageStyle, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          resizeMode={imageStyle}
          style={styles.image}
          source={{ uri: imageUrl }}
        />
        <View style={styles.contentContainer}>
          <AppText style={styles.title} numberOfLines={2}>
            {title}
          </AppText>
          <AppText style={styles.subTitle} numberOfLines={1}>
            {subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    margin: 5,
    overflow: "hidden",
  },
  contentContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    paddingBottom: 7,
  },
});
