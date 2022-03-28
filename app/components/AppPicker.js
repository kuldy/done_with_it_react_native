import React, { useState } from "react";
import {
  TextInput,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Platform,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import PickerItem from "./PickerItem";

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: colors.light2,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  icon: {
    paddingLeft: 10,
  },
  icon1: {
    paddingRight: 10,
    color: colors.medium,
  },
  placeholder: {
    flex: 1,
    color: colors.medium,
    padding: 10,
  },
  text: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    flex: 1,
    padding: 10,
    color: colors.dark,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    fontSize: 18,
    borderRadius: 5,
  },
});

/* props description
  icon=> string it is valid icon name
  placeholder=> string default name of our picker if no itme array present
  items=> it is an array of objects, with keys as label, value
           const categories = [
            { label: "Furniture", value: 1 },
            { label: "Clothing", value: 2 },
            { label: "Cameras", value: 3 },
            { label: "Books", value: 4 },
          ]
  selectedItem=> object{label:"", value: } it is an element of categories array
  onSelectItem=> function it sets the selectedItem value 
*/

const AppPicker = ({
  icon,
  placeholder,
  items,
  numberOfColumns = 1,
  selectedItem,
  onSelectItem,
  width = "100%",
  PickerItemComponent = PickerItem,
  ...others
}) => {
  const [modelVisible, setModelVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModelVisible(true)}>
        <View style={[styles.container, { width }]}>
          <MaterialCommunityIcons name={icon} size={25} style={styles.icon} />
          {/* <TextInput style={styles.textInput} {...others} /> */}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={25}
            style={styles.icon1}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modelVisible} animationType="slide">
        <Button title="Close" onPress={() => setModelVisible(false)}></Button>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns} // this one is throwing error
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModelVisible(false), onSelectItem(item);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default AppPicker;
