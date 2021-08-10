import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";

import { State } from "../entities/State";

import * as ACTIONS from "./actions-consts";

// import { composeWithDevTools } from 'redux-devtools-extension'

let store;

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
  isSearchFormVisible: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SIDEBAR_VISIBILITY:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible,
      };
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
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState
    // composeWithDevTools(applyMiddleware())
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
