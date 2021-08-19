import axiosInstance from "../../../utils/axios";
import Fingerprint from "../../../utils/Fingerprint";
import { ReCaptcha } from "../../../utils/ReCaptcha";

import * as ACTIONS from "./restorepass.actions-consts";

export const toggleRestorePasswordFormVisibility = () => ({
  type: ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_VISIBILITY,
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

    const reCaptcha = await ReCaptcha.getToken("submit_login");
    const fingerprint = await Fingerprint.get();
    // dispatch(updateReCaptcha(reCaptchaToken));
    // dispatch(updateFingerprint(fingerprint));

    const restorePassData = {
      email: getState().formRestorePass.email,
      reCaptchaToken: reCaptcha,
      // fingerprint: fingerprint,
    };

    try {
      const response = await axiosInstance.post(
        `https://forum.inglorium.com/api/auth/forgot-password`,
        JSON.stringify(restorePassData)
      );
      const { data } = response;
    } catch (err) {
    } finally {
      dispatch(toggleRestorePasswordFormLoading());
    }
  };
};
