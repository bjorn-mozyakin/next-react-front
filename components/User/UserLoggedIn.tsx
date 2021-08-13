import React from "react";

import BtnFlat from "../BtnFlat/BtnFlat";
import Link from "../Link/Link";
import TitleBadge from "../TitleBadge/TitleBadge";

export const User = () => {
  // TODO Перенести это в redux-store
  const user = {
    avatarSrc:
      "//n1s1.hsmedia.ru/f2/0e/fd/f20efd34350c7063b347e75240c5de4c/100x100_0_acc3293e4d709336bfeb6c5c2a980c43@558x928_0xac120003_6736697551616687083.png",
    id: "123",
    nickname: "drakov@woman.ru",
  };
  const { avatarSrc, id, nickname } = user;

  const btnLogOutData = {
    additionalClasses: ["user__sign-in"],
    styles: {
      size: "tiny",
      color: "crimson-500",
      bg: "transparent",
      states: "crimson-100",
    },
    onClick: () => {
      // TODO ЛогАут
    },
  };

  return (
    <>
      <Link href={`/user/${id}`} rel="nofollow">
        <div className="user__pic user__pic_size_small">
          <img
            className="user__pic-img"
            src={avatarSrc}
            alt={`Аватарка ${nickname}`}
          />
        </div>
      </Link>
      <div className="user__info">
        <div className="user__maindata">
          <Link href={`/user/${id}`} classNames="user__name" rel="nofollow">
            {nickname}
          </Link>
        </div>
        <div className="user__metadata">
          <TitleBadge />
        </div>
      </div>
      <Link href="/forum/logout/" rel="nofollow">
        <BtnFlat {...btnLogOutData}>Выйти</BtnFlat>
      </Link>
    </>
  );
};

export default User;
