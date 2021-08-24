import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleSidebarVisibility } from "../../store/components/sidebar/sidebar.actions";

import { devideArrays, goTo } from "../../utils/helpers";

import { State } from "../../entities/State";
import BtnFlat from "../BtnFlat/BtnFlat";
import BtnRound from "../BtnRound/BtnRound";
import User from "../User/User";

import SidebarActionbar from "./SidebarActionbar";
import SidebarAllRubrics from "./SidebarAllRubrics";
import SidebarMenu from "./SidebarMenu";
import SidebarMyRubrics from "./SidebarMyRubrics";
import { BtnFlatType, BtnRoundType } from "../../entities/Btn";

export const SidebarMobile = () => {
  const dispatch = useDispatch();
  const [myRubrics, allRubrics] = useSelector((state: { common: State }) => [
    state.common.myRubrics,
    state.common.allRubrics,
  ]);

  const myRubricsDivided = devideArrays({ initialArr: myRubrics });
  const allRubricsDivided = devideArrays({ initialArr: allRubrics });

  const btnCloseData: BtnRoundType = {
    styles: {
      bg: "transparent",
      states: "crimson-100",
      icon: "close-18-crimson",
    },
    onClick: () => dispatch(toggleSidebarVisibility()),
  };

  const btnAddThreadData: BtnFlatType = {
    styles: {
      color: "crimson-500",
      bg: "transparent",
      states: "crimson-100",
      icon: "edit-18-crimson",
    },
    onClick: () => {},
  };

  // todo Полная версия - какая ссылка и ссылка ли вообще
  const actionbarData = [
    {
      icon: "script-18-bahamas",
      href: "/pages/forum_rules/",
      text: "Правила форума",
    },
    {
      icon: "laptop-18-blue",
      href: "/",
      text: "Полная версия",
      onCLick: (e) => {
        e && e.preventDefault();
        debugger;
        goTo({ type: "mobile" });
      },
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <div className="sidebar__topbar">
          <BtnRound {...btnCloseData} />
          <BtnFlat {...btnAddThreadData}>Добавить тему</BtnFlat>
        </div>
        <div className="sidebar__content">
          <div className="sidebar__user">
            <User />
          </div>
          <SidebarMenu />
          <SidebarMyRubrics myRubrics={myRubricsDivided} />
          <SidebarAllRubrics allRubrics={allRubricsDivided} />
          <SidebarActionbar actionbarData={actionbarData} />
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
