import React from "react";

import Link from "../../Link/Link";

export const FooterSitemap = () => {
  const menuData = [
    {
      href: "/marketing/marketing-articles/article/95503/",
      text: "О проекте",
    },
    {
      href: "/pages/forum_help/",
      text: "Помощь",
    },
    {
      href: "/pages/forum_rules",
      text: "Правила форума",
    },
    {
      href: "/womanru/guestbook/article/45915/",
      text: "Правила сайта",
    },
    {
      href: "/marketing/marketing-articles/article/95502/",
      text: "Рекламодателям",
    },
    {
      href: "http://sp.woman.ru/",
      text: "Спецпроекты",
      target: "_blank",
      rel: "noopener",
    },
    {
      href: "/redirect/aHR0cDovL3d3dy5oZWFyc3Qtc2hrdWxldi1tZWRpYS5ydS9jYXJlZXIvdmFjYW5jeS8=/",
      text: "Вакансии",
      rel: "nofollow",
    },
  ];
  return (
    <div className="footer__menu">
      {menuData.map(({ href, text, target, rel }, idx) => (
        <Link key={`footerMenu${idx}`} href={href} target={target} rel={rel}>
          {text}
        </Link>
      ))}
    </div>
  );
};

export default FooterSitemap;
