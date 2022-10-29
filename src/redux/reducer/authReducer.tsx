// import * as AuthTypes from "../../actions/auth/types";
import * as initialState from "./initialState";
// import * as CommonActionType from "../../Actions/Common/types";

// import * as LANGUAGE from '../../../locale';
// import * as LANGUAGE from '../../../locale';
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
    // case CommonActionType.LOADER: //Loader for loading state
    //   return {
    //     ...state,
    //     case: action.type,
    //     txt: action.loadingTxt ? action.loadingTxt : ""
    //   };
    // case CommonActionType.CHANGE_LANGUAGE: // Language change Addtion
    //   return {
    //     ...state,
    //     case: action.type,
    //     txt: action.loadingTxt ? action.loadingTxt : '',
    //     currentLang:
    //       action.payload.lang === 'FR'
    //         ? LANGUAGE.default.FR
    //         : LANGUAGE.default.EN
    //   };
    // case CommonActionType.GET_CURRENT_LOCATION_SUCCESS: //For Getting Current Location Of user
    //   return {
    //     ...state,
    //     case: action.type,
    //     txt: action.loadingTxt ? action.loadingTxt : "",
    //     currentLocation: action.payload
    //   };
    // case CommonActionType.CLEAR_CURRENT_LOCATION: //For Clearing Current Location Of user
    //   return {
    //     ...state,
    //     case: action.type,
    //     txt: action.loadingTxt ? action.loadingTxt : "",
    //     currentLocation: initialState.userData.currentLocation
    //   };
    // case AuthTypes.AUTHENTICATE_USER_SUCCESS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     loginedFirst: true,
    //     userDetails: action.payload.user_details ? action.payload.user_details : initialState.userData,
    //     cognitoKey: action.payload ? action.payload.cognito_key : null,
    //     message: action.message ? action.message : ""
    //   };
    // case AuthActionType.REGISTER_USER_SUCCESS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     loginedFirst: true,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     message: action.message ? action.message : "",
    //     userDetails: action.payload ? action.payload : initialState.userData
    //   };
    // case AuthActionType.FORGOT_PASSWORD_SUCCESS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     message: action.message ? action.message : "",
    //     userDetails: action.payload ? action.payload : initialState.userData
    //   };
    // case AuthActionType.REGISTER_DEVICE_TOKEN_SUCCESS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     message: action.message ? action.message : "",
    //     userDeviceInfo: action.payload ? action.payload : { isSubmitted: false }
    //   };
    // case AuthActionType.CLEAR_USER_DETAILS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     message: action.message ? action.message : "",
    //     userDetails: initialState.userData.userDetails
    //   };

    // case AuthActionType.SET_PROFILE_IMG_KEY:
    //   return {
    //     ...state,
    //     case: action.type,
    //     profileImgKey: action.payload ? action.payload : null,
    //     message: action.message ? action.message : ''
    //   };
    // case AuthActionType.SET_COGNITO_KEY:
    //   // console.log('action.payload', action.payload);
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     cognitoKey: action.payload ? action.payload.cognito_key : null,
    //     message: action.message ? action.message : ""
    //   };
    // case AuthActionType.PERSIST_USER_DETAILS_SUCCESS:
    //   // console.log('action.payload', action.payload,initialState.userData.userDetails);
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     userDetails: action.payload ? { ...action.payload } : initialState.userData.userDetails,
    //     // cognitoKey: action.payload ? action.payload.cognito_key : null,
    //     message: action.message ? action.message : ""
    //   };
    // case AuthActionType.UPDATE_USER_DATA_SUCCESS:
    // case AuthActionType.GET_USER_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     userDetails: action.payload ? action.payload : initialState.userData.userDetails,
    //     message: action.message ? action.message : ""
    //   };
    // case AuthActionType.PERSIST_USER_DETAILS_FAILURE:
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     cognitoKey: null,
    //     message: action.message ? action.message : ""
    //   };
    // case AuthActionType.SIGN_OUT_USER_SUCCESS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     loadingtxt: action.loadingTxt ? action.loadingTxt : "",
    //     cognitoKey: null,
    //     message: action.message ? action.message : "",
    //     userDetails: initialState.userData.userDetails
    //   };
    // case AuthActionType.GET_MODULE_VERSIONS_SUCCESS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     moduleVersion: action.payload
    //   };
    // case AuthActionType.GET_MODULE_VERSIONS_FAILURE:
    //   return {
    //     ...state,
    //     case: action.type,
    //     moduleVersion: null
    //   };
    // case AuthActionType.CHANGE_ASK_APP_UPDATE_STATUS:
    //   return {
    //     ...state,
    //     case: action.type,
    //     askForUpdate: action.payload ? action.payload : initialState.userData.askForUpdate
    //   };
    // case CommonActionType.UPDATE_APP_VERSION:
    //   return {
    //     ...state,
    //     case: action.type,
    //     version: action.payload ? action.payload.versions : initialState.userData.version
    //   };
    default:
      return {
        ...state,
        case: action.type,
        message: action.message ? action.message : ""
      };
  }
};
