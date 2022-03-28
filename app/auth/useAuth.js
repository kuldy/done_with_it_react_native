import react, { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./authContext";
import authStorage from "./storage";

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = (authToken) => {
    const user = jwtDecode(authToken);
    // console.log("decoded use is", user);
    setUser(user.data);
    authStorage.storeToken(authToken);
  };
  const logout = () => {
    setUser(null);
    authStorage.removeToken();
  };
  return { user, login, logout };
};

export default useAuth;
