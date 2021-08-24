import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleSidebarVisibility } from "../../store/components/sidebar/sidebar.actions";

import { devideArrays } from "../../utils/helpers";

import { State } from "../../entities/State";
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

  const [myRubrics, allRubrics] = useSelector((state: { common: State }) => [
    state.common.myRubrics,
    state.common.allRubrics,
  ]);

  const myRubricsDivided = devideArrays({ initialArr: myRubrics, parts: 2 });
  const allRubricsDivided = devideArrays({ initialArr: allRubrics, parts: 2 });

  const btnAddThreadData = {
    styles: {
      color: "crimson-500",
      bg: "transparent",
      states: "crimson-100",
      icon: "edit-18-crimson",
    },
    onClick: () => {},
  };

  const actionbarData = [
    {
      icon: "script-18-crimson",
      href: "/pages/forum_rules/",
      text: "Правила форума",
    },
    {
      icon: "info-18-crimson",
      href: "/pages/forum_help/",
      text: "Помощь",
    },
    {
      icon: "mail-18-crimson",
      href: "mailto:admin@woman.ru",
      text: "Для связи: admin@woman.ru",
    },
  ];

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
          <SidebarMyRubrics myRubrics={myRubricsDivided} />
          <SidebarAllRubrics allRubrics={allRubricsDivided} />
          <SidebarActionbar actionbarData={actionbarData} />
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
