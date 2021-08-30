// Styles
// import styles from './Nav.module.scss';
import React from "react";
import { useDispatch } from "react-redux";

import { toggleSidebarVisibility } from "../../store/components/sidebar/sidebar.actions";

import { BtnRoundType } from "../../entities/Btn";
import BtnRound from "../BtnRound/BtnRound";
import Link from "../Link/Link";

export const Nav = () => {
  const dispatch = useDispatch();

  const handleBurgerClick = () => {
    dispatch(toggleSidebarVisibility());
  };

  type Item = {
    name: string;
    href: string;
    scroll: boolean;
  };

  const items: Item[] = [
    {
      name: "Мой форум",
      href: "/forum/",
      scroll: true,
    },
    {
      name: "Новое",
      href: "/forum/?sort=new",
      scroll: true,
    },
    {
      name: "Популярное",
      href: "/forum/?sort=1d",
      scroll: true,
    },
    {
      name: "Эксперты",
      href: "/forum/expert/all-answers/",
      scroll: true,
    },
    {
      name: "Прямой эфир",
      href: "/forum/all/",
      scroll: true,
    },
  ];

  const btnData: BtnRoundType = {
    additionalClasses: ["nav__menu-btn", "relative"],
    styles: {
      icon: "burger-18-crimson",
    },
    title: "Меню",
    onClick: () => handleBurgerClick(),
  };

  return (
    <nav className="nav">
      <BtnRound {...btnData} />
      <div className="nav__menu">
        {items.map(({ name, href }, idx) => {
          return (
            <div key={`navItem${idx}`} className="nav__item">
              <Link
                href={href}
                classNames="nav__link interactive"
                aria-label={name}
              >
                {name}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
