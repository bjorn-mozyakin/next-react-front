import React from "react";

import { renameDataAttributes } from "../../utils/helpers";

import Link from "../Link/Link";

export const SidebarMenu = () => {
  const menuData = [
    {
      icon: "w-icon-24-crimson",
      href: "/",
      text: "Главная",
    },
    {
      icon: "my-forum-24-crimson",
      href: "/forum/#my-forum/",
      text: "Мой форум",
      dataAttributes: {
        "google-interstitial": "false",
      },
    },
    {
      icon: "bell-24-crimson",
      href: "/forum/?sort=new",
      text: "Новое",
    },

    {
      icon: "star-24-crimson",
      href: "/forum/?sort=1d",
      text: "Популярное",
    },
    {
      icon: "expert-24-crimson",
      href: "/forum/expert/all-answers/",
      text: "Эксперты",
    },
    {
      icon: "live-24-crimson",
      href: "/forum/all/",
      text: "Прямой эфир",
    },
    {
      icon: "info-24-crimson",
      href: "/pages/forum_help/",
      text: "Помощь",
    },
    {
      icon: "search-24-crimson",
      text: "Поиск",
      onClick: () => {},
    },
  ];

  return (
    <ul className="sidebar__menu">
      {menuData.map(({ icon, href, text, dataAttributes, onClick }, idx) => {
        const attrs = dataAttributes && renameDataAttributes(dataAttributes);
        const menuItem = onClick ? (
          <div
            className={`sidebar__menu-link icon-before_${icon}`}
            onClick={onClick}
          >
            {text}
          </div>
        ) : (
          <Link
            classNames={`sidebar__menu-link icon-before_${icon}`}
            href={href}
            {...(attrs || "")}
          >
            {text}
          </Link>
        );

        return <li key={`sidebarMenu${idx}`}>{menuItem}</li>;
      })}
    </ul>
  );
};

export default SidebarMenu;
