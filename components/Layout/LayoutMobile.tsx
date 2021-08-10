// Styles
// import styles from './Search.module.scss';

import React from "react";
import { useSelector } from "react-redux";

import { State } from "../../entities/State";
import SidebarMobile from "../Sidebar/SidebarMobile";
import TopbarMobile from "../Topbar/TopbarMobile";

type LayoutProps = {
  children?: React.ReactNode;
};

export const LayoutMobile = ({ children }: LayoutProps) => {
  const isSidebarVisible = useSelector(
    (state: State) => state.isSidebarVisible
  );

  const isSearchFormVisible = useSelector(
    (state: State) => state.isSearchFormVisible
  );

  return (
    <>
      Mobile
      <TopbarMobile />
      {children}
      {isSidebarVisible && <SidebarMobile />}
      {isSearchFormVisible && <div>Форма поиска на мобайле</div>}
    </>
  );
};

export default LayoutMobile;
