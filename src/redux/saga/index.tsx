import { all, fork } from "redux-saga/effects";
import * as AuthSaga from "./auth-saga"; // Authentication Saga Handler
import * as clinicSaga from "./clinicSaga";
import * as doctorSaga from "./doctorSaga";
export function* rootSaga() {
  yield all([
    fork(AuthSaga.AuthenticateUser),
    fork(AuthSaga.RegisterUser),
    fork(AuthSaga.ForgotPassword),
    fork(AuthSaga.ChangePassword),
    fork(clinicSaga.GetAllClinics),
    fork(doctorSaga.GetDashboardDoctorList)
  ]);
}
