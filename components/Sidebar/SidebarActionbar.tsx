import React from "react";

type actionbarData = {
  icon: string;
  href: string;
  text: string;
};
type Props = {
  actionbarData: actionbarData[];
};

export const SidebarActionbar = ({ actionbarData }: Props) => {
  return (
    <div className="sidebar__actionbar actionbar actionbar_left">
      {actionbarData.map(({ icon, href, text }, idx) => (
        <a
          key={`sidebarActionbar_${idx}`}
          className={`actionbar__link icon-before_${icon}`}
          href={href}
        >
          {text}
        </a>
      ))}
    </div>
  );
};

export default SidebarActionbar;
