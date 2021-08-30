import React from "react";

import Link from "../Link/Link";

import Footer16plus from "./Parts/Footer16plus";
import FooterActions from "./Parts/FooterActions";
import FooterCopyright from "./Parts/FooterCopyright";
import FooterShare from "./Parts/FooterShare";

export const FooterMobile = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo"></div>
        <FooterShare
          className="footer__share-btn"
          wrapperClassName="footer__share"
        />
        <FooterActions />
        <Link
          href="/womanru/guestbook/article/45915/"
          classNames="footer__link"
        >
          Правила пользования сайтом
        </Link>
        <p>Copyright (с) 2016-2021 ООО «Хёрст Шкулёв Паблишинг»</p>
        <FooterCopyright />
        <Footer16plus />
      </div>
    </footer>
  );
};

export default FooterMobile;
