// Styles
// import styles from './Search.module.scss';

import React from "react";
import { useSelector } from "react-redux";

import { State } from "../../entities/State";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

type LayoutProps = {
  children?: React.ReactNode;
};

export const LayoutDesktop = ({ children }: LayoutProps) => {
  const isSidebarVisible = useSelector(
    (state: State) => state.isSidebarVisible
  );

  return (
    <>
      Desktop
      <Header />
      <Topbar />
      {children}
      <Footer />
      {isSidebarVisible && <Sidebar />}
    </>
  );
};

export default LayoutDesktop;
