// Styles
// import styles from './Footer.module.scss';
import React from "react";

import { BtnRoundType } from "../../entities/Btn";
import BtnRound from "../BtnRound/BtnRound";
import Link from "../Link/Link";

type BtnShare = {
  href: string;
  title: string;
  icon: string;
};

export const FooterShare = () => {
  // TODO зачем редиректы?
  const btnsShareData: BtnShare[] = [
    {
      href: "/redirect/aHR0cHM6Ly96ZW4ueWFuZGV4LnJ1L3dvbWFu/",
      title: "zen.yandex.ru",
      icon: "zen-24-carbon",
    },

    {
      href: "/redirect/aHR0cHM6Ly96ZW4ueWFuZGV4LnJ1L3dvbWFu/",
      title: "fb.com",
      icon: "facebook-24-carbon",
    },
    {
      href: "https://www.instagram.com/woman_ru/",
      title: "instagram.com",
      icon: "instagram-24-carbon",
    },
    {
      href: "/redirect/aHR0cHM6Ly92ay5jb20vd29tYW5ydQ==/",
      title: "vk.com",
      icon: "vk-24-carbon",
    },

    {
      href: "/redirect/aHR0cHM6Ly93d3cudGlrdG9rLmNvbS9Ad29tYW5ydQ==/",
      title: "tiktok.com",
      icon: "tiktok-24-carbon",
    },

    {
      href: "/redirect/aHR0cHM6Ly9pbnZpdGUudmliZXIuY29tLz9nMj1BUUF6WWo2Y21NRG5Da2tQRlp5OGJlOHZwR1B0bXVuaFZldTd0V0RuYWtxSGJDRDE2d0VXRkZiYWM5QVdyVlVHJmxhbmc9cnU=/",
      title: "viber.com",
      icon: "viber-24-carbon",
    },
    {
      href: "/redirect/aHR0cHM6Ly9vay5ydS93b21hbnJ1/",
      title: "ok.ru",
      icon: "ok-24-carbon",
    },
    {
      href: "/redirect/aHR0cHM6Ly90Lm1lL3dvbWFuX3J1/",
      title: "telegram.org",
      icon: "telegram-24-carbon",
    },
    {
      href: "/redirect/aHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ3FrRDNUdzkwcDFHSHNjNUJfN2ZEOGc=/",
      title: "youtube.com",
      icon: "youtube-24-carbon",
    },
    {
      href: "https://twitter.com/woman_ru",
      title: "twitter.com",
      icon: "twitter-24-carbon",
    },
  ];

  return (
    <div className="footer__share">
      {btnsShareData.map(({ href, title, icon }, idx) => {
        const btnShareData: BtnRoundType = {
          additionalClasses: ["footer__share-btn"],
          styles: {
            size: "full",
            bg: "white-500",
            icon: icon,
          },
        };
        return (
          <Link
            href={href}
            title={title}
            rel="nofollow"
            key={`footerShare${idx}`}
          >
            <BtnRound {...btnShareData} />
          </Link>
        );
      })}
    </div>
  );
};

export default FooterShare;
