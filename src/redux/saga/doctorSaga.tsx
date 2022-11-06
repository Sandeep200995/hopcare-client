import { call, put, takeLatest } from "redux-saga/effects";
import { API_URLS } from "../../config/apiUrls";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as DOCTOR_ACION_TYPES from "../actions/doctor/types";

type WhatYouYield = any;
type WhatYouReturn = any;
type WhatYouAccept = any;

export function* getDashboardDoctorList(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  // console.log("getAllClinics SAGA INVOKED ::::", action);
  try {
    const { formData } = action.payload;
    // console.log("formData", formData);
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.getDashboardDoctorList, "POST");
    console.log("Response Doctor list ", response);
    const { data }: any = response.data || {};
    // console.log("Data ", data);
    if (data) {
      yield put({
        type: DOCTOR_ACION_TYPES.GET_ALL_DOCTORS_SUCCESS,
        payload: data,
        message: "Successfully fetched"
      });
    } else {
      yield put({
        type: DOCTOR_ACION_TYPES.GET_ALL_DOCTORS_FAILURE,
        payload: {},
        message: "Unable to fetch data "
      });
    }
  } catch (error: any) {
    const message: any = error?.error;
    // showErrorToast(message);
    yield put({
      type: DOCTOR_ACION_TYPES.GET_ALL_DOCTORS_FAILURE,
      payload: { error: message },
      message: "Unable to fetch data "
    });
  }
}

export function* GetDashboardDoctorList() {
  yield takeLatest(DOCTOR_ACION_TYPES.GET_ALL_DOCTORS_FAILURE, getDashboardDoctorList);
}

// export async function getDocDetailsById(params) {
//     // console.log("Params ", params);
//     try {
//         const requestOptions = {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 //  "auth-token": _token
//             },
//         };
//         // dispatch(COMMON_ACTIONS.startLoading({}));
//         let response = await fetch(`${API_URLS.getDocInfoById}/${params.formData.docId}`, requestOptions);
//         response = await response.json();
//         // console.log("Response doc details", response);
//         // dispatch(COMMON_ACTIONS.stopLoading({}));
//         return ({
//             status: response.status,
//             data: { __id: params.formData.docId, ...response.data },
//             message: "Details fetched successfully"
//         })
//     } catch (error) {
//         // console.log("Error details api", error);
//         return ({
//             status: 400,
//             data: {},
//             message: "Failed to fetch details"
//         })
//         // dispatch(COMMON_ACTIONS.stopLoading({}));
//         // toggleToast({ ...toast, msg: "Failed to fetch details", status: !toast.status, type: "error" });
//     }
//     // const { }
//     // try {
//     //     //   const res = await API.graphql(graphqlOperation(UpdateAppointmentSalon, params));
//     //     const res = await call(getClinicInfoById, params.formData);
//     //     console.log("REsponse ", res);
//     //     return {
//     //         // data: res.data.updateAppointmentSalon ? res.data.updateAppointmentSalon : {},
//     //         status: 200
//     //     };
//     // } catch (err) {
//     //     console.error("ERROR", err);
//     //     return {
//     //         error: err,
//     //         message: "Failed to update service",
//     //         status: 400
//     //     };
//     // }
// }
// export default clinicSaga;
