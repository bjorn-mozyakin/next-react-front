// Styles
// import styles from './Search.module.scss';

import React, { FC } from "react";

import Page from "../Page/Page";

type LayoutProps = {
  children?: React.ReactNode;
};

export const LayoutMobile: FC = ({ children }: LayoutProps) => {
  return (
    <>
      Mobile
      <Page type="service">{children}</Page>
    </>
  );
};

export default LayoutMobile;
