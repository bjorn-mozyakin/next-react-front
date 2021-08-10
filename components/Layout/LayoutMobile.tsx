// Styles
// import styles from './Search.module.scss';

import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export const LayoutMobile = ({ children }: LayoutProps) => {
  return (
    <>
      Mobile
      {children}
    </>
  );
};

export default LayoutMobile;
