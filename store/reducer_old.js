import * as ACTIONS from './actions-consts';

const defaultState = {
  isSidebarVisible: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_SIDEBAR_VISIBILITY:
      return {
        ...state,
        isSidebarVisible: !state.isSidebarVisible
      };
    default:
      return state;
  }
};
