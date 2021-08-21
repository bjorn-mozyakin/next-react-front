import React from "react";

import SidebarAllRubricsItem from "./SidebarAllRubricsItem";

export const SidebarAllRubrics = () => {
  const allRubrics = [
    [
      {
        href: "/relations/forum/",
        text: "Отношения",
        subSections: [
          {
            href: "/relations/men/forum/",
            text: "Мы и мужчины",
          },
          {
            href: "/relations/men/forum/",
            text: "Секс",
          },
          {
            href: "/relations/men/forum/",
            text: "Свадьба",
          },
          {
            href: "/relations/men/forum/",
            text: "Брак",
          },
          {
            href: "/relations/men/forum/",
            text: "Обо всем",
          },
        ],
      },
      {
        href: "/relations/forum/",
        text: "Отношения",
        subSections: [
          {
            href: "/relations/men/forum/",
            text: "Мы и мужчины",
          },
          {
            href: "/relations/men/forum/",
            text: "Секс",
          },
          {
            href: "/relations/men/forum/",
            text: "Свадьба",
          },
          {
            href: "/relations/men/forum/",
            text: "Брак",
          },
          {
            href: "/relations/men/forum/",
            text: "Обо всем",
          },
        ],
      },
    ],
    [
      {
        href: "/relations/forum/",
        text: "Отношения",
        subSections: [
          {
            href: "/relations/men/forum/",
            text: "Мы и мужчины",
          },
          {
            href: "/relations/men/forum/",
            text: "Секс",
          },
          {
            href: "/relations/men/forum/",
            text: "Свадьба",
          },
          {
            href: "/relations/men/forum/",
            text: "Брак",
          },
          {
            href: "/relations/men/forum/",
            text: "Обо всем",
          },
        ],
      },
    ],
  ];

  return (
    <div className="sidebar__all-rubrics-block">
      <div className="sidebar__title">Все рубрики</div>
      <div className="sidebar__all-rubrics-list">
        {allRubrics.map((rubrics, idx) => (
          <ul
            key={`sidebarAllRubricsHald${idx}`}
            className="sidebar__all-rubrics-list-half"
          >
            {rubrics.map((item, idx) => (
              <SidebarAllRubricsItem
                section={item}
                key={`sidebarSectionItem${idx}`}
              />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default SidebarAllRubrics;
