// Styles
// import styles from './Search.module.scss';

<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Head from "next/head";
=======
>>>>>>> Stashed changes
import React, { FC } from "react";
<<<<<<< Updated upstream
import { useSelector } from "react-redux";
=======
import React from "react";
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

import Head from "../Head/Head";
import Page from "../Page/Page";

import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

type LayoutProps = {
  children?: React.ReactNode;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
};

export const Layout: FC = ({ children }: LayoutProps) => {
  const isSidebarVisible = useSelector(
    (state: State) => state.isSidebarVisible
  );
=======
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
}: LayoutProps) => {
  const layout =
    deviceType === "mobile" ? (
      <LayoutMobile>{children}</LayoutMobile>
    ) : (
      <LayoutDesktop>{children}</LayoutDesktop>
    );
>>>>>>> Stashed changes
=======
  deviceType?: string;
};

export const Layout: FC = ({ children, deviceType }: LayoutProps) => {
  const layout = deviceType === "mobile" ? <LayoutMobile /> : <LayoutDesktop />;
>>>>>>> Stashed changes
=======
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
>>>>>>> Stashed changes

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
