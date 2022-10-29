import { takeLatest, put } from "redux-saga/effects";
import * as AuthActionTypes from "../actions/Auth/types";
// import * as CommonActionTypes from "../../Actions/Common/types";
// import * as LoaderMsgs from "../../../constants/LoaderMessages";
// import { Auth, graphqlOperation, API, Storage } from "aws-amplify";
// import {
//   setDevice as SetDevice,
//   updateUser as UpdateUser,
//   removeDeviceToken as RemoveDeviceToken
// } from "../../../graphql/mutations";
// import { getUser as GetUser, getModuleVersion as GetModuleVersions } from "../../../graphql/queries";
// import * as CONSTANTS from "../../../constants/Dummy";
// import * as STATIC_MSG from "../../../constants/LoaderMessages";

// Authenticate User Saga
// export function* authenticateUser(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log("PAYLOAD @ Saga Auth function", params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SEND_REQUEST
//   });
//   try {
//     const { email, password } = formdata;
//     const res: any = yield Auth.signIn(email, password);
//     // console.log('authenticateUser RESPONSE ', res);
//     if (res.signInUserSession && res.signInUserSession.accessToken) {
//       const roleList = res?.signInUserSession?.accessToken?.payload["cognito:groups"];
//       const _salonId = res?.attributes?.sub;
//       console.log("USER ROLE:", roleList);
//       let _role = "Salon";
//       if (_role && roleList) {
//         let isValidUser = roleList.findIndex((ele: any) => ele === _role);
//         if (isValidUser !== -1) {
//           let userInfo: any = {
//             email: res.username,
//             profilePic: CONSTANTS.DUMMY_SALON_IMG
//           };
//           yield put({
//             type: AuthActionTypes.AUTHENTICATE_USER_SUCCESS,
//             payload: {
//               cognito_key: res.userDataKey,
//               user_details: userInfo,
//               salon_id: _salonId
//             },
//             message: LoaderMsgs.auth.LOG_SUCCESS
//           });
//         } else {
//           yield put({
//             type: AuthActionTypes.AUTHENTICATE_USER_FAILURE,
//             payload: {},
//             // message: "Found different user role",
//             message: STATIC_MSG.toast_messages.ROLE_DIFFER
//           });
//         }
//       }
//     } else {
//       // console.log("res else-->",res);
//       if (res.challengeName && res.challengeParam) {
//         if (res.challengeName === "NEW_PASSWORD_REQUIRED") {
//           yield put({
//             type: AuthActionTypes.AUTHENTICATE_USER_FAILURE_NEW_PASSWORD,
//             payload: res,
//             // message: "New password required, Please change the password"
//             message: STATIC_MSG.toast_messages.NEW_PASSWORD_REQ
//           });
//         } else {
//           yield put({
//             type: AuthActionTypes.AUTHENTICATE_USER_FAILURE,
//             payload: {},
//             message: res.challengeName
//           });
//         }
//       }
//     }
//   } catch (err: any) {
//     console.error("AUTHENTICATION ERROR", err);
//     yield put({
//       type: AuthActionTypes.AUTHENTICATE_USER_FAILURE,
//       payload: err,
//       message: err.message ? err.message : "Authentication Error"
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: ""
//     });
//   }
// }
// export function* AuthenticateUser() {
//   try {
//     yield takeLatest(AuthActionTypes.AUTHENTICATE_USER, authenticateUser);
//   } catch (ex: any) {
//     yield put({ type: AuthActionTypes.AUTHENTICATE_USER_FAILURE, message: ex });
//   }
// }

// // Register User Saga
export function* registerUser(params: any): any {
  const { formdata } = params?.payload;
  // console.log('PAYLOAD @ Saga Auth function', params.payload);
  //   yield put({
  //     type: CommonActionTypes.LOADER,
  //     loading: true,
  //     loadingTxt: LoaderMsgs.common.SUB_REQUEST
  //   });
  try {
    const { password, email } = formdata;
    //     const res: any = yield Auth.signUp({
    //       username: email,
    //       password,
    //       attributes: { email }
    //     });
    //     console.log("RESPONSE ", res);
    //     yield put({
    //       type: AuthActionTypes.REGISTER_USER_SUCCESS,
    //       payload: { email },
    //       message: LoaderMsgs.auth.OTP_MSG
    //     });
    //   } catch (err: any) {
    //     console.error("AUTHENTICATION ERROR", err);
    //     yield put({
    //       type: AuthActionTypes.REGISTER_USER_FAILURE,
    //       payload: err,
    //       message: err.message
    //     });
  } finally {
    // yield put({
    //   type: CommonActionTypes.LOADER,
    //   loading: false,
    //   loadingTxt: ""
    // });
  }
}
export function* RegisterUser() {
  try {
    yield takeLatest(AuthActionTypes.AUTHENTICATE_USER, registerUser);
  } catch (ex: any) {
    yield put({ type: AuthActionTypes.AUTHENTICATE_USER_FAILURE, message: ex });
  }
}

