import React from "react";

import Link from "../../Link/Link";

export const FooterCopyright = () => {
  return (
    <div className="footer__copyright">
      <p>Сетевое издание «WOMAN.RU» (Женщина.РУ)</p>
      <p>
        Свидетельство о регистрации СМИ ЭЛ №ФС77-65950, выдано Федеральной
        службой по надзору в сфере связи, информационных технологий и массовых
        коммуникаций (Роскомнадзор) 10 июня 2016 года.16+
      </p>
      <p>
        Учредитель: Общество с ограниченной ответственностью «Хёрст Шкулёв
        Паблишинг»
      </p>
      <p>Главный редактор: Воронцева О. А.</p>
      <p>
        Контактные данные редакции для государственных органов (в том числе, для
        Роскомнадзора):
      </p>
      <p>
        email:
        <Link href="mailto:woman@woman.ru" classNames="footer__link">
          woman@woman.ru
        </Link>
      </p>
      <p>
        Телефон:
        <Link href="tel:+74956335633" classNames="footer__link">
          +7(495) 633-5-633
        </Link>
      </p>
    </div>
  );
};

export default FooterCopyright;
