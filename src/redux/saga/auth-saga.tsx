import { put, takeLatest } from "redux-saga/effects";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as AUTH_ACION_TYPES from "../actions/Auth/types";
import * as initialState from "../reducer/initialState";

type WhatYouYield = any;
type WhatYouReturn = any;
type WhatYouAccept = any;

export function* authenticateUser(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData } = action.payload;
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.login, "POST");
    console.log("Response ",response);
    const { responseCode, message }: any = response.data || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    if (responseCode && responseCode === 200) {
      user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_SUCCESS, payload: { user_details: user_details }, message: message });
    } else if (responseCode && responseCode === 202) {
      user_details.OTP = response.data.OTP;
      yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_NOT_VERIFIED, payload: { user_details: user_details }, message: message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE, payload: { user_details: user_details }, message: "Unable to fetch data" });
    }
  } catch (error: any) {
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE, payload: { error: message }, message: "Unable to fetch data" });
  }
}

export function* AuthenticateUser() {
  yield takeLatest(AUTH_ACION_TYPES.AUTHENTICATE_USER, authenticateUser);
}

export function* registerUser(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData } = action.payload;
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.login, "POST");
    const { responseCode, message }: any = response.data || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    if (responseCode && responseCode === 200) {
      user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_SUCCESS, payload: { user_details: user_details }, message: message });
    } else if (responseCode && responseCode === 201) {
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_FAILURE, payload: { user_details: user_details }, message: message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_FAILURE, payload: { user_details: user_details }, message: "Failed to get response" });
    }
  } catch (error: any) {
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE, payload: { error: message }, message: "Unable to fetch data" });
  }
}

export function* RegisterUser() {
  yield takeLatest(AUTH_ACION_TYPES.REGISTER_USER, registerUser);
}

export function* forgotPassword(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData } = action.payload;
    console.log("formData",formData,"API_ENDPOINTS.API_URLS.forgotPassword",API_ENDPOINTS.API_URLS.forgotPassword);
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.forgotPassword, "POST");
    console.log("Response ",response);

    const { responseCode, message }: any = response.data || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    if (responseCode && responseCode === 200) {
      user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_SUCCESS, payload: { user_details: user_details }, message: message });
    } else if (responseCode && responseCode === 201) {
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_FAILURE, payload: { user_details: user_details }, message: message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_FAILURE, payload: { user_details: user_details }, message: "Failed to get response" });
    }
  } catch (error: any) {
    console.log("error:::",error);
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE, payload: { error: message }, message: "Unable to fetch data" });
  }
}

export function* ForgotPassword() {
  yield takeLatest(AUTH_ACION_TYPES.FORGOT_PASSWORD, forgotPassword);
}
