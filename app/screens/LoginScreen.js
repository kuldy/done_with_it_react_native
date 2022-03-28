import React, { useState, useContext } from "react";
import { View, Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppErrorMessage,
  AppFormField,
  SubmitButton,
  AppForm,
} from "../components/form";
import Auth from "../api/auth";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/authContext";
import AuthStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

// installing formik for better forms npm i formik@2.1.4
// installing yup for data validations npm yup

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);
  const [error, setError] = useState(null);
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require("../assets/logo5.png")} />
      </View>
      <AppErrorMessage error={error} visible={loginFailed} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={async ({ email, password }) => {
          const response = await Auth.login(email, password);
          // console.log("response after login", response);
          if (!response.ok) {
            setError("server error check code");
            return setLoginFailed(true);
          }
          if (response.data.error === true) {
            setError(response.data.messages);
            return setLoginFailed(true);
          }

          setLoginFailed(false);
          setError(null);
          login(response.data.token);
        }}
        onReset={() => console.log("reset called")}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="login" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  imageContainer: {
    alignItems: "center",
  },
  logo: {
    paddingVertical: 20,
    width: 80,
    height: 80,
  },
});

export default LoginScreen;
