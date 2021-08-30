import { State } from "../../entities/State";

import * as ACTIONS from "./common.actions-consts";

const initialState: State = {
  threads: [
    [
      {
        name: "Test1",
        content: "Test2",
      },
    ],
  ],
  banners: [],
  scrolledPageCount: 0,
  isSidebarVisible: false,
  isLoginFormVisible: false,
  isSearchFormVisible: false,
  reCaptcha: null,
  fingerprint: null,
  myRubrics: [],
  allRubrics: [],
};

const reducerCommon = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SEARCH_FORM_VISIBILITY:
      return {
        ...state,
        isSearchFormVisible: !state.isSearchFormVisible,
      };
    case ACTIONS.UPDATE_THREAD_LIST:
      return {
        ...state,
        threads: state.threads.concat(action.threads),
      };
    case ACTIONS.UPDATE_SCROLLED_PAGE_COUNT:
      return {
        ...state,
        scrolledPageCount: state.scrolledPageCount + 1,
      };
    case ACTIONS.UPDATE_BANNER_LIST:
      return {
        ...state,
        banners: state.banners.concat(action.banners),
      };
    case ACTIONS.UPDATE_RECAPTCHA:
      return {
        ...state,
        reCaptcha: action.reCaptcha,
      };
    case ACTIONS.UPDATE_FINGERPRINT:
      return {
        ...state,
        fingerprint: action.fingerprint,
      };
    case ACTIONS.UPDATE_MY_RUBRICS:
      return {
        ...state,
        myRubrics: action.myRubrics,
      };
    case ACTIONS.UPDATE_ALL_RUBRICS:
      return {
        ...state,
        allRubrics: action.allRubrics,
      };

    default:
      return state;
  }
};

export default reducerCommon;
