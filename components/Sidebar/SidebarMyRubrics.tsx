import React from "react";

import SidebarMyRubricsItem from "./SidebarMyRubricsItem";

type Props = {
  myRubrics: any[];
};

export const SidebarMyRubrics = ({ myRubrics }: Props) => {
  // TODO
  // 1. Нужен ли класс relative??
  // 2. Откуда появляется маркер на Мобайле
  // 3. Может не вставлять _half на Мобайле?
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
