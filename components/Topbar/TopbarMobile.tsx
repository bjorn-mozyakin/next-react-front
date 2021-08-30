// Styles
// import styles from './Topbar.module.scss';

import React from "react";
import { useDispatch } from "react-redux";

import { toggleSearchFormVisibility } from "../../store/common/common.actions";
import { toggleSidebarVisibility } from "../../store/components/sidebar/sidebar.actions";

import { BtnRoundType } from "../../entities/Btn";
import BtnRound from "../BtnRound/BtnRound";
import Link from "../Link/Link";
import Placeholder from "../Placeholder/Placeholder";

export const TopbarMobile = () => {
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(toggleSidebarVisibility());
  };

  const handleSearchClick = () => {
    dispatch(toggleSearchFormVisibility());
  };

  const BtnBurgerData: BtnRoundType = {
    additionalClasses: ["topbar__menu"],
    styles: {
      icon: "burger-24-crimson",
    },
    onClick: () => handleBurgerClick(),
  };
  const BtnSearchData: BtnRoundType = {
    additionalClasses: ["topbar__search"],
    styles: {
      icon: "search-24-crimson",
    },
    onClick: () => handleSearchClick(),
  };

  return (
    <div className="topbar topbar_pos_sticky">
      <div className="topbar__container">
        <BtnRound {...BtnBurgerData} />
        <Link
          classNames="topbar__link"
          title="woman.ru"
          aria-label="Перейти на главную страницу сайта"
        >
          <div className="topbar__logo icon_logo-woman"></div>
        </Link>
        <Placeholder
          additionalClasses={["placeholder_head1"]}
          name="forumHead1BannerM"
        />
        <BtnRound {...BtnSearchData} />
      </div>
    </div>
  );
};

export default TopbarMobile;
