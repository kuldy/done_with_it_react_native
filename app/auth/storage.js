import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error geting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  const user = jwtDecode(token);
  // console.log("decoded user is", user.data);
  return token ? user.data : null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing auth token", error);
  }
};

export default { getToken, getUser, storeToken, removeToken };