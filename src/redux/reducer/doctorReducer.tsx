import * as DOCTOR_ACTION_TYPES from "../actions/doctor/types";
import * as initialState from "./initialState";

//Reducer
interface Action {
  type: String;
  payload: any;
  loadingTxt: String;
  loading: Boolean;
  message: String;
}

export const DoctorReducer = (state = initialState.doctorData, action: Action) => {
  // console.log("Clinic @REDUCER ==>", action);
  switch (action.type) {
    case DOCTOR_ACTION_TYPES.GET_ALL_DOCTORS_SUCCESS:
      return {
        ...state,
        case: action.type,
        message: action.message ? action.message : "",
        dashboardDoctorData: action.payload ? action.payload : initialState.doctorData.dashboardDoctorData
      };
    default:
      return {
        ...state,
        case: action.type,
        message: action.message ? action.message : ""
      };
  }
};
