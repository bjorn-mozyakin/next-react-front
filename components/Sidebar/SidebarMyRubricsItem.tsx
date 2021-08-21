import React from "react";

import Link from "../Link/Link";

type Section = {
  href: string;
  section: string;
  subSection: string;
};

type Props = {
  item: Section;
  key: string;
};

const SidebarMyRubricsItem = ({ item, key }: Props) => {
  const { href, section, subSection } = item;

  return (
    <li key={key} className="sidebar__my-rubrics-item">
      <Link
        classNames="sidebar__my-rubrics-link"
        href={href}
        title={subSection}
      >
        <div className="sidebar__my-rubric">{section}</div>
        <div className="sidebar__my-subrubric">{subSection}</div>
      </Link>
    </li>
  );
};

export default SidebarMyRubricsItem;
