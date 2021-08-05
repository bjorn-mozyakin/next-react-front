// Styles
// import styles from './Search.module.scss';

<<<<<<< Updated upstream
import Head from "next/head";
import React, { FC } from "react";
import { useSelector } from "react-redux";
=======
import React from "react";
>>>>>>> Stashed changes

import { State } from "../../entities/State";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Page from "../Page/Page";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

type LayoutProps = {
  children?: React.ReactNode;
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

  return (
    <>
      <Head>
        {/*<title>My page title</title>*/}
        {/*<meta name="viewport" content="initial-scale=1.0, width=device-width" />*/}
        <script>window._globalPublisherBanners = [];</script>
        {/*<script*/}
        {/*  async*/}
        {/*  src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"*/}
        {/*/>*/}
        {/*<script*/}
        {/*  async*/}
        {/*  src="https://i41-cdn.woman.ru/js/vendor/prebid.js?36-1607"*/}
        {/*/>*/}
        <script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <script src="https://i42-cdn.woman.ru/static/publisherGlobal/js/_publisherGlobal.js?36-1607" />
      </Head>
      <Page type="service">
        <Header />
        <Topbar />
        {children}
        <Footer />
        {isSidebarVisible && <Sidebar />}
      </Page>
    </>
  );
};

export default Layout;
