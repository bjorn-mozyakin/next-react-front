// Styles
// import styles from './Title.module.scss';

import React from "react";

type TitleProps = {
  children?: React.ReactNode;
};

export const Title = ({ children }: TitleProps) => {
  return <h2 className="title text_widget-title">{children}</h2>;
};

export default Title;
