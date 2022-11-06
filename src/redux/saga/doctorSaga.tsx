import { call, put, takeLatest } from "redux-saga/effects";
import { API_URLS } from "../../config/apiUrls";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as DOCTOR_ACION_TYPES from "../actions/doctor/types";

type WhatYouYield = any;
type WhatYouReturn = any;
type WhatYouAccept = any;

export function* getDashboardDoctorList(action: any): Generator<WhatYouYield, WhatYouReturn, WhatYouAccept> {
  // console.log("getDashboardDoctorList SAGA INVOKED ::::", action);
  try {
    const { formData } = action.payload;
    // console.log("formData", formData);
    const response: any = yield networkCall(formData, API_ENDPOINTS.API_URLS.getDashboardDoctorList, "POST");
    // console.log("Response Doctor list ", response);
    const { data }: any = response.data || {};

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
  yield takeLatest(DOCTOR_ACION_TYPES.GET_ALL_DOCTORS, getDashboardDoctorList);
}
