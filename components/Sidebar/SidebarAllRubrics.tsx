import React from "react";

import SidebarAllRubricsItem from "./SidebarAllRubricsItem";

type Props = {
  allRubrics: any[];
};

export const SidebarAllRubrics = ({ allRubrics }: Props) => {
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
