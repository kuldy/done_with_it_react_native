import React, { useState, useEffect } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text } from "react-native";
import { create } from "apisauce";
import axios from "axios";

import listingApi from "../api/listingsApi";
import Card from "../components/Card";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

// const listings = [
//   {
//     id: 1,
//     title: 'Cookies For Sale',
//     price: 100,
//     image: require('../assets/cookies.jpg')
//   },
//   {
//     id: 2,
//     title: 'Cream Roll For Sale',
//     price: 30,
//     image: require('../assets/creemrole.jpg')
//   },
//   {
//     id: 3,
//     title: 'Blue Jacket For Sale',
//     price: 300,
//     image: require('../assets/student.jpg')
//   }
// ]

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      {error && (
        <>
          <Text>Cannot load listings Please try again</Text>
          <AppButton title="Load Listings" onPress={loadListings} />
        </>
      )}
      {/* <ActivityIndicator animating={loading} size="large" color="#000" /> */}
      <AppActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.imageUrl}
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default ListingsScreen;
