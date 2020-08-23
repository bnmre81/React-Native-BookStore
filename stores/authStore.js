import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-community/async-storage";

class AuthStore {
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authrization(`Bearer ${token}`);
    this.user = decode(token);
  };
  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };
  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.user = decode(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
  signout = async () => {
    delete instance.defaults.headers.common.Authrization;
    this.user = null;
    await AsyncStorage.removeItem("myToken");
  };
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const decodeToken = decode(token);
      if (Date.now() < decodeToken.exp) {
        this.setUser(token);
      } else {
        this.signout;
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();

export default authStore;
