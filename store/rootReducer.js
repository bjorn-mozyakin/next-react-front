import { combineReducers } from "redux";

import common from "./common/common.reducer";
import sidebar from "./components/sidebar/sidebar.reducer";

import formLogin from "./forms/login/login.reducer";
import formRestorePass from "./forms/restorepass/restorepass.reducer";
import formSignUp from "./forms/signup/signup.reducer";

export const reducer = combineReducers({
  common,
  sidebar,
  formLogin,
  formRestorePass,
  formSignUp,
});
