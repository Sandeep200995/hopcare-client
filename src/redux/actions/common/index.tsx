import * as Types from "./types";

/**
 * @summary Authetication Actions
 */
export const startLoading = (payload: object) => ({ type: Types.START_LOADING, payload });
export const stopLoading = (payload: object) => ({ type: Types.STOP_LOADING, payload });
