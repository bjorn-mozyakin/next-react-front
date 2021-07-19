// Styles
// import styles from './Title.module.scss';

import React from "react";

export const Title = ({ children }) => {
  return <h2 className="title text_widget-title">{children}</h2>;
};

export default Title;
