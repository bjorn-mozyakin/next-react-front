import React from "react";
import { useDispatch } from "react-redux";

import { toggleSidebarVisibility } from "../../store/components/sidebar/sidebar.actions";

import BtnFlat from "../BtnFlat/BtnFlat";
import BtnRound from "../BtnRound/BtnRound";
import User from "../User/User";

import SidebarActionbar from "./SidebarActionbar";
import SidebarAllRubrics from "./SidebarAllRubrics";
import SidebarMyRubrics from "./SidebarMyRubrics";

export const SidebarDesktop = () => {
  const dispatch = useDispatch();

  const btnCloseData = {
    styles: {
      bg: "transparent",
      states: "crimson-100",
      icon: "close-18-crimson",
    },
    onClick: () => dispatch(toggleSidebarVisibility()),
  };

  const btnAddThreadData = {
    styles: {
      color: "crimson-500",
      bg: "transparent",
      states: "crimson-100",
      icon: "edit-18-crimson",
    },
    onClick: () => {},
  };

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__topbar">
          <BtnRound {...btnCloseData} />
        </div>
        <div className="sidebar__content">
          <div className="sidebar__maindata">
            <div className="sidebar__user">
              <User />
            </div>
            <BtnFlat {...btnAddThreadData}>Добавить новую тему</BtnFlat>
          </div>
          <SidebarMyRubrics />
          <SidebarAllRubrics />
          <SidebarActionbar />
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
