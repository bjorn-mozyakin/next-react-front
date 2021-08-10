import axiosInstance from "../utils/axios";

import * as ACTIONS from "./actions-consts";

export const toggleSidebarVisibility = () => ({
  type: ACTIONS.TOGGLE_SIDEBAR_VISIBILITY,
});

export const toggleSearchFormVisibility = () => ({
  type: ACTIONS.TOGGLE_SEARCH_FORM_VISIBILITY,
});

export const updateThreadList = (threads) => ({
  type: ACTIONS.UPDATE_THREAD_LIST,
  threads,
});

export const updateBannerList = (banners) => ({
  type: ACTIONS.UPDATE_BANNER_LIST,
  banners,
});

export const getThreadList = (scrolledPageCount) => {
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
