// Styles
// import styles from './Search.module.scss';

import React, { FC } from "react";

import Head from "../Head/Head";
import Page from "../Page/Page";

import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
  needAdScripts?: boolean;
  deviceType?: string;
};

export const Layout: FC = ({
  children,
  title,
  needAdScripts = true,
  deviceType = "mobile",
}: LayoutProps) => {
  const layout =
    deviceType === "mobile" ? (
      <LayoutMobile>{children}</LayoutMobile>
    ) : (
      <LayoutDesktop>{children}</LayoutDesktop>
    );

  return (
    <>
      <Head
        title={title}
        needAdScripts={needAdScripts}
        needAdfoxScript={needAdfoxScript}
      />
      <Page type="service">{layout}</Page>
    </>
  );
};

export default Layout;
