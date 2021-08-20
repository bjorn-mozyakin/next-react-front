import axiosInstance from "../../../utils/axios";
import Fingerprint from "../../../utils/Fingerprint";
import { ReCaptcha } from "../../../utils/ReCaptcha";

import * as ACTIONS from "./restorepass.actions-consts";

export const toggleFormVisibility = () => ({
  type: ACTIONS.TOGGLE_FORM_VISIBILITY,
});

export const toggleFormStep1Visibility = () => ({
  type: ACTIONS.TOGGLE_FORM_STEP1_VISIBILITY,
});

export const toggleFormStep2Visibility = () => ({
  type: ACTIONS.TOGGLE_FORM_STEP2_VISIBILITY,
});

export const toggleRestorePasswordFormLoading = () => ({
  type: ACTIONS.TOGGLE_FORM_LOADING,
});

export const updateEmailInFormRestorePassword = (email) => ({
  type: ACTIONS.UPDATE_EMAIL,
  email,
});

export const changeEmail = (email) => {
  return async (dispatch, getState) => {
    if (getState().formRestorePass.errorMsg) {
      dispatch(updateErrorMsg(null));
    }
    dispatch(updateEmailInFormRestorePassword(email));
  };
};

export const restorePass = () => {
  return async (dispatch, getState) => {
    dispatch(toggleRestorePasswordFormLoading());

    const reCaptcha = await ReCaptcha.getToken(getState().reCaptchaAction);
    await Fingerprint.get();

    const restorePassData = {
      email: getState().formRestorePass.email,
      // reCaptchaToken: reCaptcha,
    };

    try {
      const response = await axiosInstance.post(
        `https://forum.inglorium.com/api/auth/forget-password`,
        JSON.stringify(restorePassData)
      );
      dispatch(toggleFormStep1Visibility());
      dispatch(toggleFormStep2Visibility());
    } catch (err) {
      const msg = err?.detail || err?.title || err + "" || "Произошла ошибка";
      dispatch(updateErrorMsg(msg));
    } finally {
      dispatch(toggleRestorePasswordFormLoading());
    }
  };
};

export const updateErrorMsg = (msg) => ({
  type: ACTIONS.UPDATE_ERROR_MSG,
  msg,
});
