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
