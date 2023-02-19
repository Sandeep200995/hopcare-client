import * as AUTH_TYPES from "../actions/Auth/types";
import * as initialState from "./initialState";

interface Action {
  type: String;
  payload: any;
  loadingTxt: String;
  loading: Boolean;
  message: String;
}

//Reducer
export const AuthReducer = (state = initialState.userData, action: Action) => {
  // console.log("AUTH @REDUCER ==>", action);
  switch (action.type) {
    case AUTH_TYPES.AUTHENTICATE_USER_SUCCESS:
      // case AUTH_TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        case: action.type,
        userDetails: action.payload.user_details ? action.payload.user_details : initialState.userData,
        message: action.message ? action.message : ""
      };
    case AUTH_TYPES.REGISTER_USER_SUCCESS:
      // case AUTH_TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        case: action.type,
        userDetails: action.payload.user_details ? action.payload.user_details : initialState.userData,
        message: action.message ? action.message : ""
      };
    case AUTH_TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        case: action.type,
        userDetails: action.payload ? { ...action.payload } : initialState.userData,
        message: action.message ? action.message : ""
      };
      case AUTH_TYPES.GET_USER_INFO_SUCCESS:
        return {
          ...state,
          case: action.type,
          userDetails: action.payload.user_details ? action.payload.user_details : initialState.userData,
          message: action.message ? action.message : ""
        };
    default:
      return {
        ...state,
        case: action.type,
        message: action.message ? action.message : ""
      };
  }
};
