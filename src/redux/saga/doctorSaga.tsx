import { call, put, takeLatest } from "redux-saga/effects";
import { API_URLS } from "../../config/apiUrls";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as DOCTOR_ACION_TYPES from "../actions/doctor/types";
import * as CONSTANTS from '../../constants/dummy';

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
    let _data = JSON.parse(JSON.stringify(data));
    if (_data) {
      for (let i = 0; i < data.list.length; i++) {
        const drData = data.list[i];
        let isImgThere = CONSTANTS.DEFAULT_DUMMY_DATA.DOCTOR_IMGS.findIndex((drDa: any) => drDa._id === drData._id);
        if (isImgThere !== -1) {
          _data.list[i].profilePic = CONSTANTS.DEFAULT_DUMMY_DATA.DOCTOR_IMGS[isImgThere].profilePic;
        }
      }
      yield put({ type: DOCTOR_ACION_TYPES.GET_ALL_DOCTORS_SUCCESS, payload: _data, message: "Successfully fetched" });
    } else {
      yield put({ type: DOCTOR_ACION_TYPES.GET_ALL_DOCTORS_FAILURE, payload: {}, message: "Unable to fetch data " });
    }
  } catch (error: any) {
    const message: any = error?.error;
    // showErrorToast(message);
    yield put({ type: DOCTOR_ACION_TYPES.GET_ALL_DOCTORS_FAILURE, payload: { error: message }, message: "Unable to fetch data " });
  }
}

export function* GetDashboardDoctorList() {
  yield takeLatest(DOCTOR_ACION_TYPES.GET_ALL_DOCTORS, getDashboardDoctorList);
}


export async function getDoctorDetailsById(params: any) {
  // console.log("Params1 ", params);
  try {
    const response: any = await networkCall({}, `${API_URLS.getDocInfoById}/${params.formData.doctorId}`, "GET");
    // console.log("Response ", response);
    if (response && response.status && response.status === 200 && response.data && response.data.data) {
      let _data = response.data ? response.data : {};
      let isImgThere = CONSTANTS.DEFAULT_DUMMY_DATA.DOCTOR_IMGS.findIndex((clD: any) => clD._id === _data.data.userId);
      if (isImgThere !== -1) {
        _data.data.profilePic = CONSTANTS.DEFAULT_DUMMY_DATA.DOCTOR_IMGS[isImgThere].profilePic;
      }
      return { status: response.status, data: _data, message: "Successfully fetched" };
    } else {
      return { status: response.status, data: response.data ? response.data : {}, message: "Failed to retrive data" };
    }
  } catch (error) {
    console.error("error", error);
    return { status: 400, data: error, message: "Failed to fetch details" };
  }
}
