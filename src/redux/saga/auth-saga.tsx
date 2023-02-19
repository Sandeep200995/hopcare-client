import { put, takeLatest } from "redux-saga/effects";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as AUTH_ACION_TYPES from "../actions/Auth/types";
import * as initialState from "../reducer/initialState";

type WhatYouYield = any;
type WhatYouReturn = any;
type WhatYouAccept = any;


export async function resendOTPForUnvarifiedUser(formData: any) {
  try {
    const response: any = await networkCall(formData, API_ENDPOINTS.API_URLS.login, "POST");
    console.log("Response ",response);
    const { responseCode, message }: any = response.data || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    if (responseCode && responseCode === 202) {
      user_details.otp = response.data.otp;
      return {
        data: { user_details: user_details, message: "OTP sent" },
        status: 200
      }
    }else{
      user_details.otp = response.data.otp;
      return {
        data: { user_details: user_details, message: "OTP sent" },
        status: 200
      }
    }
  } catch (error: any) {
    return {
      data: { message: "Failed to send request" },
      status: 400
    }
  }
}

export function* authenticateUser(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData } = action.payload;
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.login, "POST");
    console.log("Response ", response);
    const { responseCode, message }: any = response.data || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    if (responseCode && responseCode === 200) {
      user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_SUCCESS, payload: { user_details: user_details }, message: message });
    } else if (responseCode && responseCode === 202) {
      user_details.otp = response.data.otp;
      yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_NOT_VERIFIED, payload: { user_details: user_details }, message: message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE, payload: { user_details: user_details }, message: message ? message : "Failed to send request" });
    }
  } catch (error: any) {
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE, payload: { error: message }, message: message ? message : "Failed to send request" });
  }
}

export function* AuthenticateUser() {
  yield takeLatest(AUTH_ACION_TYPES.AUTHENTICATE_USER, authenticateUser);
}

export function* registerUser(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData } = action.payload;
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.register, "POST");
    console.log("response",response);

    const { status, message }: any = response.data || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    user_details.otp = response.data.otp;
    if (status && status === 200) {
      user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_SUCCESS, payload: { user_details: user_details }, message: message });
    } else if (status && status === 201) {
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_FAILURE, payload: { user_details: user_details }, message: message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.REGISTER_USER_FAILURE, payload: { user_details: user_details }, message:message ? message : "Failed to get response" });
    }
  } catch (error: any) {
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.AUTHENTICATE_USER_FAILURE, payload: { error: message }, message:message ? message : "Unable to fetch data" });
  }
}

export function* RegisterUser() {
  yield takeLatest(AUTH_ACION_TYPES.REGISTER_USER, registerUser);
}

export function* forgotPassword(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData } = action.payload;
    // console.log("formData", formData, "API_ENDPOINTS.API_URLS.forgotPassword", API_ENDPOINTS.API_URLS.forgotPassword);
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.forgotPassword, "POST");
    console.log("Response ", response);
    const { status, data }: any = response || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    user_details.otp = data.otp;
    console.log("user_details", user_details);

    if (status && status === 200) {
      // user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.FORGOT_PASSWORD_SUCCESS, payload: user_details, message: data.message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.FORGOT_PASSWORD_FAILURE, payload: {}, message: data.message ? data.message : "Failed to get response" });
    }
  } catch (error: any) {
    console.log("error:::", error);
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.FORGOT_PASSWORD_FAILURE, payload: { error: message }, message: "Unable to fetch data" });
  }
}

export function* ForgotPassword() {
  yield takeLatest(AUTH_ACION_TYPES.FORGOT_PASSWORD, forgotPassword);
}


export function* changePassword(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData } = action.payload;
    // console.log("formData", formData, "API_ENDPOINTS.API_URLS.forgotPassword", API_ENDPOINTS.API_URLS.forgotPassword);
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.changePassword, "POST");
    console.log("Response ", response);
    const { status, data }: any = response || {};
    // let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    // user_details.phoneNumber = formData.phoneNumber;
    // user_details.userType = formData.userType;
    // user_details.otp = data.otp;
    // console.log("user_details",user_details);

    if (status && status === 200) {
      // user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.CHANGE_PASSWORD_SUCCESS, payload: {}, message: data.message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.CHANGE_PASSWORD_FAILURE, payload: {}, message: data.message ? data.message : "Failed to get response" });
    }
  } catch (error: any) {
    console.log("error:::", error);
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.CHANGE_PASSWORD_FAILURE, payload: { error: message }, message:message ? message : "Unable to fetch data" });
  }
}

export function* ChangePassword() {
  yield takeLatest(AUTH_ACION_TYPES.CHANGE_PASSWORD, changePassword);
}


export async function verifyUserByOTP(formData: any) {
  try {
    const response: any = await networkCall(formData, API_ENDPOINTS.API_URLS.verify, "POST");
    console.log("verifyUserByOTP  Response ", response);
    return { data: response.data, status: response.status }
  } catch (error: any) {
    return {
      data: { message: "Failed to send request" },
      status: 400
    }
  }
}

export function* fetchUserInfo(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  try {
    const { formData ,token} = action.payload;
    console.log("--->",action.payload);

    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.fetchUserInfo, "POST",token);
    console.log("fetchUserInfo response",response);
    const { status, message }: any = response.data || {};
    let user_details: any = JSON.parse(JSON.stringify(initialState.userData.userDetails));
    user_details.phoneNumber = formData.phoneNumber;
    user_details.userType = formData.userType;
    user_details.otp = response.data.otp;
    if (status && status === 200) {
      // user_details.accessToken = response.data.accessToken;
      yield put({ type: AUTH_ACION_TYPES.GET_USER_INFO_SUCCESS, payload: { user_details: user_details }, message: message });
    } else if (status && status === 201) {
      yield put({ type: AUTH_ACION_TYPES.GET_USER_INFO_FAILURE, payload: { user_details: user_details }, message: message });
    } else {
      yield put({ type: AUTH_ACION_TYPES.GET_USER_INFO_FAILURE, payload: { user_details: user_details }, message:message ? message : "Failed to get response" });
    }
  } catch (error: any) {
    const message: any = error?.error;
    yield put({ type: AUTH_ACION_TYPES.GET_USER_INFO_FAILURE, payload: { error: message }, message:message ? message : "Unable to fetch data" });
  }
}

export function* FetchUserInfo() {
  yield takeLatest(AUTH_ACION_TYPES.GET_USER_INFO, fetchUserInfo);
}
