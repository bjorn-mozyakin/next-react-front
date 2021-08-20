import * as ACTIONS from "./restorepass.actions-consts";

import { StateFormRestorePass } from "../../../entities/State";

const initialState: StateFormRestorePass = {
  isVisible: false,
  isStep2Visible: false,
  isUsingReCaptcha: true,
  reCaptchaAction: "submit_reset_pass",
  isValid: true,
  isLoading: false,
  email: "",
  errorMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_STEP2_VISIBILITY:
      return {
        ...state,
        isStepVisible: !state.isStep2Visible,
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
    case ACTIONS.UPDATE_ERROR_MSG:
      debugger;
      return {
        ...state,
        errorMsg: action.msg,
      };

    default:
      return state;
  }
};
