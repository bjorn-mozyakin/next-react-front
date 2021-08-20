import axiosInstance from "../../../utils/axios";
import Fingerprint from "../../../utils/Fingerprint";
import { ReCaptcha } from "../../../utils/ReCaptcha";

import * as ACTIONS from "./restorepass.actions-consts";

export const toggleRestorePasswordFormVisibility = () => ({
  type: ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_VISIBILITY,
});

export const toggleRestorePasswordFormStep2Visibility = () => ({
  type: ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_STEP2_VISIBILITY,
});

export const toggleRestorePasswordFormLoading = () => ({
  type: ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_LOADING,
});

export const updateEmailInFormRestorePassword = (email) => ({
  type: ACTIONS.UPDATE_EMAIL_IN_FORM_RESTORE_PASSWORD,
  email,
});

export const restorePass = () => {
  return async (dispatch, getState) => {
    dispatch(toggleRestorePasswordFormLoading());

    const reCaptcha = await ReCaptcha.getToken(getState().reCaptchaAction);
    await Fingerprint.get();

    const restorePassData = {
      email: getState().formRestorePass.email,
      reCaptchaToken: reCaptcha,
    };

    try {
      const response = await axiosInstance.post(
        `https://forum.inglorium.com/api/auth/forget-password`,
        JSON.stringify(restorePassData)
      );
      dispatch(toggleRestorePasswordFormStep2Visibility());
    } catch (err) {
      console.log("crab", err);
      const msg = (err && err.detail) || err.title || "Произошла ошибка";
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
