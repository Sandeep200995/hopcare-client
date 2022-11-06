import { START_LOADING, STOP_LOADING } from "../actions/common/types";
interface Action {
  type: String;
  payload: any;
  loadingTxt: String;
  loading: Boolean;
  message: String;
}

export const loadingReducer = (state = false, action: Action) => {
  // console.log("ACTIon", action);
  switch (action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return state;
  }
};
