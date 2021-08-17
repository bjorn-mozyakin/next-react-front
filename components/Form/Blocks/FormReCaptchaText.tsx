import React from "react";

import Link from "../../Link/Link";

const FormReCaptchaText = () => {
  return (
    <div className="form__recaptcha-policy">
      Этот сайт защищён reCAPTCHA, применяются
      <Link
        href="https://policies.google.com/privacy"
        classNames="form__link"
        target="_blank"
      >
        &nbsp;Политика конфиденциальности&nbsp;
      </Link>
      и
      <Link
        href="https://policies.google.com/terms"
        classNames="form__link"
        target="_blank"
      >
        &nbsp;Условия использования&nbsp;
      </Link>
      сервисов Google;
    </div>
  );
};

export default FormReCaptchaText;
