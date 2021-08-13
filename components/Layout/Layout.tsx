// Styles
// import styles from './Search.module.scss';

import React from "react";

import Head from "../Head/Head";
import Page from "../Page/Page";

import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

type Props = {
  children?: React.ReactNode;
  title?: string;
  needAdScripts?: boolean;
  needAdfoxScript?: boolean;
  deviceType?: string;
};

export const Layout = ({
  children,
  title,
  needAdScripts = true,
  needAdfoxScript = true,
  deviceType = "mobile",
}: Props) => {
  return (
    <>
      <Head
        title={title}
        needAdScripts={needAdScripts}
        needAdfoxScript={needAdfoxScript}
        isMobile={deviceType === "mobile"}
      />
      <Page type="service">
        {deviceType === "mobile" ? (
          <LayoutMobile>{children}</LayoutMobile>
        ) : (
          <LayoutDesktop>{children}</LayoutDesktop>
        )}
      </Page>
    </>
  );
};

export default Layout;
