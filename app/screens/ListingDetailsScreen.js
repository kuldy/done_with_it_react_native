import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/list/ListItem";
import Screen from "../components/Screen";
const ListingDetailsScreen = ({ route }) => {
  const item = route.params;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: item.imageUrl }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.details}>{item.title}</AppText>
        <AppText style={styles.price}>${item.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/logo4.png")}
          title="Kuldeep Sing"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  details: {
    fontWeight: "800",
    fontSize: 24,
  },
  price: {
    marginVertical: 10,
    fontWeight: "bold",
    color: colors.secondary,
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