// // Forgot Password Saga
// export function* forgotPassword(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log('PAYLOAD @ Saga Auth function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SUB_REQUEST
//   });
//   try {
//     const { username } = formdata;
//     console.log("USER NAME ", username);
//     const res: any = yield Auth.forgotPassword(username);
//     console.log("RESPONSE ", res);
//     yield put({
//       type: AuthActionTypes.FORGOT_PASSWORD_SUCCESS,
//       payload: { email: username },
//       message: `An Code has sent to ${res?.CodeDeliveryDetails?.Destination}`
//     });
//   } catch (err: any) {
//     console.error("VARIFICATION  ERROR", err);
//     yield put({
//       type: AuthActionTypes.FORGOT_PASSWORD_FAILURE,
//       payload: err,
//       message: err.message ? err.message : ""
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: ""
//     });
//   }
// }
// export function* ForgotPassword() {
//   try {
//     yield takeLatest(AuthActionTypes.FORGOT_PASSWORD, forgotPassword);
//   } catch (ex: any) {
//     yield put({ type: AuthActionTypes.FORGOT_PASSWORD_FAILURE, message: ex });
//   }
// }

// // Reset Password Saga
// export function* resetPassword(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log('PAYLOAD @ Saga Auth function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SUB_REQUEST
//   });
//   try {
//     const { username, otp, password } = formdata;
//     console.log("USER NAME ", username);
//     const code = otp;
//     const new_password = password;
//     const res: any = yield Auth.forgotPasswordSubmit(username, code, new_password);
//     console.log("RESPONSE ", res);
//     yield put({
//       type: AuthActionTypes.RESET_PASSWORD_SUCCESS,
//       payload: {},
//       message: LoaderMsgs.common.PASSWORD_CHANGED
//     });
//   } catch (err: any) {
//     console.error("VARIFICATION  ERROR", err);
//     yield put({
//       type: AuthActionTypes.RESET_PASSWORD_FAILURE,
//       payload: err,
//       message: err.message
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: ""
//     });
//   }
// }
// export function* ResetPassword() {
//   try {
//     yield takeLatest(AuthActionTypes.RESET_PASSWORD, resetPassword);
//   } catch (ex: any) {
//     yield put({ type: AuthActionTypes.RESET_PASSWORD_FAILURE, message: ex });
//   }
// }

// // Varify User Saga
// export function* verifyUser(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log('PAYLOAD @ Saga Auth function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SUB_REQUEST
//   });
//   try {
//     const { email, otp } = formdata;
//     const username = email;
//     const code = otp;
//     const res: any = yield Auth.confirmSignUp(username, code);
//     console.log("RESPONSE ", res);

//     yield put({
//       type: AuthActionTypes.VERIFY_USER_SUCCESS,
//       payload: {},
//       message: LoaderMsgs.auth.REG_SUCCESS
//     });
//   } catch (err: any) {
//     console.error("VARIFICATION  ERROR", err);
//     yield put({
//       type: AuthActionTypes.VERIFY_USER_FAILURE,
//       payload: err,
//       message: err?.message
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: ""
//     });
//   }
// }
// export function* VerifyUser() {
//   try {
//     yield takeLatest(AuthActionTypes.VERIFY_USER, verifyUser);
//   } catch (ex: any) {
//     yield put({ type: AuthActionTypes.VERIFY_USER_FAILURE, message: ex });
//   }
// }

