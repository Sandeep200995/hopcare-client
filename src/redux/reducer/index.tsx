import { combineReducers } from "redux";
import { AuthReducer } from "./authReducer";
// import { TechnicianReducer } from "./Technician";
// import { ServiceReducer } from "./Service";
// import { SalonReducer } from "./Salon";
// import { BookingReducer } from "./Booking";

const rootReducer = combineReducers({
  userData: AuthReducer
  //   technicianData: TechnicianReducer,
  //   serviceData: ServiceReducer,
  //   salonData: SalonReducer,
  //   bookingData: BookingReducer
});
export default rootReducer;
