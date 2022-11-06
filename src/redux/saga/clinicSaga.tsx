import { call, put, takeLatest } from "redux-saga/effects";
// import * as AuthTypes from "../actions/auth/types";
import { GET_ALL_CLINICS, GET_ALL_CLINICS_SUCCESS, GET_ALL_CLINICS_FAILURE } from "../actions/clinic/types";
// import { getAllClinicList, getClinicInfoById } from "../../services/clinicService";
// import { API_URLS } from "../../config";
import { API_URLS } from "../../config/apiUrls";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
// import { showSuccessToast, showErrorToast, storage } from '../../utils';

type WhatYouYield = any;
type WhatYouReturn = any;
type WhatYouAccept = any;

export function* getAllClinics(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  // console.log("getAllClinics SAGA INVOKED ::::", action);
  try {
    const { formData } = action.payload;
    // console.log("formData", formData);
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.getAllClnics, "POST");
    console.log("Response Clinic list ", response);
    const { data }: any = response.data || {};
    // console.log("Data ", data);
    if (data) {
      yield put({
        type: GET_ALL_CLINICS_SUCCESS,
        payload: data,
        message: "Successfully fetched"
      });
    } else {
      yield put({
        type: GET_ALL_CLINICS_FAILURE,
        payload: {},
        message: "Unable to fetch data "
      });
    }
  } catch (error: any) {
    const message: any = error?.error;
    // showErrorToast(message);
    yield put({
      type: GET_ALL_CLINICS_FAILURE,
      payload: { error: message },
      message: "Unable to fetch data "
    });
  }
}

export function* GetAllClinics() {
  yield takeLatest(GET_ALL_CLINICS, getAllClinics);
}

export async function getClinicDetailsById(params: any) {
  // console.log("Params ", params);
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        //  "auth-token": _token
      }
    };
    // dispatch(COMMON_ACTIONS.startLoading({}));
    let response = await fetch(`${API_URLS.getClinicInfoById}/${params.formData.clinicId}`, requestOptions);
    response = await response.json();
    // console.log("Response ", response);
    // dispatch(COMMON_ACTIONS.stopLoading({}));
    return {
      status: response.status,
      // data: response.data ? response.data : {},
      message: "Successfully fetched"
    };
  } catch (error) {
    // console.log("Error details api", error);
    return {
      status: 400,
      data: {},
      message: "Failed to fetch details"
    };
    // dispatch(COMMON_ACTIONS.stopLoading({}));
    // toggleToast({ ...toast, msg: "Failed to fetch details", status: !toast.status, type: "error" });
  }
  // const { }
  // try {
  //     //   const res = await API.graphql(graphqlOperation(UpdateAppointmentSalon, params));
  //     const res = await call(getClinicInfoById, params.formData);
  //     console.log("REsponse ", res);
  //     return {
  //         // data: res.data.updateAppointmentSalon ? res.data.updateAppointmentSalon : {},
  //         status: 200
  //     };
  // } catch (err) {
  //     console.error("ERROR", err);
  //     return {
  //         error: err,
  //         message: "Failed to update service",
  //         status: 400
  //     };
  // }
}

// export default clinicSaga;
