import * as ACTIONS from "./restorepass.actions-consts";

import { StateFormRestorePass } from "../../../entities/State";

const initialState: StateFormRestorePass = {
  isVisible: false,
  isUsingReCaptcha: true,
  isValid: true,
  isLoading: false,
  email: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ACTIONS.UPDATE_EMAIL_IN_FORM_RESTORE_PASSWORD:
      return {
        ...state,
        email: action.email,
      };

    default:
      return state;
  }
};
