// Styles
// import styles from './Search.module.scss';

import React from "react";
import { useSelector } from "react-redux";

import { State } from "../../entities/State";
import Footer from "../Footer/Footer";
import FormLoginDesktop from "../Form/FormLoginDesktop";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import Sidebar from "../Sidebar/Sidebar";
import TopbarDesktop from "../Topbar/TopbarDesktop";

type LayoutProps = {
  children?: React.ReactNode;
};

export const LayoutDesktop = ({ children }: LayoutProps) => {
  const isSidebarVisible = useSelector(
    (state: State) => state.isSidebarVisible
  );

  const isLoginFormVisible = useSelector(
    (state: State) => state.formLogin.isVisible
  );

  return (
    <>
      Desktop
      <Header />
      <TopbarDesktop />
      {children}
      <Footer />
      {isSidebarVisible && <Sidebar />}
      {isLoginFormVisible && (
        <Modal>
          <FormLoginDesktop />
        </Modal>
      )}
    </>
  );
};

export default LayoutDesktop;
