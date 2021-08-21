import React, { useState } from "react";

import Link from "../Link/Link";

type Section = {
  href: string;
  text: string;
  subSections: any;
};

type Props = {
  section: Section;
  key: string;
};

const SidebarAllRubricsItem = ({ section, key }: Props) => {
  const { href, text, subSections } = section;

  const [areSubSectionsVisible, setAreSubSectionsVisible] = useState(false);

  const handleClick = (e) => {
    e && e.preventDefault();
    setAreSubSectionsVisible(!areSubSectionsVisible);
  };

  return (
    <li
      key={`sidebarSection${key}`}
      className={`sidebar__all-rubrics-item ${
        areSubSectionsVisible ? "sidebar__all-rubrics-item_opened" : ""
      }`}
    >
      <Link classNames="sidebar__all-rubrics-link" href={href}>
        {text}
        <span
          className="sidebar__all-rubrics-open btn-round btn-round_volume_flat btn-round_size_tiny btn-round_states_crimson-100 icon-before_expand-18-crimson"
          onClick={handleClick}
        />
      </Link>
      {areSubSectionsVisible && (
        <ul className="sidebar__all-subrubrics-list">
          {subSections.map(({ href, text }, idx) => (
            <li
              key={`sidebarSubSection${idx}`}
              className="sidebar__all-subrubrics-item"
            >
              <Link classNames="sidebar__all-subrubrics-link" href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarAllRubricsItem;
