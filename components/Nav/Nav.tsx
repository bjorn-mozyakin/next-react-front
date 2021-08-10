// Styles
// import styles from './Nav.module.scss';
import React from "react";
import { useDispatch } from "react-redux";

import { BtnRoundType } from "../../entities/Btn";
import { toggleSidebarVisibility } from "../../srore/actions";
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
        {items.map((item, idx) => {
          const { name, href } = item;
          console.log("crab", name, href);
          return (
            <div key={`nav__item_${idx}`} className="nav__item">
              <Link
                href={href}
                className="nav__link interactive"
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
