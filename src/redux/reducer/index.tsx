import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
import { ClinicReducer } from "./clinicReducer";
import { DoctorReducer } from "./doctorReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
  userData: AuthReducer,
  glLoader: loadingReducer,
  clinicData: ClinicReducer,
  doctorData: DoctorReducer
});
export default rootReducer;
