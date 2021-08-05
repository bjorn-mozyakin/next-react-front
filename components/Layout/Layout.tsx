// Styles
// import styles from './Search.module.scss';

import Head from "next/head";
import React, { FC } from "react";

import Page from "../Page/Page";

import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

type LayoutProps = {
  children?: React.ReactNode;
  deviceType?: string;
};

export const Layout: FC = ({ children, deviceType }: LayoutProps) => {
  const layout = deviceType === "mobile" ? <LayoutMobile /> : <LayoutDesktop />;

  return (
    <>
      <Head>
        <script>window._globalPublisherBanners = [];</script>
        <script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <script src="https://i42-cdn.woman.ru/static/publisherGlobal/js/_publisherGlobal.js?36-1607" />
      </Head>
      <Page type="service">{layout}</Page>
    </>
  );
};

export default Layout;
