// Styles
// import styles from "./Header.scss";

import React from "react";

import FormLoginDesktop from "./FormLoginDesktop";
import FormLoginMobile from "./FormLoginMobile";

export const Form = ({ type, isMobile }) => {
  switch (type) {
    case "login":
      return isMobile ? <FormLoginMobile /> : <FormLoginDesktop />;
    default:
      return "";
  }
};

export default Form;
