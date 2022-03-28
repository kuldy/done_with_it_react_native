import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import Screen from "./app/components/Screen";
import navigationTheme from "./app/navigation/navigationTheme";
import { LogBox } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/authContext";
import authStorage from "./app/auth/storage";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    // const token = await authStorage.getToken();
    // if (!token) return;
    // const user = jwtDecode(token);
    const user = await authStorage.getUser();
    console.log("user is:", user);
    if (!user) return null;
    setUser(user);
  };
  // LogBox.ignoreLogs(["If you want to use Reanimated 2"]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={restoreToken}
        onFinish={() => setIsReady(true)}
        onError={() =>
          console.log("error occured while reloading the app, user is: ", user)
        }
      />
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Screen>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </Screen>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  screen: {},
});
// lt --port 8080
// npx localtunnel --port 8000
//expo install expo-image-picker
//expo install expo-permissions //depricated
//expo install expo-location

//install react-native navigation
//npm install @react-navigation/native@5
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
//npm install @react-navigation/stack@5.14.5
//npm install @react-navigation/bottom-tabs
//npm install apisauce => apisauce@2.1.1
//php spark serve --host 127.0.0.10 --port="8080"
//npm view react-native version
//expo install lottie-react-native // lottie-react-native@3.5.0
// npm i react-native-progress //react-native-progress@5.0.0
//expo install @react-native-community/netinfo //@react-native-community/netinfo@6.0.0
// expo install @react-native-async-storage/async-storage
//  moment@2.29.1
// npm i jwt-decode
// expo install expo-secure-store
// expo install expo-app-loading
// expo install expo-notifications
