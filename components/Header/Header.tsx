// Styles
// import styles from "./Header.scss";

import React from "react";

import { BtnFlatType } from "../../entities/Btn";
import BtnFlat from "../BtnFlat/BtnFlat";
import Link from "../Link/Link";
import Placeholder from "../Placeholder/Placeholder";
import User from "../User/User";

export const Header = () => {
  const btnArticlesData: BtnFlatType = {
    additionalClasses: ["header__articles-btn"],
    styles: {
      size: "full",
    },
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <User />
        </div>
        <Link classNames="header__logo icon_logo-woman" title="На главную" />
        <div className="header__right">
          <Placeholder name="forumHeaderBannerD" />
          <Link>
            <BtnFlat {...btnArticlesData}>Статьи</BtnFlat>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