// // Resend Verification Code  Saga
// export function* resendCode(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log('PAYLOAD @ Saga Auth function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SUB_REQUEST
//   });
//   try {
//     const { email } = formdata;
//     const username = email;
//     console.log("USER NAME ", username);
//     const res: any = yield Auth.resendSignUp(username);
//     console.log("RESPONSE ", res);
//     yield put({
//       type: AuthActionTypes.RESEND_CODE_SUCCESS,
//       payload: {},
//       message: `Code has resent on ${res.CodeDeliveryDetails.Destination}`
//     });
//   } catch (err: any) {
//     console.error("VARIFICATION  ERROR", err);
//     yield put({
//       type: AuthActionTypes.RESEND_CODE_FAILURE,
//       payload: err
//       // message: err.message
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: ""
//     });
//   }
// }
// export function* ResendCode() {
//   try {
//     yield takeLatest(AuthActionTypes.RESEND_CODE, resendCode);
//   } catch (ex: any) {
//     yield put({ type: AuthActionTypes.RESEND_CODE_FAILURE, message: ex });
//   }
// }

// // Add device token
// export function* deviceToken(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log('PAYLOAD @ Saga REGISTER DEVICE function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SUB_REQUEST
//   });
//   try {
//     const res: any = yield API.graphql(graphqlOperation(SetDevice, formdata));
//     console.log("REGISTER DEVICE RESPONSE ", res);
//     let _payload = {
//       fcmToken: formdata.fcmToken ? formdata.fcmToke : null,
//       isSubmitted: true
//     };
//     yield put({
//       type: AuthActionTypes.REGISTER_DEVICE_TOKEN_SUCCESS,
//       payload: _payload,
//       // message: `Device Details submitted successfully`
//       message: STATIC_MSG.toast_messages.DEVICE_DETAILS_SUBMITTED
//     });
//   } catch (err: any) {
//     console.error("VARIFICATION ERROR", err);
//     yield put({
//       type: AuthActionTypes.REGISTER_DEVICE_TOKEN_FAILURE,
//       payload: err
//       // message: err.message
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: ""
//     });
//   }
// }
// export function* DeviceToken() {
//   try {
//     yield takeLatest(AuthActionTypes.REGISTER_DEVICE_TOKEN, deviceToken);
//   } catch (ex: any) {
//     yield put({
//       type: AuthActionTypes.REGISTER_DEVICE_TOKEN_FAILURE,
//       message: ex
//     });
//   }
// }

// // Persist User Details  Saga

// // Persist User Saga
// export function* persistUserDetails(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log('PAYLOAD @ Saga Auth function', params.payload);
//   // yield put({
//   //   type: CommonActionTypes.LOADER,
//   //   loading: true,
//   //   loadingTxt: LoaderMsgs.common.GETTING_USER_DETAILS
//   // });
//   try {
//     const res: any = yield Auth.currentAuthenticatedUser();
//     // console.log("RESPONSE PERSIST USER", res);
//     let _salonId = res?.attributes?.sub;
//     // console.log(
//     //   'RESPONSE PERSIST USER ATTRIBUTE :',
//     //   res.attributes['custom:profile_pic']
//     // );
//     let userInfo: any = {
//       email: res.username,
//       profilePic: CONSTANTS.DUMMY_SALON_IMG
//     };
//     try {
//       const userData: any = yield API.graphql(graphqlOperation(GetUser));
//       // console.log('RESPONSE User Details Persist', userData);
//       // userInfo.firstName = userData.data.getUser.firstName;
//       // userInfo.lastName = userData.data.getUser.lastName;
//     } catch (err: any) {
//       console.error("ERROR", err);
//       yield put({
//         type: AuthActionTypes.PERSIST_USER_DETAILS_FAILURE,
//         payload: err,
//         // message: "No User data found"
//         message: STATIC_MSG.toast_messages.NO_USER_DATA_FOUND
//       });
//     }
//     // console.log('userInfo : ', userInfo);
//     yield put({
//       type: AuthActionTypes.SET_COGNITO_KEY,
//       payload: {
//         cognito_key: res.userDataKey,
//         salon_id: _salonId
//       }
//       // message: LoaderMsgs.auth.FOUND_USER_DETAILS
//     });
//     yield put({
//       type: AuthActionTypes.PERSIST_USER_DETAILS_SUCCESS,
//       payload: userInfo
//       // message: LoaderMsgs.auth.FOUND_USER_DETAILS
//     });
//   } catch (err: any) {
//     console.error("PERSIST DATA  ERROR", err);
//     yield put({
//       type: AuthActionTypes.PERSIST_USER_DETAILS_FAILURE,
//       payload: err,
//       // message: "No User data found"
//       message: STATIC_MSG.toast_messages.NO_USER_DATA_FOUND
//     });
//   } finally {
//     // yield put({
//     //   type: CommonActionTypes.LOADER,
//     //   loading: false,
//     //   loadingTxt: ""
//     // });
//   }
// }
// export function* PersistUserDetails() {
//   try {
//     yield takeLatest(AuthActionTypes.PERSIST_USER_DETAILS, persistUserDetails);
//   } catch (ex: any) {
//     yield put({
//       type: AuthActionTypes.PERSIST_USER_DETAILS_FAILURE,
//       message: ex
//     });
//   }
// }

