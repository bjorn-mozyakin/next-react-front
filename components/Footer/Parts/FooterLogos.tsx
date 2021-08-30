import React from "react";

import Link from "../../Link/Link";

export const FooterLogos = () => {
  const logosData = [
    {
      icon: "logo-elle-carbon",
      href: "/redirect/aHR0cDovL3d3dy5lbGxlLnJ1Lw==/",
      ariaLabel: "Elle",
    },
    {
      icon: "logo-woman-ru-carbon",
    },
    {
      icon: "logo-womans-day-carbon",
      href: "/redirect/aHR0cDovL3d3dy53ZGF5LnJ1Lw==/",
      ariaLabel: "Woman's Day",
    },
    {
      icon: "logo-star-hit-carbon",
      href: "/redirect/aHR0cDovL3d3dy5zdGFyaGl0LnJ1Lw==/",
      ariaLabel: "Starhit",
    },
    {
      icon: "logo-marie-claire-carbon",
      href: "/redirect/aHR0cDovL3d3dy5tYXJpZWNsYWlyZS5ydS8=/",
      ariaLabel: "Marie Claire",
    },
    {
      icon: "logo-psychologies-carbon",
      href: "/redirect/aHR0cDovL3d3dy5wc3ljaG9sb2dpZXMucnUv/",
      ariaLabel: "Psychologies",
    },
    {
      icon: "logo-elle-girl-carbon",
      href: "/redirect/aHR0cDovL3d3dy5lbGxlZ2lybC5ydS8=/",
      ariaLabel: "Elle Girl",
    },
    {
      icon: "logo-parents-carbon",
      href: "/redirect/aHR0cDovL3d3dy5wYXJlbnRzLnJ1Lw==/",
      ariaLabel: "Parents",
    },
  ];

  return (
    <div className="footer__logos">
      <Link
        href="/redirect/aHR0cDovL3d3dy5oZWFyc3Qtc2hrdWxldi1tZWRpYS5ydS9wcm9qZWN0cy93bi8=/"
        classNames="footer__logo icon-before_logo-holding-carbon"
        target="_blank"
        rel="nofollow noopener"
        aria-label="Women's Network"
      ></Link>
      <div className="footer__logos_network">
        {logosData.map(({ href, icon, ariaLabel }, idx) => {
          return (
            <>
              {href ? (
                <Link
                  key={`FooterLogo${idx}`}
                  href={href}
                  classNames={`footer__logo icon-before_logo-${icon}`}
                  target="_blank"
                  aria-label={ariaLabel}
                ></Link>
              ) : (
                <div
                  key={`FooterLogo${idx}`}
                  className={`footer__logo icon-before_logo-${icon}`}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLogos;
