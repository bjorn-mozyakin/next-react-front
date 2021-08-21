import React from "react";

export const SidebarActionbar = () => {
  const actionbarData = [
    {
      icon: "script-18-crimson",
      href: "/pages/forum_rules/",
      text: "Правила форума",
    },
    {
      icon: "info-18-crimson",
      href: "/pages/forum_help/",
      text: "Помощь",
    },
    {
      icon: "mail-18-crimson",
      href: "mailto:admin@woman.ru",
      text: "Для связи: admin@woman.ru",
    },
  ];

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
