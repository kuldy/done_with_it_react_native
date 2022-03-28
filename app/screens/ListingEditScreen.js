import React, { useState } from "react";
import * as Yup from "yup";

import useLocation from "../hooks/useLocation";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  FormImagePicker,
  SubmitButton,
} from "../components/form";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import listingsApi from "../api/listingsApi";
import UploadScreen from "./UploadScreen";
import { Alert } from "react-native";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Plese select at least one image"),
});

const initialValues = {
  title: "",
  price: "",
  description: "",
  category: null,
  images: [],
};
const category = [
  { label: "App", value: 1, backgroundColor: "#001f3f", icon: "apps" },
  { label: "Account", value: 2, backgroundColor: "#7FDBFF", icon: "account" },
  { label: "Email", value: 3, backgroundColor: "#0074D9", icon: "email" },
  { label: "Cameras", value: 4, backgroundColor: "#39CCCC", icon: "camera" },
  { label: "Train", value: 5, backgroundColor: "#B10DC9", icon: "train" },
  { label: "Moterbike", value: 6, backgroundColor: "#F012BE", icon: "moped" },
  {
    label: "Movies & Songs",
    value: 7,
    backgroundColor: "#85144b",
    icon: "movie",
  },
  { label: "Mobiles", value: 8, backgroundColor: "#FF4136", icon: "car" },
  { label: "Home", value: 9, backgroundColor: "#2ECC40", icon: "home" },
  { label: "Cricket", value: 10, backgroundColor: "#FFDC00", icon: "cricket" },
  {
    label: "Mushroom",
    value: 11,
    backgroundColor: "#3D9970",
    icon: "mushroom",
  },
];
//app, lock, camera, toy-brik, movie, moterbike,cricket
const ListingEditScreen = () => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const location = useLocation();

  const sleep = (milliseconds) => {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  };

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (p) => {
        setProgress(p);
        sleep(1000);
      }
    );
    if (!result.ok) {
      setUploadVisible(false);
      return alert("could not saved listings!");
    }
    resetForm();
  };
  return (
    <>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />
        <AppFormField name="title" placeholder="Title" maxLength={255} />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={120}
          maxLength={8}
        />
        <AppFormPicker
          items={category}
          name="category"
          // width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder={"Description"}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </>
  );
};

export default ListingEditScreen;
