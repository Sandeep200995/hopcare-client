import { BASE_URL_V1 } from "./apiUrls";
export default function networkCall(variables?: any, method?: string, apiMethod?: string, token?: string) {
  // console.log("variables", variables);
  // console.log("method", method);
  // console.log("apiMethod", apiMethod);
  // console.log("token", token);
  // console.log("BASE_URL_V1", BASE_URL_V1);
  var init =
    apiMethod == "GET"
      ? {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token ? token : ""
        }
      }
      : {
        method: apiMethod,
        headers: {
          "Content-Type": "application/json",
          "auth-token": token ? token : ""
        },
        body: JSON.stringify(variables)
      };

  console.log("--->", BASE_URL_V1 + method, init);
  return fetch(BASE_URL_V1 + method, init)
    .then((res: any) => res.json().then((data: any) => {
      return { status: res.status, data: data };
    }))
    .catch((err: any) => {
      console.log("err" + JSON.stringify(err));
      return { status: 900, data: "Please check your internet connection." };
    });
}
