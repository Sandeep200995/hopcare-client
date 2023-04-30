import * as APPOINTMENT_TYPES from "../actions/appointment/types";
import * as initialState from "./initialState";

interface Action {
    type: String;
    payload: any;
    loadingTxt: String;
    loading: Boolean;
    message: String;
}

//Reducer
export const AppointmentReducer = (state = initialState.appointmentData, action: Action) => {
    // console.log("APPOINTMENT @REDUCER ==>", action);
    switch (action.type) {
        case APPOINTMENT_TYPES.GET_ALL_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                case: action.type,
                userAppointments: action.payload ? action.payload : initialState.appointmentData.userAppointments,
                message: action.message ? action.message : ""
            };
        case APPOINTMENT_TYPES.GET_ALL_APPOINTMENTS_BY_CLINIC_SUCCESS:
            return {
                ...state,
                case: action.type,
                clinicAppointments: action.payload ? action.payload : initialState.appointmentData.clinicAppointments,
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
