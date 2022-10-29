// import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as Keychain from "react-native-keychain";

const keys = {
  // AUTHENTICATED: "@authenticated",
  // CREDENTIALS: "@credentials",
  TOKEN_CL: "@token",
  USER_TYPE: "@userType"
  // USER: "@user",
  // LANGUAGE: "@language"
};

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await localStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Failed to strore data");
    // saving error
  }
};

const getData = async (key: string) => {
  try {
    const jsonValue = await localStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.error("Failed to read data");
  }
};

const removeData = async (key: string) => {
  try {
    if (key) {
      await localStorage.removeItem(key);
    } else {
      await localStorage.clear();
    }
  } catch (e) {
    // error removing value
    console.error("Failed to remove data");
  }
};

// const getAllKeys = async () => {
//   var values = [],
//     keys = Object.keys(localStorage),
//     i = keys.length;
//   while (i--) {
//     values.push(localStorage.getItem(keys[i]));
//   }
//   return values;
// };

const clear = async () => {
  try {
    // const keysToRemove = (await getAllKeys()).filter((key) => key !== keys.CREDENTIALS);
    await localStorage.clear();
    // await Keychain.resetGenericPassword();
  } catch (e) {
    console.log("Error clearing storage: ", e);
  }
};

export { keys, storeData, getData, removeData, clear };
