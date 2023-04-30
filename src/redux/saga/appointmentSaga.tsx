import { call, put, takeLatest } from "redux-saga/effects";
import { API_URLS } from "../../config/apiUrls";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as APPOINTMENT_ACTION_TYPES from "../actions/appointment/types";
import * as CONSTANTS from '../../constants/dummy';

type WhatYouYield = any;
type WhatYouReturn = any;
type WhatYouAccept = any;

export function* getAllAppointmentsByPatient(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
    console.log("getAllAppointmentsByPatient SAGA INVOKED ::::", action);
    try {
        const { formData } = action.payload;
        // console.log("formData", formData);
        const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.getAllAppointmentsByPatient, "POST");
        // console.log("Response Doctor list ", response);
        const { data }: any = response.data || {};

        yield put({ type: APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS_SUCCESS, payload: data, message: "Successfully fetched" });

    } catch (error: any) {
        const message: any = error?.error;
        // showErrorToast(message);
        yield put({ type: APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS_FAILURE, payload: { error: message }, message: "Unable to fetch data " });
    }
}

export function* GetAllAppointmentsByPatient() {
    yield takeLatest(APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS, getAllAppointmentsByPatient);
}


export function* getAllAppointmentsByClinic(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
    console.log("getAllAppointmentsByClinic SAGA INVOKED ::::", action);
    try {
        const { formData } = action.payload;
        // console.log("formData", formData);
        const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.getAllAppointmentsByClinic, "POST");
        console.log("Response getAllAppointmentsByClinic list ", response);
        const { data }: any = response.data || {};
        yield put({ type: APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS_BY_CLINIC_SUCCESS, payload: data, message: "Successfully fetched" });
    } catch (error: any) {
        const message: any = error?.error;
        // showErrorToast(message);
        yield put({ type: APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS_BY_CLINIC_FAILURE, payload: { error: message }, message: "Unable to fetch data " });
    }
}

export function* GetAllAppointmentsByClinic() {
    yield takeLatest(APPOINTMENT_ACTION_TYPES.GET_ALL_APPOINTMENTS_BY_CLINIC, getAllAppointmentsByClinic);
}


// export async function getDoctorDetailsById(params: any) {
//   // console.log("Params1 ", params);
//   try {
//     const response: any = await networkCall({}, `${API_URLS.getDocInfoById}/${params.formData.doctorId}`, "GET");
//     // console.log("Response ", response);
//     if (response && response.status && response.status === 200 && response.data && response.data.data) {
//       let _data = response.data ? response.data : {};
//       let isImgThere = CONSTANTS.DEFAULT_DUMMY_DATA.DOCTOR_IMGS.findIndex((clD: any) => clD._id === _data.data.userId);
//       if (isImgThere !== -1) {
//         _data.data.profilePic = CONSTANTS.DEFAULT_DUMMY_DATA.DOCTOR_IMGS[isImgThere].profilePic;
//       }
//       return { status: response.status, data: _data, message: "Successfully fetched" };
//     } else {
//       return { status: response.status, data: response.data ? response.data : {}, message: "Failed to retrive data" };
//     }
//   } catch (error) {
//     console.error("error", error);
//     return { status: 400, data: error, message: "Failed to fetch details" };
//   }
// }
