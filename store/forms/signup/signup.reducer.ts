import { StateFormSignUp } from "../../../entities/State";

import * as ACTIONS from "./signup.actions-consts";

const initialState: StateFormSignUp = {
  isVisible: false,
  isUsingReCaptcha: true,
  isValid: true,
  isLoading: false,
  username: "",
  email: "",
  subscribe: false,
  rules: false,
  errorMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SIGN_UP_FORM_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case ACTIONS.TOGGLE_SIGN_UP_FORM_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case ACTIONS.UPDATE_USERNAME_IN_FORM_SIGN_UP:
      return {
        ...state,
        username: action.username,
      };
    case ACTIONS.UPDATE_EMAIL_IN_FORM_SIGN_UP:
      return {
        ...state,
        email: action.email,
      };

    case ACTIONS.TOGGLE_SUBSCRIBE_IN_FORM_SIGN_UP:
      return {
        ...state,
        subscribe: !state.subscribe,
      };
    case ACTIONS.TOGGLE_RULES_IN_FORM_SIGN_UP:
      return {
        ...state,
        rules: !state.rules,
      };

    default:
      return state;
  }
};
