// Styles
// import styles from "./Header.module.scss";

import React from "react";

import { BtnFlatType } from "../../entities/Btn";
import BtnFlat from "../BtnFlat/BtnFlat";
import Link from "../Link/Link";
import Placeholder from "../Placeholder/Placeholder";

export const Header = () => {
  const btnArticlesData: BtnFlatType = {
    styles: {
      size: "full",
    },
    additionalClasses: ["header__articles-btn"],
    title: "sdf",
  };

  return (
    <div className="header__container">
      <div className="header__left">
        <div className="user">
          <div className="user__container">
            <div className="user__main">
              <div className="user__pic user__pic_size_small user__pic_crimson-100"></div>
              <div className="user__info">
                <div className="user__name">Test</div>
                <div className="user__metadata">Анонимный пользователь</div>
              </div>
            </div>
            <div className="user__sign-in btn-flat btn-flat_size_tiny btn-flat_color_crimson-500 btn-flat_states_crimson-100">
              Войти
            </div>
          </div>
        </div>
      </div>
      <a
        href="/"
        className="header__logo icon_logo-woman"
        title="На главную"
      ></a>
      <div className="header__right">
        <Placeholder name="forumHeaderBannerD" />
        <Link>
          <BtnFlat {...btnArticlesData}>Статьи</BtnFlat>
        </Link>
      </div>
    </div>
  );
};

export default Header;
