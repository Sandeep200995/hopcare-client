import { BASE_URL_V1 } from "./apiUrls";
import { storage } from "../utills";
export default async function networkCall(variables?: any, method?: string, apiMethod?: string, token?: string) {
  // console.log("variables", variables);
  // console.log("method", method);
  // console.log("apiMethod", apiMethod);
  // console.log("token", token);
  // console.log("BASE_URL_V1", BASE_URL_V1);
  let storedToken = await storage.getData(storage.keys.TOKEN_CL);
  var init =
    apiMethod == "GET"
      ? {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": storedToken
        }
      }
      : {
        method: apiMethod,
        headers: {
          "Content-Type": "application/json",
          "auth-token": storedToken
        },
        body: JSON.stringify(variables)
      };

  console.log("--->", BASE_URL_V1 + method, init);
  return fetch(BASE_URL_V1 + method, init)
    .then((res: any) => res.json().then((data: any) => {
      console.log("Response ",data);
      return { status: res.status, data: data };
    }))
    .catch((err: any) => {
      console.log("err" + JSON.stringify(err));
      return { status: 900, data: "Please check your internet connection." };
    });
}
