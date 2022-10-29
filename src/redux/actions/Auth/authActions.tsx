import * as AuthTypes from "./types";

/**
 * @summary Authetication Actions
 */
//Actions

//1. Authenticate User Action
export const login = (payload: object) => {
  // console.log("PAYLOAD @ AuthenticateUserAction",payload);
  return { type: AuthTypes.AUTHENTICATE_USER, payload };
};
