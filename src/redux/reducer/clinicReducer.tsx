import * as CLINIC_ACTION_TYPES from "../actions/clinic/types";
import * as initialState from "./initialState";

//Reducer
interface Action {
  type: String;
  payload: any;
  loadingTxt: String;
  loading: Boolean;
  message: String;
}

export const ClinicReducer = (state = initialState.clinicData, action: Action) => {
  // console.log("Clinic @REDUCER ==>", action);
  switch (action.type) {
    case CLINIC_ACTION_TYPES.GET_ALL_CLINICS_SUCCESS:
      return {
        ...state,
        case: action.type,
        message: action.message ? action.message : "",
        dashboardClinicData: action.payload ? action.payload : initialState.clinicData.dashboardClinicData
      };
    default:
      return {
        ...state,
        case: action.type,
        message: action.message ? action.message : ""
      };
  }
};
