import React from "react";

import Link from "../Link/Link";

export type TabsData = {
  name: string;
  href: string;
  isActive?: boolean;
};

export const Tabs = ({ data }: any) => {
  return (
    <div className="tabs tabs_connected-top">
      {data.map(({ name, href, isActive }, idx) => {
        if (isActive) {
          return <div className="tabs__tab tabs__tab_active">{name}</div>;
        } else {
          return (
            <Link
              key={idx}
              href={`/forum/?sort=${href}`}
              className="tabs__tab"
              aria-label={name}
            >
              {name}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default Tabs;
