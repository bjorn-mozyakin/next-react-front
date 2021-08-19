import { StateSidebar } from "../../../entities/State";

import * as ACTIONS from "./sidebar.actions-consts";

const initialState: StateSidebar = {
  isSidebarVisible: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SIDEBAR_VISIBILITY:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible,
      };

    default:
      return state;
  }
};
