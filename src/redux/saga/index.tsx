import { all, fork } from "redux-saga/effects";
// import * as CommonSaga from "./Common"; // Common Saga Handler
import * as AuthSaga from "../saga/AuthSaga"; // Authentication Saga Handler
// import * as TechnicianSaga from "./Technician"; // Technician Saga Handler
// import * as ServiceSaga from "./Service"; // Technician Saga Handler
// import * as SalonSaga from "./Salon"; // Salon Saga Handler

// import * as BookinSaga from "./Booking"; // Booking Saga Handler

export function* rootSaga() {
  yield all([
    // fork(CommonSaga.GetCurrentLocation),
    // fork(CommonSaga.DeviceToken),
    fork(AuthSaga.RegisterUser)
    // fork(AuthSaga.RequireNewPassword),
    // fork(AuthSaga.RegisterUser),
    // fork(AuthSaga.GetModuleVersionsData),
    // fork(AuthSaga.ForgotPassword),
    // fork(AuthSaga.ResetPassword),
    // fork(AuthSaga.VerifyUser),
    // fork(AuthSaga.ResendCode),
    // fork(AuthSaga.DeviceToken),
    // fork(AuthSaga.SignOutUser),
    // fork(AuthSaga.PersistUserDetails),
    // fork(AuthSaga.GetUserData),
    // fork(AuthSaga.UpdateUserData),
    // fork(TechnicianSaga.FetchTechnicians),
    // fork(TechnicianSaga.UpdateTechnicianData),
    // fork(TechnicianSaga.AddTechnicianData),
    // fork(TechnicianSaga.DeleteTechnicianData),
    // fork(ServiceSaga.FetchServices),
    // // fork(ServiceSaga.AddServiceType),
    // fork(ServiceSaga.AddProcedure),
    // fork(ServiceSaga.AddServiceAddOn),
    // fork(ServiceSaga.UpdateAddOnStatus),
    // fork(ServiceSaga.RemoveServiceAddon),
    // fork(ServiceSaga.RemoveService),
    // fork(ServiceSaga.UpdateServiceTypeStatus),
    // fork(ServiceSaga.UpdateServiceStatus),
    // fork(SalonSaga.FetchSalonDetails),
    // fork(SalonSaga.ReserveAppointmentSch),
    // fork(SalonSaga.FetchAllClients),
    // fork(SalonSaga.FetchBookings),
    // fork(SalonSaga.UpdateSalonInfo),
    // fork(ServiceSaga.FindAllSalonServicesWithCatagory)
  ]);
}
