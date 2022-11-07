import { call, put, takeLatest } from "redux-saga/effects";
import { API_URLS } from "../../config/apiUrls";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as AUTH_ACION_TYPES from "../actions/Auth/types";
import * as initialState from "../reducer/initialState";
type WhatYouYield = any;
type WhatYouReturn = any;
type WhatYouAccept = any;

export function* authenticateUser(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  // console.log("authenticateUser SAGA INVOKED ::::", action);
  try {
    const { formData } = action.payload;
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.login, "POST");
    // console.log("Authenticate User response  ", response);
    const { responseCode, message }: any = response.data || {};
    console.log("Response ", response);
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    if (responseCode && responseCode === 200) {
      user_details.accessToken = response.data.accessToken;
      yield put({
        type: AUTH_ACION_TYPES.AUTHENTICATE_USER_SUCCESS,
        payload: { user_details: user_details },
        message: message
      });
    } else if (responseCode && responseCode === 202) {
      user_details.OTP = response.data.OTP;
      yield put({
        type: AUTH_ACION_TYPES.AUTHENTICATE_USER_NOT_VERIFIED,
        payload: { user_details: user_details },
        message: message
      });
    } else {
      yield put({
        type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE,
        payload: { user_details: user_details },
        message: "Unable to fetch data "
      });
    }
  } catch (error: any) {
    const message: any = error?.error;
    yield put({
      type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE,
      payload: { error: message },
      message: "Unable to fetch data "
    });
  }
}

export function* AuthenticateUser() {
  yield takeLatest(AUTH_ACION_TYPES.AUTHENTICATE_USER, authenticateUser);
}

// export function* authenticateUser(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
//   // console.log("authenticateUser SAGA INVOKED ::::", action);
//   try {
//     const { formData } = action.payload;
//     const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.login, "POST");
//     // console.log("Authenticate User response  ", response);
//     const { responseCode, message }: any = response.data || {};

//     if (responseCode && responseCode === 200) {
//       yield put({
//         type: AUTH_ACION_TYPES.AUTHENTICATE_USER_SUCCESS,
//         payload: response.data,
//         message: message
//       });
//     } else if (responseCode && responseCode === 202) {
//       yield put({
//         type: AUTH_ACION_TYPES.AUTHENTICATE_USER_NOT_VERIFIED,
//         payload: response.data,
//         message: message
//       });
//     } else {
//       yield put({
//         type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE,
//         payload: response.data,
//         message: "Unable to fetch data "
//       });
//     }
//   } catch (error: any) {
//     const message: any = error?.error;
//     yield put({
//       type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE,
//       payload: { error: message },
//       message: "Unable to fetch data "
//     });
//   }
// }

// export function* AuthenticateUser() {
//   yield takeLatest(AUTH_ACION_TYPES.AUTHENTICATE_USER, authenticateUser);
// }
