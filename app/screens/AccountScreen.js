import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ListItem from "../components/list/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/list/ListItemSeparator";
import AuthContext from "../auth/authContext";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    // subTitle: "sub title of account",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Listings",
  },
  {
    title: "My Messages",
    // subTitle: "sub title of account",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/logo7.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={() => <ListItemSeparator />}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={() => logout()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    // paddingVertical: 10,
  },
});

export default AccountScreen;
