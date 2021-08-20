// Styles
// import styles from './Search.module.scss';

import React from "react";
import { useSelector } from "react-redux";

import {
  StateSidebar,
  StateFormLogin,
  StateFormSignUp,
  StateFormRestorePass,
} from "../../entities/State";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import Sidebar from "../Sidebar/Sidebar";
import TopbarDesktop from "../Topbar/TopbarDesktop";
import FormLoginDesktop from "../Form/FormLogin/FormLoginDesktop";
import FormRestorePassDesktop from "../Form/FormRestorePass/FormRestorePassDesktop";
import FormSignUpDesktop from "../Form/FormSignUp/FormSighUpDesktop";

type LayoutProps = {
  children?: React.ReactNode;
};

export const LayoutDesktop = ({ children }: LayoutProps) => {
  const [
    isSidebarVisible,
    isLoginFormVisible,
    isSignUpFormVisible,
    isRestorePassFormVisible,
  ] = useSelector(
    (state: {
      sidebar: StateSidebar;
      formLogin: StateFormLogin;
      formSignUp: StateFormSignUp;
      formRestorePass: StateFormRestorePass;
    }) => [
      state.sidebar.isSidebarVisible,
      state.formLogin.isVisible,
      state.formSignUp.isVisible,
      state.formRestorePass.isVisible,
    ]
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
      {isSignUpFormVisible && (
        <Modal>
          <FormSignUpDesktop />
        </Modal>
      )}
      {isRestorePassFormVisible && (
        <Modal>
          <FormRestorePassDesktop />
        </Modal>
      )}
    </>
  );
};

export default LayoutDesktop;
