// Styles
// import styles from './Search.module.scss';

import React from "react";
import { useSelector } from "react-redux";

import { State, StateSidebar } from "../../entities/State";
import FooterMobile from "../Footer/FooterMobile";
import SidebarMobile from "../Sidebar/SidebarMobile";
import TopbarMobile from "../Topbar/TopbarMobile";

type LayoutProps = {
  children?: React.ReactNode;
};

export const LayoutMobile = ({ children }: LayoutProps) => {
  const isSidebarVisible = useSelector(
    (state: { sidebar: StateSidebar }) => state.sidebar.isSidebarVisible
  );

  const isSearchFormVisible = useSelector(
    (state: { common: State }) => state.common.isSearchFormVisible
  );

  return (
    <>
      Mobile
      <TopbarMobile />
      {children}
      <FooterMobile />
      {isSidebarVisible && <SidebarMobile />}
      {isSearchFormVisible && <div>Форма поиска на мобайле</div>}
    </>
  );
};

export default LayoutMobile;
