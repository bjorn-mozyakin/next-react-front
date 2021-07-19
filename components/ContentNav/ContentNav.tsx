import React from "react";

import { BtnFlatType } from "../../entities/Btn";
import BtnFlat from "../BtnFlat/BtnFlat";

type ContentNavProps = {
  children?: React.ReactNode;
  title: string;
};

export const ContentNav = ({ children, title }: ContentNavProps) => {
  const btnAddThreadData: BtnFlatType = {
    styles: {
      icon: "edit-18-marshmallow",
    },
    additionalClasses: ["content-nav__add-thread", "content-nav__actions-item"],
  };

  return (
    <div className="content-nav content-nav_connected-bottom">
      <div className="content-nav__container">
        <div className="content-nav__image icon_content-nav-page"></div>
        <div className="content-nav__content">
          <div className="content-nav__title-area">
            <h1 className="content-nav__title">{title}</h1>
          </div>
          <div className="content-nav__actions">
            <div className="content-nav__left-actions">{children}</div>
            <div className="content-nav__right-actions">
              <BtnFlat {...btnAddThreadData}>Добавить тему</BtnFlat>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentNav;
