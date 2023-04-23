import { call, put, takeLatest } from "redux-saga/effects";
// import * as AuthTypes from "../actions/auth/types";
import { GET_ALL_CLINICS, GET_ALL_CLINICS_SUCCESS, GET_ALL_CLINICS_FAILURE } from "../actions/clinic/types";
// import { getAllClinicList, getClinicInfoById } from "../../services/clinicService";
// import { API_URLS } from "../../config";
import { API_URLS } from "../../config/apiUrls";
import networkCall from "../../config/apiRequest";
import * as API_ENDPOINTS from "../../config/apiUrls";
import * as CONSTANTS from '../../constants/dummy';
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
    // console.log("Response Clinic list ", response);
    const { data }: any = response.data || {};
    let _data = JSON.parse(JSON.stringify(data));
    if (_data) {
      for (let i = 0; i < data.list.length; i++) {
        const clData = data.list[i];
        // console.log("clData", clData);
        let isImgThere = CONSTANTS.DEFAULT_DUMMY_DATA.CLINIC_IMGS.findIndex((clD: any) => clD.name === clData.name);
        if (isImgThere !== -1) {
          _data.list[i].profilePic = CONSTANTS.DEFAULT_DUMMY_DATA.CLINIC_IMGS[isImgThere].profilePic;
          _data.list[i].logo = CONSTANTS.DEFAULT_DUMMY_DATA.CLINIC_IMGS[isImgThere].logo;
        }
      }
      yield put({ type: GET_ALL_CLINICS_SUCCESS, payload: _data, message: "Successfully fetched" });
    } else {
      yield put({ type: GET_ALL_CLINICS_FAILURE, payload: {}, message: "Unable to fetch data " });
    }
  } catch (error: any) {
    const message: any = error?.error;
    // showErrorToast(message);
    yield put({ type: GET_ALL_CLINICS_FAILURE, payload: { error: message }, message: "Unable to fetch data " });
  }
}

export function* GetAllClinics() {
  yield takeLatest(GET_ALL_CLINICS, getAllClinics);
}

export async function getClinicDetailsById(params: any) {
  // console.log("Params ", params);
  try {
    const response: any = await networkCall({}, `${API_URLS.getClinicInfoById}/${params.formData.clinicId}`, "GET");
    console.log("Response ", response);
    if (response && response.status && response.status === 200 && response.data) {
    let _data = response.data ? response.data : {};
    // debugger
    let isImgThere = CONSTANTS.DEFAULT_DUMMY_DATA.CLINIC_IMGS.findIndex((clD: any) => clD._id === _data.data._id);
    if (isImgThere !== -1) {
      _data.data.profilePic = CONSTANTS.DEFAULT_DUMMY_DATA.CLINIC_IMGS[isImgThere].profilePic;
      _data.data.logo = CONSTANTS.DEFAULT_DUMMY_DATA.CLINIC_IMGS[isImgThere].logo;
    }
      return {
        status: response.status,
        data: _data,
        message: "Successfully fetched"
      };
    } else {
      return {
        status: response.status,
        data: response.data ? response.data : {},
        message: "Failed to retrive data"
      };
    }

  } catch (error) {
    return {
      status: 400,
      data: error,
      message: "Failed to fetch details"
    };
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


export async function createAppointment(params: any) {
  // console.log("Params ", params);
  try {
    const response: any = await networkCall(params.formData, `${API_URLS.reserveAppointment}`, "POST");
    // console.log("Response @ SAga ", response);
    if (response && response.status && response.status === 200 && response.data) {
    let _data = response.data ? response.data : {};
      return {
        status: response.status,
        data: _data,
        message: "Successfully fetched"
      };
    } else {
      return {
        status: response.status,
        data: response.data ? response.data : {},
        message: "Failed to retrieve data"
      };
    }

  } catch (error) {
    return {
      status: 400,
      data: error,
      message: "Failed to fetch details"
    };
  }

}


