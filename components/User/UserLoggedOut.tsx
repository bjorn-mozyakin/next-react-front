import React from "react";

import { defineAvatarClass } from "../../utils/helpers";
import BtnFlat from "../BtnFlat/BtnFlat";

export const UserLoggedOut = () => {
  const user = {
    savedAnonymousName: null, // определяется по LS/Cookies/IDB (не помню точно)
    defaultAnonymousName: "Test", // Дефолтное значение, задается жестко
    id: 123, // id пользователя - определяется при авторизации
  }; // TODO Перенести это в redux-store
  const { savedAnonymousName, defaultAnonymousName, id } = user;
  const nickname = savedAnonymousName || defaultAnonymousName;

  const avatarClass = defineAvatarClass(id);

  const btnLogInData = {
    additionalClasses: ["user__sign-in"],
    styles: {
      size: "tiny",
      color: "crimson-500",
      bg: "transparent",
      states: "crimson-100",
    },
    onClick: () => {
      // TODO ЛогИн
    },
  };

  return (
    <>
      <div className="user__main">
        <div className={`user__pic user__pic_size_small ${avatarClass}`}></div>
        <div className="user__info">
          <div className="user__name">{nickname}</div>
          <div className="user__metadata">Анонимный пользователь</div>
        </div>
      </div>
      <BtnFlat {...btnLogInData}>Войти</BtnFlat>
    </>
  );
};

export default UserLoggedOut;
