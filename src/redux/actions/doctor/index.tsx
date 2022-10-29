import * as Types from "./types";

/**
 * @summary Doctor Actions
 */
export const getAllDoctors = (payload: object) => ({ type: Types.GET_ALL_DOCTORS, payload });

// export const getAllDoctors = (payload) => {
//     console.log("Payload @ actions", payload);
//     return { type: Types.GET_ALL_DOCTORS, payload: { key: "hhhhh" } };
// };
