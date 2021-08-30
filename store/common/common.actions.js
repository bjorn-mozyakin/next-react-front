import axiosInstance from "../../utils/axios";

import * as ACTIONS from "./common.actions-consts";

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

export const updateReCaptcha = async (reCaptcha) => ({
  type: ACTIONS.UPDATE_RECAPTCHA,
  reCaptcha,
});

export const updateFingerprint = (fingerprint) => ({
  type: ACTIONS.UPDATE_FINGERPRINT,
  fingerprint,
});

export const updateMyRubrics = (myRubrics) => ({
  type: ACTIONS.UPDATE_MY_RUBRICS,
  myRubrics,
});

export const updateAllRubrics = (allRubrics) => ({
  type: ACTIONS.UPDATE_ALL_RUBRICS,
  allRubrics,
});

export const getMyRubrics = () => {
  return async (dispatch, getState) => {
    if (getState().common.myRubrics.length) return;
    const myRubrics = [
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
    ];
    dispatch(updateMyRubrics(myRubrics));
  };
};

export const getAllRubrics = () => {
  return async (dispatch, getState) => {
    if (getState().common.allRubrics.length) return;
    const allRubrics = [
      {
        href: "/relations/forum/",
        text: "Отношения",
        subSections: [
          {
            href: "/relations/men/forum/",
            text: "Мы и мужчины",
          },
          {
            href: "/relations/men/forum/",
            text: "Секс",
          },
          {
            href: "/relations/men/forum/",
            text: "Свадьба",
          },
          {
            href: "/relations/men/forum/",
            text: "Брак",
          },
          {
            href: "/relations/men/forum/",
            text: "Обо всем",
          },
        ],
      },
      {
        href: "/relations/forum/",
        text: "Отношения",
        subSections: [
          {
            href: "/relations/men/forum/",
            text: "Мы и мужчины",
          },
          {
            href: "/relations/men/forum/",
            text: "Секс",
          },
          {
            href: "/relations/men/forum/",
            text: "Свадьба",
          },
          {
            href: "/relations/men/forum/",
            text: "Брак",
          },
          {
            href: "/relations/men/forum/",
            text: "Обо всем",
          },
        ],
      },
      {
        href: "/relations/forum/",
        text: "Отношения",
        subSections: [
          {
            href: "/relations/men/forum/",
            text: "Мы и мужчины",
          },
          {
            href: "/relations/men/forum/",
            text: "Секс",
          },
          {
            href: "/relations/men/forum/",
            text: "Свадьба",
          },
          {
            href: "/relations/men/forum/",
            text: "Брак",
          },
          {
            href: "/relations/men/forum/",
            text: "Обо всем",
          },
        ],
      },
    ];
    dispatch(updateAllRubrics(allRubrics));
  };
};

export const getThreadList = () => {
  return async (dispatch, getState) => {
    const response = await axiosInstance.get(
      `https://forum.inglorium.com/api/threads?page=${
        2 + getState().common.scrolledPageCount
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
    try {
      const response = await axiosInstance.get(
        "http://localhost:3000/api/banners/",
        { withCredentials: true }
      );
      const { data } = response;
      // const banners = JSON.parse(data);
      const banners = data;
      dispatch(updateBannerList(banners));
    } catch (err) {
      console.error(err);
    }
  };
};

export const updateScrolledPageCount = () => ({
  type: ACTIONS.UPDATE_SCROLLED_PAGE_COUNT,
});
