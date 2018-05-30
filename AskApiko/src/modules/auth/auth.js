import { AsyncStorage } from "react-native";

export const USER_KEY = "false";
export const USER_ID = "0";

export const onSignIn = (id) => {
  AsyncStorage.setItem(USER_KEY, "true");
  AsyncStorage.setItem(USER_ID, `${id}`);  
};

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        // console.log(res);
        if (res == "true") {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
