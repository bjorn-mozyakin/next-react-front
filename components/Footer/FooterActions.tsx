import React from "react";

import { goTo } from "../../utils/helpers";

import Link from "../Link/Link";

export const FooterAtions = () => {
  return (
    <div className="footer__actions">
      <div
        className="footer__action footer__link footer__full-version icon-before_laptop-18-white"
        onClick={() => goTo({ type: "desktop" })}
      >
        Перейти на полную версию
      </div>
      <Link
        href="/mailer/subscribe"
        classNames="footer__action footer__link footer__subscribe icon-before_mail-18-white"
        target="_blank"
      >
        Подписаться на рассылку
      </Link>
    </div>
  );
};

export default FooterAtions;
