import axiosInstance from "../../../utils/axios";
import Fingerprint from "../../../utils/Fingerprint";
import { ReCaptcha } from "../../../utils/ReCaptcha";

import * as ACTIONS from "./login.actions-consts";

export const toggleLoginFormVisibility = () => ({
  type: ACTIONS.TOGGLE_LOGIN_FORM_VISIBILITY,
});

export const toggleLoginFormLoading = () => ({
  type: ACTIONS.TOGGLE_LOGIN_FORM_LOADING,
});

export const updateEmailInFormLogin = (email) => ({
  type: ACTIONS.UPDATE_EMAIL_IN_FORM_LOGIN,
  email,
});

export const updatePasswordInFormLogin = (password) => ({
  type: ACTIONS.UPDATE_PASSWORD_IN_FORM_LOGIN,
  password,
});

export const login = () => {
  return async (dispatch, getState) => {
    dispatch(toggleLoginFormLoading());

    const reCaptcha = await ReCaptcha.getToken(getState().reCaptchaAction);
    await Fingerprint.get();

    const authData = {
      email: getState().formLogin.email,
      password: getState().formLogin.password,
      reCaptchaToken: reCaptcha,
    };

    try {
      const response = await axiosInstance.post(
        `https://forum.inglorium.com/api/auth/login`,
        JSON.stringify(authData)
      );
      const { data } = response;
    } catch (err) {
    } finally {
      dispatch(toggleLoginFormLoading());
    }
  };
};
