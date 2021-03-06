import { StateFormLogin } from "../../../entities/State";

import * as ACTIONS from "./login.actions-consts";

const initialState: StateFormLogin = {
  isVisible: false,
  isUsingReCaptcha: true,
  reCaptchaAction: "submit_login",
  isValid: true,
  isLoading: false,
  email: "",
  password: "",
  errorMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LOGIN_FORM_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case ACTIONS.TOGGLE_LOGIN_FORM_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ACTIONS.UPDATE_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case ACTIONS.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password,
      };

    default:
      return state;
  }
};