// // Signout User Saga
// export function* signOutUser(params: any): any {
//   const { formdata } = params?.payload;
//   // console.log('PAYLOAD @ Saga Auth function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: "Removing user session"
//   });
//   try {
//     const response: any = yield API.graphql(graphqlOperation(RemoveDeviceToken));
//     console.log("Device Token removed Successfully", response);
//     if (
//       response.data &&
//       response.data.removeDeviceToken &&
//       response.data.removeDeviceToken.status &&
//       response.data.removeDeviceToken.status === "done"
//     ) {
//       yield put({
//         type: AuthActionTypes.TOKEN_REMOVE_SUCCESS,
//         payload: {},
//         message: "Successfully token removed"
//       });
//     } else {
//       yield put({
//         type: AuthActionTypes.TOKEN_REMOVE_FAILURE,
//         payload: {},
//         message: "Failed to remove Device Token"
//       });
//     }
//   } catch (error: any) {
//     console.log("Failed to remove Device Token ", error);
//     yield put({
//       type: AuthActionTypes.TOKEN_REMOVE_FAILURE,
//       payload: {},
//       message: "Failed to remove Device Token"
//     });
//   } finally {
//     try {
//       const res: any = yield Auth.signOut();
//       console.log("RESPONSE ", res);
//       yield put({
//         type: AuthActionTypes.SIGN_OUT_USER_SUCCESS,
//         payload: res,
//         message: LoaderMsgs.auth.SIGN_OUT_USER
//       });
//     } catch (err: any) {
//       console.error("SIGNOUT User  ERROR", err);
//       yield put({
//         type: AuthActionTypes.SIGN_OUT_USER_FAILURE,
//         payload: err,
//         // message: "Failed to clear user session."
//         message: STATIC_MSG.toast_messages.FAILED_CLEAR_SESSION
//       });
//     }
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: "Session cleared"
//     });
//   }
// }
// export function* SignOutUser() {
//   try {
//     yield takeLatest(AuthActionTypes.SIGN_OUT_USER, signOutUser);
//   } catch (ex: any) {
//     yield put({
//       type: AuthActionTypes.SIGN_OUT_USER_FAILURE,
//       message: ex
//     });
//   }
// }

// export function* getUserData(params: any): any {
//   // console.log('PAYLOAD @ GET USER function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true
//     // loadingTxt: LoaderMsgs.common.LOOKING_NEAR_BY
//   });

//   try {
//     const res: any = yield API.graphql(graphqlOperation(GetUser));
//     let userInfo = res.data.getUser;
//     // console.log("RESPONSE User Details", res);

//     if (userInfo.profilePic) {
//       // console.log('HAVING PROFILE PIC ', userInfo.profilePic);
//       let imgKey = userInfo.profilePic.original.split("/").pop();
//       const imgUrl: any = yield Storage.get(`${imgKey}`, {
//         level: "protected"
//       });
//       // console.log('GENRATED IMG URL ', imgUrl);
//       userInfo.profilePic = imgUrl;
//     } else {
//       userInfo.profilePic = CONSTANTS.DUMMY_SALON_IMG;
//     }
//     // console.log('userInfo SAGA -> ', userInfo);
//     yield put({
//       type: AuthActionTypes.GET_USER_DATA_SUCCESS,
//       // payload: {...res.data.getUser,...params.payload.userData},
//       payload: userInfo,
//       message: "Got user details"
//     });
//   } catch (err: any) {
//     console.error("ERROR", err);
//     yield put({
//       type: AuthActionTypes.GET_USER_DATA_FAILURE,
//       payload: err,
//       message: "Failed to get user details"
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: "",
//       message: ""
//     });
//   }
// }
// export function* GetUserData() {
//   try {
//     yield takeLatest(AuthActionTypes.GET_USER_DATA, getUserData);
//   } catch (ex: any) {
//     yield put({
//       type: AuthActionTypes.GET_USER_DATA_FAILURE,
//       message: ex
//     });
//   }
// }

