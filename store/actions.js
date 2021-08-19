import axiosInstance from "../utils/axios";
import Fingerprint from "../utils/Fingerprint";
import { convertObjectToFormData } from "../utils/helpers";
import { ReCaptcha } from "../utils/ReCaptcha";

import * as ACTIONS from "./actions-consts";

export const toggleSidebarVisibility = () => ({
  type: ACTIONS.TOGGLE_SIDEBAR_VISIBILITY,
});

export const toggleSearchFormVisibility = () => ({
  type: ACTIONS.TOGGLE_SEARCH_FORM_VISIBILITY,
});

export const toggleLoginFormVisibility = () => ({
  type: ACTIONS.TOGGLE_LOGIN_FORM_VISIBILITY,
});

export const toggleRestorePasswordFormVisibility = () => ({
  type: ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_VISIBILITY,
});

export const toggleSignUpFormVisibility = () => ({
  type: ACTIONS.TOGGLE_SIGN_UP_FORM_VISIBILITY,
});

export const toggleLoginFormLoading = () => ({
  type: ACTIONS.TOGGLE_LOGIN_FORM_LOADING,
});

export const toggleRestorePasswordFormLoading = () => ({
  type: ACTIONS.TOGGLE_RESTORE_PASSWORD_FORM_LOADING,
});

export const toggleSignUpFormLoading = () => ({
  type: ACTIONS.TOGGLE_SIGN_UP_FORM_LOADING,
});

export const updateThreadList = (threads) => ({
  type: ACTIONS.UPDATE_THREAD_LIST,
  threads,
});

export const updateBannerList = (banners) => ({
  type: ACTIONS.UPDATE_BANNER_LIST,
  banners,
});

export const updateReCaptcha = async (reCaptcha) => ({
  type: ACTIONS.UPDATE_RECAPTCHA,
  reCaptcha,
});

export const updateFingerprint = (fingerprint) => ({
  type: ACTIONS.UPDATE_FINGERPRINT,
  fingerprint,
});

export const updateUsernameInFormLogin = (username) => ({
  type: ACTIONS.UPDATE_USERNAME_IN_FORM_LOGIN,
  username,
});

export const updatePasswordInFormLogin = (password) => ({
  type: ACTIONS.UPDATE_PASSWORD_IN_FORM_LOGIN,
  password,
});

export const getThreadList = () => {
  return async (dispatch, getState) => {
    const response = await axiosInstance.get(
      `https://forum.inglorium.com/api/threads?page=${
        2 + getState().scrolledPageCount
      }`
    );
    const { data } = response;

    const getNewThreadsList = (threads) => {
      const arr = [];
      const size = 30;
      while (threads.length > 0) arr.push(threads.splice(0, size));
      return arr;
    };

    const threads = getNewThreadsList(data["hydra:member"]);
    console.log(data);
    try {
      dispatch(updateThreadList(threads));
      dispatch(updateScrolledPageCount());
    } catch (e) {
      console.error(e);
    }
  };
};

export const auth = () => {
  return async (dispatch, getState) => {
    dispatch(toggleLoginFormLoading());

    const reCaptcha = await ReCaptcha.getToken("submit_login");
    const fingerprint = await Fingerprint.get();
    // dispatch(updateReCaptcha(reCaptchaToken));
    // dispatch(updateFingerprint(fingerprint));
    debugger;
    // const fl = getState.formLogin;
    // const fl = getState.formLogin;
    const authData = {
      email: getState().formLogin.username,
      password: getState().formLogin.password,
      // reCaptchaToken: reCaptcha,
      // fingerprint: fingerprint,
    };
    try {
      const response = await axiosInstance.post(
        `https://forum.inglorium.com/api/auth/login`,
        JSON.stringify(authData)
      );
      debugger;
      const { data } = response;
    } catch (err) {
      debugger;
    } finally {
      dispatch(toggleLoginFormLoading());
    }
  };
};

export const signup = () => {
  return async (dispatch) => {
    dispatch(toggleSignUpFormLoading());
    setTimeout(() => {
      dispatch(toggleSignUpFormLoading());
    }, 3000);
  };
};

export const restorePass = () => {
  return async (dispatch) => {
    dispatch(toggleRestorePasswordFormLoading());
    setTimeout(() => {
      dispatch(toggleRestorePasswordFormLoading());
    }, 3000);
  };
};

export const getBannerList = () => {
  return async (dispatch) => {
    const response = await axiosInstance.get(
      "http://localhost:3000/api/banners/",
      // "threads?page=1&order[publishedAt]=desc",
      { withCredentials: true }
    );
    const { data } = response;
    // const banners = JSON.parse(data);
    const banners = data;
    console.log("crabus", banners);
    try {
      dispatch(updateBannerList(banners));
    } catch (e) {
      console.error(e);
    }
  };
};

export const updateScrolledPageCount = () => ({
  type: ACTIONS.UPDATE_SCROLLED_PAGE_COUNT,
});
