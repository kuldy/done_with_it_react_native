import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import * as Yup from "yup";
import authApi from "../api/auth";
import useApi from "../hooks/useApi";
import useAuth from "../auth/useAuth";

import {
  AppErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/form";
import AppActivityIndicator from "../components/AppActivityIndicator";

const initialValues = {
  name: "",
  email: "",
  phone_no: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  phone_no: Yup.number().required().label("Phone"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(authApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();

  const [error, setError] = useState(null);
  const [registrationFailed, setRegistrationFailed] = useState(false);

  const handleSubmit = async (userInfo) => {
    // console.log("user before registration", userInfo);
    const response = await registerApi.request(userInfo);
    if (!response.ok) {
      if (response.status >= 500 && response.status < 600) {
        setError("An Unexpected Error Occured");
        console.log("unexpected error: ", response);
      }
      if (response.status >= 400 && response.status < 500) {
        setError(response.data.messages.error);

        console.log("expected error: ", response);
      }
      return setRegistrationFailed(true);
    }
    console.log("response data after registration is: ", response.data);
    setRegistrationFailed(false);

    const { data } = await loginApi.request(userInfo.email, userInfo.password);
    console.log("token after registration: ", data.token);
    const authToken = data.token;
    auth.login(authToken);
  };

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <View style={styles.container}>
        {/* <ActivityIndicator
        animating={registerApi.loading || loginApi.loading}
        size="large"
        color="#000"
      /> */}

        <AppErrorMessage error={error} visible={registrationFailed} />
        <AppForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <AppFormField icon="account" name="name" placeholder="Name" />
          <AppFormField
            icon="email"
            name="email"
            placeholder="Email"
            keyboardType="email-address"
          />
          <AppFormField
            icon="phone"
            name="phone_no"
            placeholder="Phone Number"
            keyboardType="numeric"
          />
          <AppFormField
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </View>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
});
