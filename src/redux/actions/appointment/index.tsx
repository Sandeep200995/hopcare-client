import * as Types from "./types";

/**
 * @summary Appointment Actions
 */
export const getAllAppointmentsAction = (payload: object) => ({ type: Types.GET_ALL_APPOINTMENTS, payload });

export const getAllClinicAppointmentsAction = (payload: object) => ({ type: Types.GET_ALL_APPOINTMENTS_BY_CLINIC, payload });


// export const getAllDoctors = (payload) => {
//     console.log("Payload @ actions", payload);
//     return { type: Types.GET_ALL_DOCTORS, payload: { key: "hhhhh" } };
// };