// export function* updateUserData(params: any): any {
//   const { formdata } = params.payload;
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true
//     // loadingTxt: LoaderMsgs.common.LOOKING_NEAR_BY
//   });

//   try {
//     const res: any = yield API.graphql(graphqlOperation(UpdateUser, formdata));
//     let userInfo = res.data.updateUser;
//     if (userInfo.profilePic) {
//       let imgKey = userInfo.profilePic.original.split("/").pop();
//       const imgUrl: any = yield Storage.get(`${imgKey}`, {
//         level: "protected"
//       });
//       userInfo.profilePic = imgUrl;
//     } else {
//       userInfo.profilePic = CONSTANTS.DUMMY_SALON_IMG;
//     }
//     yield put({
//       type: AuthActionTypes.UPDATE_USER_DATA_SUCCESS,
//       payload: userInfo,
//       message: "Got user details"
//     });
//   } catch (err: any) {
//     console.error("ERROR", err);
//     yield put({
//       type: AuthActionTypes.UPDATE_USER_DATA_FAILURE,
//       payload: err,
//       message: "Failed to update user details"
//     });
//   } finally {
//     yield put({
//       type: CommonActionTypes.LOADER,
//       loading: false,
//       loadingTxt: "",
//       message: ""
//     });
//   }
// }
// export function* UpdateUserData() {
//   try {
//     yield takeLatest(AuthActionTypes.UPDATE_USER_DATA, updateUserData);
//   } catch (ex: any) {
//     yield put({
//       type: AuthActionTypes.UPDATE_USER_DATA_FAILURE,
//       message: ex
//     });
//   }
// }

// // Authenticate User Saga
// export function* getModuleVersionsData(params: any): any {
//   const formdata = params?.payload;
//   // console.log('PAYLOAD @ Saga Auth function', params.payload);
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SEND_REQUEST
//   });
//   try {
//     const res = yield API.graphql(graphqlOperation(GetModuleVersions, formdata));
//     yield put({
//       type: AuthActionTypes.GET_MODULE_VERSIONS_SUCCESS,
//       payload: res.data?.getModuleVersion ? res.data.getModuleVersion : {}
//     });
//   } catch (err: any) {
//     console.error("AUTHENTICATION ERROR", err);
//     yield put({
//       type: AuthActionTypes.GET_MODULE_VERSIONS_FAILURE,
//       payload: err,
//       message: err.message ? err.message : "Authentication Error"
//     });
//   }
// }
// export function* GetModuleVersionsData() {
//   try {
//     yield takeLatest(AuthActionTypes.GET_MODULE_VERSIONS, getModuleVersionsData);
//   } catch (ex: any) {
//     yield put({
//       type: AuthActionTypes.GET_MODULE_VERSIONS_FAILURE,
//       message: ex
//     });
//   }
// }

// // Authenticate require New Password Saga
// export function* requireNewPassword(params: any): any {
//   // console.log("PAYLOAD @ Saga Auth function", params.payload);
//   const { formdata } = params.payload;
//   yield put({
//     type: CommonActionTypes.LOADER,
//     loading: true,
//     loadingTxt: LoaderMsgs.common.SEND_REQUEST
//   });
//   const { user, password } = formdata;
//   try {
//     const res: any = yield Auth.completeNewPassword(user, password);
//     console.log("REsponse Require New password ", res);

//     yield put({
//       type: AuthActionTypes.REQUIRE_NEW_PASSWORD_SUCCESS,
//       payload: {},
//       // message: "Password set successfully"
//       message: STATIC_MSG.toast_messages.PASSWORD_SET_SUCCESS
//     });
//   } catch (err: any) {
//     console.error(" ERROR", err);
//     yield put({
//       type: AuthActionTypes.REQUIRE_NEW_PASSWORD_FAILURE,
//       payload: err,
//       message: err.message ? err.message : "Error while processing request, Please try after sometime"
//     });
//   }
// }
// export function* RequireNewPassword() {
//   try {
//     yield takeLatest(AuthActionTypes.REQUIRE_NEW_PASSWORD, requireNewPassword);
//   } catch (ex: any) {
//     yield put({
//       type: AuthActionTypes.REQUIRE_NEW_PASSWORD_FAILURE,
//       message: ex
//     });
//   }
// }
