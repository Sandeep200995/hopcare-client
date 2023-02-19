import * as AUTH_TYPES from "./types";

/**
 * @summary Authetication Actions
 */
//Actions

//1. Authenticate User Action
export const authenticateUser = (payload: object) => {
  // console.log("PAYLOAD @ AuthenticateUserAction",payload);
  return { type: AUTH_TYPES.AUTHENTICATE_USER, payload };
};

//2. Register User Action
export const registerUser = (payload: object) => {
  // console.log("PAYLOAD @ AuthenticateUserAction",payload);
  return { type: AUTH_TYPES.REGISTER_USER, payload };
};

//3. Forgot Password Action
export const forgotPassword = (payload: object) => {
  // console.log("PAYLOAD @ AuthenticateUserAction",payload);
  return { type: AUTH_TYPES.FORGOT_PASSWORD, payload };
};

//4. Change Password Action
export const changePassword = (payload: object) => {
  // console.log("PAYLOAD @ AuthenticateUserAction",payload);
  return { type: AUTH_TYPES.CHANGE_PASSWORD, payload };
};

//5. Change Password Action
export const fetchUserDetails = (payload: object) => {
  // console.log("PAYLOAD @ AuthenticateUserAction",payload);
  return { type: AUTH_TYPES.GET_USER_INFO, payload };
};
