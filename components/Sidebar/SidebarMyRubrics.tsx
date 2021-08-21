import React from "react";
import SidebarMyRubricsItem from "./SidebarMyRubricsItem";

export const SidebarMyRubrics = () => {
  const myRubrics = [
    [
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
    ],
    [
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
      {
        href: "/living/entertainment/forum/",
        section: "Жизнь форума",
        subSection: "Развлекательный портал",
      },
    ],
  ];

  return (
    <div className="sidebar__my-rubrics-block">
      <h3 className="sidebar__title">Мои рубрики</h3>
      <ul className="sidebar__my-rubrics-list relative">
        {myRubrics.map((rubrics, idx) => (
          <ul
            key={`sidebarMyRubricsHalf${idx}`}
            className="sidebar__my-rubrics-list-half"
          >
            {rubrics.map((item, idx) => (
              <SidebarMyRubricsItem
                item={item}
                key={`sidebarMyRubricsItem${idx}`}
              />
            ))}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMyRubrics;
