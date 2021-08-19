import axiosInstance from "../../../utils/axios";
import Fingerprint from "../../../utils/Fingerprint";
import { ReCaptcha } from "../../../utils/ReCaptcha";

import * as ACTIONS from "./signup.actions-consts";

export const toggleSignUpFormVisibility = () => ({
  type: ACTIONS.TOGGLE_SIGN_UP_FORM_VISIBILITY,
});

export const toggleSignUpFormLoading = () => ({
  type: ACTIONS.TOGGLE_SIGN_UP_FORM_LOADING,
});

export const updateUsernameInFormSignUp = (username) => ({
  type: ACTIONS.UPDATE_USERNAME_IN_FORM_SIGN_UP,
  username,
});

export const updateEmailInFormSignUp = (email) => ({
  type: ACTIONS.UPDATE_EMAIL_IN_FORM_SIGN_UP,
  email,
});

export const toggleSubscribeInFormSignUp = (subscribe) => ({
  type: ACTIONS.TOGGLE_SUBSCRIBE_IN_FORM_SIGN_UP,
  subscribe,
});

export const toggleRulesInFormSignUp = (rules) => ({
  type: ACTIONS.TOGGLE_RULES_IN_FORM_SIGN_UP,
  rules,
});

export const signup = () => {
  return async (dispatch, getState) => {
    dispatch(toggleSignUpFormLoading());

    const reCaptcha = await ReCaptcha.getToken("submit_login");
    const fingerprint = await Fingerprint.get();
    // dispatch(updateReCaptcha(reCaptchaToken));
    // dispatch(updateFingerprint(fingerprint));

    const signUpData = {
      email: getState().formSignUp.email,
      username: getState().formSignUp.username,
      subscribe: getState().formSignUp.subscribe,
      rules: getState().formSignUp.rules,
      reCaptchaToken: reCaptcha,
      // fingerprint: fingerprint,
    };

    try {
      const response = await axiosInstance.post(
        `https://forum.inglorium.com/api/auth/signup`,
        JSON.stringify(signUpData)
      );
      const { data } = response;
    } catch (err) {
    } finally {
      dispatch(toggleSignUpFormLoading());
    }
  };
};
